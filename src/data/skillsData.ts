import type { SkillItem } from '@/types/skill'

export const SKILLS_DATA: readonly SkillItem[] = [
  {
    id: 'short-form-repurposing',
    title: 'Short-Form Repurposing',
    description:
      'Professional long-form video editing focused on storytelling, pacing, and viewer retention. Includes clean cuts, motion graphics, subtitles, sound design, and visual enhancements that keep audiences engaged from intro to end screen.',
    image: '/skills/youtube-editing.png',
    imageAlt: 'Short-Form Repurposing showcase',
  },
  {
    id: 'color-grading',
    title: 'Color Grading',
    description:
      'High-end cinematic color grading in DaVinci Resolve. Custom film emulations, precise skin tone management, atmospheric lighting contrast, and signature color palettes engineered for music videos, commercials, and cinematic productions.',
    image: '/skills/color-grading.jpg',
    imageAlt: 'Color Grading Vorher- und Nachher-Vergleich in DaVinci Resolve',
    beforeImage: '/skills/color-grading.jpg',
    afterImage: '/skills/color-grading.jpg',
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    description:
      'Dynamic visual effects, kinetic 3D typography, holographic overlays, and fluid motion design. Transforming edits into visually immersive, high-production showpieces that command viewer attention from the first second.',
    image: '/skills/motion-graphics.jpg',
    imageAlt: 'Motion Graphics and 3D Visual Effects showcase',
  },
] as const
