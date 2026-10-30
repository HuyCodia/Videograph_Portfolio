export type ProjectCategory =
  | 'Football Edits'
  | 'Short-Form Content'
  | 'Comedy & Entertainment'
  | 'AI Video Creation'
  | 'Cinematic Videos'
  | 'VFX & Experiments'

/**
 * Checks whether a project is rendered in a 9:16 vertical format.
 * Prioritizes explicit `aspectRatio`, then standard categories, then platform defaults.
 */
export function isVerticalProject(
  project?: Pick<Project, 'category' | 'aspectRatio' | 'platform'> | null
): boolean {
  if (!project) return false
  if (project.aspectRatio === '9:16') return true
  if (project.aspectRatio === '16:9') return false
  if (project.category === 'Football Edits' || project.category === 'Short-Form Content') return true
  if (project.category === 'Comedy & Entertainment') {
    return project.platform === 'TikTok' || project.platform === 'Reel' || project.platform === 'Shorts'
  }
  return false
}

/**
 * Supported social media platforms.
 * 'Reel' and 'Shorts' are preserved for legacy backward compatibility,
 * and will automatically be rendered as 'Instagram' and 'YouTube'.
 */
export type SocialPlatform =
  | 'TikTok'
  | 'Instagram'
  | 'YouTube'
  | 'Reel'
  | 'Shorts'

export interface Project {
  readonly id: string
  readonly title: string
  readonly client: string
  readonly category: ProjectCategory
  readonly platform?: SocialPlatform
  readonly views?: string
  readonly year: string
  readonly duration: string
  readonly thumbnail: string
  readonly aspectRatio?: string
  readonly videoEmbedUrl?: string
  readonly videoUrl?: string
  readonly externalUrl?: string
  readonly description?: string
}
