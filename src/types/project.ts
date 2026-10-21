export type ProjectCategory =
  | 'Football Edits'
  | 'Short-Form Content'
  | 'AI Video Creation'
  | 'Cinematic Videos'
  | 'VFX & Experiments'

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
