import { useState, useEffect } from 'react'
import type { Project } from '@/types/project'
import {
  extractYouTubeId,
  getStoredStats,
  fetchYouTubeStats,
  type YouTubeVideoStats,
} from '@/services/youtube'

/**
 * Merges projects with live or cached YouTube statistics.
 */
function applyStatsToProjects(
  projects: readonly Project[],
  stats: Record<string, YouTubeVideoStats>
): Project[] {
  return projects.map((project) => {
    const ytId =
      extractYouTubeId(project.videoEmbedUrl) ||
      extractYouTubeId(project.externalUrl) ||
      extractYouTubeId(project.videoUrl)

    if (ytId && stats[ytId]?.viewCount) {
      return {
        ...project,
        views: stats[ytId].viewCount,
      }
    }

    return project
  })
}

/**
 * Custom React hook that enriches project data with live YouTube metrics.
 * Uses a 24-hour localStorage cache to strictly limit API quota consumption.
 */
export function useLiveProjects(initialProjects: readonly Project[]): Project[] {
  // Synchronous initialization with cached values to avoid layout shift on reload
  const [projects, setProjects] = useState<Project[]>(() => {
    const cached = getStoredStats()
    if (!cached) return [...initialProjects]
    return applyStatsToProjects(initialProjects, cached)
  })

  useEffect(() => {
    // 1. Gather all YouTube IDs from projects
    const videoIdMap: { projectId: string; ytId: string }[] = []

    for (const project of initialProjects) {
      const ytId =
        extractYouTubeId(project.videoEmbedUrl) ||
        extractYouTubeId(project.externalUrl) ||
        extractYouTubeId(project.videoUrl)

      if (ytId) {
        videoIdMap.push({ projectId: project.id, ytId })
      }
    }

    if (videoIdMap.length === 0) return

    // 2. Check if cached data is already fresh and complete
    const cached = getStoredStats()
    if (cached) {
      const hasAllVideos = videoIdMap.every((entry) => Boolean(cached[entry.ytId]))
      if (hasAllVideos) {
        console.log('📦 [YouTube Cache] Aufrufzahlen aus 24h-LocalStorage aktiv (0 API-Quota verbraucht):', cached)
        return
      }
    }

    // 3. Otherwise, perform a single batched fetch if API key is configured
    const allVideoIds = videoIdMap.map((entry) => entry.ytId)

    fetchYouTubeStats(allVideoIds).then((freshStats) => {
      if (!freshStats) return

      console.log('🔴 [YouTube API] Frische Live-Views von Google geladen:', freshStats)
      setProjects((currentProjects) => applyStatsToProjects(currentProjects, freshStats))
    })
  }, [initialProjects])

  return projects
}
