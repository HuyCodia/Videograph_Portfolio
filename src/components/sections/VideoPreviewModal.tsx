import type { Project } from '@/types/project'
import { Modal } from '@/components/ui/Modal'
import { Play, ArrowUpRight } from 'lucide-react'

interface VideoPreviewModalProps {
  project: Project | null
  onClose: () => void
}

/**
 * Resolves an embeddable URL for YouTube (including Shorts), Instagram Reels, or explicit embed URLs.
 */
function resolveEmbedUrl(project: Project): string | null {
  if (project.videoEmbedUrl) {
    return project.videoEmbedUrl
  }

  const urlToCheck = project.videoUrl || project.externalUrl
  if (!urlToCheck) return null

  // YouTube Shorts: youtube.com/shorts/<id>
  const shortMatch = urlToCheck.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/)
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}?autoplay=1&rel=0`
  }

  // Standard YouTube: youtube.com/watch?v=<id> or youtu.be/<id>
  const ytMatch = urlToCheck.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/)
  if (ytMatch) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`
  }

  // Instagram Reel / Post: instagram.com/reel/<id> or instagram.com/p/<id>
  const instaMatch = urlToCheck.match(/instagram\.com\/(?:reel|p)\/([a-zA-Z0-9_-]+)/)
  if (instaMatch) {
    return `https://www.instagram.com/reel/${instaMatch[1]}/embed/`
  }

  // TikTok Video: tiktok.com/@user/video/<id> or tiktok.com/v/<id>
  const tiktokMatch = urlToCheck.match(/tiktok\.com\/(?:@[^/]+\/video|v)\/([0-9]+)/)
  if (tiktokMatch) {
    return `https://www.tiktok.com/player/v1/${tiktokMatch[1]}`
  }

  return null
}

export function VideoPreviewModal({ project, onClose }: VideoPreviewModalProps) {
  const isVertical =
    project?.category === 'Football Edits' || project?.category === 'Short-Form Content'

  const embedUrl = project ? resolveEmbedUrl(project) : null

  return (
    <Modal
      isOpen={Boolean(project)}
      onClose={onClose}
      title={project?.title}
      subtitle={
        project
          ? `${project.client} • ${project.category} (${project.year})${
              project.views ? ` • 👁 ${project.views} Views` : ''
            }`
          : undefined
      }
    >
      {project && (
        <div className="flex flex-col">
          {/* Video Container */}
          <div
            className={`${
              isVertical ? 'aspect-[9/16] max-h-[72vh] w-full max-w-[400px] mx-auto' : 'aspect-video w-full'
            } bg-black relative flex items-center justify-center overflow-hidden`}
          >
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={project.title}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                scrolling="no"
              />
            ) : project.videoUrl ? (
              <video
                src={project.videoUrl}
                controls
                autoPlay
                className="h-full w-full object-contain bg-black"
                poster={project.thumbnail}
              >
                Dein Browser unterstützt das Video-Format nicht.
              </video>
            ) : (
              <>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/40">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-black mb-3 shadow-lg">
                    <Play className="h-7 w-7 fill-current translate-x-0.5" />
                  </div>
                  <p className="text-sm font-semibold text-white">Video Vorschau</p>
                  <p className="text-xs text-zinc-300 mt-1 max-w-md leading-relaxed">
                    Lege dein Video in den Ordner <code className="text-amber-400 font-mono bg-zinc-900 px-1.5 py-0.5 rounded">public/videos/</code> und hinterlege den Pfad (z. B. <code className="text-amber-400 font-mono bg-zinc-900 px-1.5 py-0.5 rounded">/videos/mein-video.mp4</code>).
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Description & Technical Specs */}
          <div className="p-6 bg-zinc-950 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                Über die Produktion
              </h4>
              {project.description && (
                <p className="text-xs text-zinc-300 leading-relaxed">{project.description}</p>
              )}
            </div>

            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center shrink-0 rounded-full bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 text-xs font-bold transition-all shadow-md shadow-amber-500/20"
              >
                <span>
                  {project.platform
                    ? `Watch on ${
                        project.platform === 'Reel'
                          ? 'Instagram'
                          : project.platform === 'Shorts'
                            ? 'YouTube'
                            : project.platform
                      }`
                    : 'Watch Original'}
                </span>
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      )}
    </Modal>
  )
}

