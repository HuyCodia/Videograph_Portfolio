/**
 * YouTube Data API v3 Client & 24h LocalStorage Cache Service.
 *
 * Designed to minimize quota usage:
 * - Batches all video IDs into a single HTTP request (1 quota unit).
 * - Caches responses in browser localStorage for 24 hours.
 * - Gracefully falls back to existing project metadata if no API key is provided,
 *   quota is exceeded, or the client is offline.
 */

export interface YouTubeVideoStats {
  readonly viewCount: string
  readonly rawViewCount: number
  readonly likeCount?: string
  readonly duration?: string
}

export interface YouTubeStatsCache {
  readonly timestamp: number
  readonly data: Record<string, YouTubeVideoStats>
}

export const YOUTUBE_CACHE_KEY = 'videograph_yt_stats_v2'
export const YOUTUBE_CACHE_TTL_MS = 24 * 60 * 60 * 1000 // 24 hours

/**
 * Extracts standard 11-character YouTube video ID from various YouTube URL formats:
 * - https://www.youtube.com/embed/<id>
 * - https://youtube.com/shorts/<id>
 * - https://www.youtube.com/watch?v=<id>
 * - https://youtu.be/<id>
 */
export function extractYouTubeId(url?: string): string | null {
  if (!url) return null

  // Embed format: youtube.com/embed/<id>
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/)
  if (embedMatch) return embedMatch[1]

  // Shorts format: youtube.com/shorts/<id>
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/)
  if (shortsMatch) return shortsMatch[1]

  // Watch or short link format: youtube.com/watch?v=<id> or youtu.be/<id>
  const standardMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  if (standardMatch) return standardMatch[1]

  return null
}

/**
 * Formats a raw numeric view count into a compact string matching portfolio style:
 * - 297 -> "297"
 * - 12400 -> "12.4K"
 * - 314000 -> "314K"
 * - 1200000 -> "1.2M"
 */
export function formatViewCount(count: number): string {
  if (!Number.isFinite(count) || count < 0) return '0'

  if (count >= 1_000_000) {
    const formatted = (count / 1_000_000).toFixed(1).replace(/\.0$/, '')
    return `${formatted}M`
  }

  if (count >= 1_000) {
    const formatted = (count / 1_000).toFixed(1).replace(/\.0$/, '')
    return `${formatted}K`
  }

  return count.toLocaleString('de-DE')
}

/**
 * Formats an ISO 8601 duration string from YouTube (e.g. PT1M45S, PT30S, PT1H2M3S)
 * into standard human-readable format MM:SS or HH:MM:SS.
 */
export function formatYouTubeDuration(isoDuration?: string): string | null {
  if (!isoDuration || typeof isoDuration !== 'string') return null

  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return null

  const hours = match[1] ? Number.parseInt(match[1], 10) : 0
  const minutes = match[2] ? Number.parseInt(match[2], 10) : 0
  const seconds = match[3] ? Number.parseInt(match[3], 10) : 0

  const pad = (num: number) => num.toString().padStart(2, '0')

  if (hours > 0) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
  }

  return `${pad(minutes)}:${pad(seconds)}`
}

/**
 * Retrieves cached YouTube video stats from localStorage if still within the 24-hour TTL.
 */
export function getStoredStats(): Record<string, YouTubeVideoStats> | null {
  try {
    const raw = localStorage.getItem(YOUTUBE_CACHE_KEY)
    if (!raw) return null

    const cache: YouTubeStatsCache = JSON.parse(raw)
    const isStillFresh = Date.now() - cache.timestamp < YOUTUBE_CACHE_TTL_MS

    if (isStillFresh && cache.data && typeof cache.data === 'object') {
      return cache.data
    }

    return null
  } catch {
    return null
  }
}

/**
 * Saves fresh stats to localStorage with the current timestamp.
 */
export function saveStatsToStorage(data: Record<string, YouTubeVideoStats>): void {
  try {
    const payload: YouTubeStatsCache = {
      timestamp: Date.now(),
      data,
    }
    localStorage.setItem(YOUTUBE_CACHE_KEY, JSON.stringify(payload))
  } catch {
    // Silently ignore storage quota or private browsing errors
  }
}

/**
 * Fetches live video statistics for a list of YouTube video IDs in a single batched call.
 * Returns null if no API key is present or on any network/API failure.
 */
export async function fetchYouTubeStats(
  videoIds: string[]
): Promise<Record<string, YouTubeVideoStats> | null> {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY
  if (!apiKey || videoIds.length === 0) {
    return null
  }

  const uniqueIds = Array.from(new Set(videoIds.filter(Boolean)))
  if (uniqueIds.length === 0) {
    return null
  }

  try {
    const endpoint = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${uniqueIds.join(',')}&key=${apiKey}`
    const response = await fetch(endpoint)

    if (!response.ok) {
      console.warn(`YouTube Data API responded with status ${response.status}`)
      return null
    }

    const json = await response.json()
    if (!json.items || !Array.isArray(json.items)) {
      return null
    }

    const statsMap: Record<string, YouTubeVideoStats> = {}

    for (const item of json.items) {
      const id = item.id as string
      const rawViews = Number(item.statistics?.viewCount ?? 0)
      const rawLikes = Number(item.statistics?.likeCount ?? 0)
      const parsedDuration = formatYouTubeDuration(item.contentDetails?.duration)

      statsMap[id] = {
        viewCount: formatViewCount(rawViews),
        rawViewCount: rawViews,
        likeCount: item.statistics?.likeCount ? formatViewCount(rawLikes) : undefined,
        duration: parsedDuration ?? undefined,
      }
    }

    // Persist to 24-hour cache
    saveStatsToStorage(statsMap)

    return statsMap
  } catch (error) {
    console.warn('Failed to fetch YouTube stats:', error)
    return null
  }
}
