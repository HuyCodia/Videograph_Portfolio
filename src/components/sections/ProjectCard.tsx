import { useState } from 'react'
import type { Project, SocialPlatform } from '@/types/project'
import { Play, ArrowUpRight, Smartphone, Monitor, Eye } from 'lucide-react'

interface ProjectCardProps {
  readonly project: Project
  readonly onSelect: (project: Project) => void
  readonly className?: string
}

/**
 * Resolves the badge format label for the top-left pill (e.g. Reel, Shorts, TikTok, YouTube).
 */
function resolveBadgeLabel(platform?: SocialPlatform, isVertical?: boolean): string {
  if (platform === 'TikTok') return 'TikTok'
  if (platform === 'Instagram' || platform === 'Reel') return 'Reel'
  if (platform === 'Shorts') return 'Shorts'
  if (platform === 'YouTube') return isVertical ? 'Shorts' : 'YouTube'
  return isVertical ? 'Reel' : 'YouTube'
}

/**
 * Resolves the target external social platform brand for action links (Watch on ...).
 */
function resolveActionPlatform(platform?: SocialPlatform): string {
  if (platform === 'TikTok') return 'TikTok'
  if (platform === 'Instagram' || platform === 'Reel') return 'Instagram'
  if (platform === 'YouTube' || platform === 'Shorts') return 'YouTube'
  return 'YouTube'
}

/**
 * Social platform pill badge with an animated amber radar pulse dot.
 */
function PlatformBadge({ platform }: { readonly platform: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white tracking-wide border border-white/15 shadow-lg select-none">
      <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
        <span className="radar-circle radar-circle-1" aria-hidden="true" />
        <span className="radar-circle radar-circle-2" aria-hidden="true" />
        <span
          className="relative z-10 block h-2 w-2 shrink-0 rounded-full bg-amber-500"
          aria-hidden="true"
        />
      </span>

      <span className="leading-none">
        {platform}
      </span>
    </span>
  )
}

/**
 * Center interactive play button overlay that scales on card hover
 * and fades out when the user hovers over the direct external action link.
 */
function CardPlayOverlay({ isDimmed }: { readonly isDimmed: boolean }) {
  return (
    <div
      className={`absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-all duration-300 ${
        isDimmed ? 'opacity-0 scale-90' : 'opacity-90 group-hover:opacity-100'
      }`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-black shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400">
        <Play className="h-7 w-7 fill-current translate-x-0.5" />
      </div>
    </div>
  )
}

/**
 * ProjectCard Component
 *
 * Renders portfolio project cards dynamically based on format:
 * - 9:16 Vertical Cards: Football Edits & Short-Form Content (TikTok, Instagram, Shorts)
 * - 16:9 Horizontal Cards: AI Video Creation, Cinematic Videos, VFX & Experiments
 */
export function ProjectCard({ project, onSelect, className }: ProjectCardProps) {
  const [isLinkHovered, setIsLinkHovered] = useState(false)

  // Vertical format is used strictly for short-form social media edits
  const isVertical =
    project.category === 'Football Edits' || project.category === 'Short-Form Content'

  const badgeLabel = resolveBadgeLabel(project.platform, isVertical)
  const actionPlatform = resolveActionPlatform(project.platform)
  const actionLinkLabel = `Watch on ${actionPlatform}`

  // --------------------------------------------------------------------------
  // 1. VERTICAL VIDEO CARD (9:16 Aspect Ratio)
  // --------------------------------------------------------------------------
  if (isVertical) {
    return (
      <article
        onClick={() => onSelect(project)}
        onKeyDown={(e) => {
          if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            onSelect(project)
          }
        }}
        role="button"
        tabIndex={0}
        className={`project-card-container group relative cursor-pointer overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950 transition-all duration-300 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 focus:outline-none focus:ring-2 focus:ring-amber-500 aspect-[9/16] w-full flex flex-col justify-between ${className ?? ''}`}
        aria-label={`${project.title} - ${project.category} Vertikales Video ansehen`}
      >
        {/* Background Poster Image */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
            isLinkHovered ? 'scale-100' : 'group-hover:scale-105'
          }`}
          loading="lazy"
        />

        {/* Top Badges: Platform on Left & 9:16 Aspect indicator on Right */}
        <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between pointer-events-none">
          <PlatformBadge platform={badgeLabel} />

          <span className="rounded-full bg-black/65 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono font-medium text-zinc-300 border border-white/10 shadow-md flex items-center gap-1.5 select-none">
            <Smartphone className="h-3 w-3 text-amber-400" />
            9:16
          </span>
        </div>

        {/* Center Hover Play Button */}
        <CardPlayOverlay isDimmed={isLinkHovered} />

        {/* Bottom Metadata & Controls */}
        <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-black via-black/85 to-transparent pt-24 pointer-events-none">
          {/* Category & High-Contrast Duration Badge */}
          <div className="flex items-center justify-between text-xs mb-2.5">
            <span className="inline-flex items-center rounded-md bg-amber-500/15 border border-amber-500/30 px-2.5 py-1 text-[11px] font-bold text-amber-400 tracking-wider uppercase">
              {project.category}
            </span>
            <span className="inline-flex items-center rounded-md bg-black/85 backdrop-blur-md px-2.5 py-1 text-xs font-mono font-bold text-white border border-white/20 shadow-lg">
              {project.duration}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
            {project.title}
          </h3>

          {/* Views Counter Display */}
          {project.views && (
            <div className="mt-2.5 flex items-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white border border-white/15 shadow-md">
                <Eye className="h-3.5 w-3.5 text-white stroke-[2.2]" />
                <span className="font-bold tracking-tight">{project.views}</span>
              </span>
            </div>
          )}

          {/* Action Link: External Watch Button */}
          <div className="mt-3 flex items-center pointer-events-auto">
            {project.externalUrl ? (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => setIsLinkHovered(true)}
                onMouseLeave={() => setIsLinkHovered(false)}
                className="inline-flex items-center text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group/link cursor-pointer py-1.5 px-2 -mx-2 rounded-lg"
                aria-label={`${project.title} - ${actionLinkLabel} (externer Link)`}
              >
                <span className="pointer-events-none">{actionLinkLabel}</span>
                <ArrowUpRight className="pointer-events-none ml-1 h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <span
                onMouseEnter={() => setIsLinkHovered(true)}
                onMouseLeave={() => setIsLinkHovered(false)}
                className="inline-flex items-center text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform py-1.5 px-2 -mx-2"
              >
                <span className="pointer-events-none">{actionLinkLabel}</span>
                <ArrowUpRight className="pointer-events-none ml-1 h-3.5 w-3.5" />
              </span>
            )}
          </div>
        </div>
      </article>
    )
  }

  // --------------------------------------------------------------------------
  // 2. HORIZONTAL VIDEO CARD (16:9 Aspect Ratio)
  // --------------------------------------------------------------------------
  return (
    <article
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onSelect(project)
        }
      }}
      role="button"
      tabIndex={0}
      className={`project-card-container group cursor-pointer overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-amber-500/10 focus:outline-none focus:ring-2 focus:ring-amber-500 flex flex-col w-full ${className ?? ''}`}
      aria-label={`${project.title} - ${project.category} Projekt Details ansehen`}
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden bg-zinc-950">
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
            isLinkHovered ? 'scale-100' : 'group-hover:scale-105'
          }`}
          loading="lazy"
        />

        {/* Top Badges: Platform on Left & Views + 16:9 on Right */}
        <div className="absolute inset-x-0 top-0 p-4 sm:p-5 z-10 flex items-center justify-between pointer-events-none">
          <PlatformBadge platform={badgeLabel} />

          <div className="flex items-center gap-1.5">
            {project.views && (
              <span className="rounded-full bg-black/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white border border-white/15 shadow-md flex items-center gap-1.5 select-none">
                <Eye className="h-3.5 w-3.5 text-white stroke-[2.2]" />
                <span className="font-bold tracking-tight">{project.views}</span>
              </span>
            )}
            <span className="rounded-full bg-black/65 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono font-medium text-zinc-300 border border-white/10 shadow-md flex items-center gap-1.5 select-none">
              <Monitor className="h-3 w-3 text-amber-400" />
              16:9
            </span>
          </div>
        </div>

        {/* Center Play Button Overlay */}
        <CardPlayOverlay isDimmed={isLinkHovered} />

        {/* Duration Badge Bottom-Right */}
        <div className="absolute bottom-3 right-3 rounded-md bg-black/85 px-2.5 py-1 text-xs font-mono font-medium text-zinc-200 backdrop-blur-sm border border-zinc-800/80 select-none">
          {project.duration}
        </div>
      </div>

      {/* Meta Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2.5">
            <span className="inline-flex items-center rounded-md bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 text-[11px] font-bold text-amber-400 tracking-wider uppercase">
              {project.category}
            </span>
            <span className="font-mono text-zinc-500">{project.year}</span>
          </div>

          <h3 className="text-xl font-bold text-white">
            {project.title}
          </h3>

          <p className="text-sm text-zinc-400 mt-1.5">{project.client}</p>

          {project.description && (
            <p className="text-xs text-zinc-500 mt-3 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          )}
        </div>

        {/* Action Link: External Watch Button */}
        <div className="mt-5 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
          {project.externalUrl ? (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setIsLinkHovered(true)}
              onMouseLeave={() => setIsLinkHovered(false)}
              className="inline-flex items-center text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group/link cursor-pointer py-1.5 px-2 -mx-2 rounded-lg"
              aria-label={`${project.title} - ${actionLinkLabel} (externer Link)`}
            >
              <span className="pointer-events-none">{actionLinkLabel}</span>
              <ArrowUpRight className="pointer-events-none ml-1 h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <span
              onMouseEnter={() => setIsLinkHovered(true)}
              onMouseLeave={() => setIsLinkHovered(false)}
              className="inline-flex items-center text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform py-1.5 px-2 -mx-2"
            >
              <span className="pointer-events-none">{actionLinkLabel}</span>
              <ArrowUpRight className="pointer-events-none ml-1 h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
