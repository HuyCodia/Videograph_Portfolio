import { useState } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SITE_CONFIG } from '@/constants/siteConfig'
import { ImageLightbox } from '@/components/ui/ImageLightbox'
import { GraduationCap, Clapperboard } from 'lucide-react'

export function AboutSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const portraitSrc = '/pictures/portrait.jpg'
  const portraitAlt = `${SITE_CONFIG.creator.name} Portrait`

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-28 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Portrait / On-Set Image */}
        <div className="lg:col-span-5 relative">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsLightboxOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setIsLightboxOpen(true)
              }
            }}
            aria-label={`${portraitAlt} vergrößern`}
            className="group relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/80 transition-all duration-300 hover:border-zinc-700 hover:shadow-amber-500/10 active:scale-[0.99]"
          >
            <img
              src={portraitSrc}
              alt={portraitAlt}
              className="w-full aspect-[4/5] object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05] will-change-transform"
              style={{ objectPosition: 'center 45%' }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: Bio & Story */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <SectionHeader
            eyebrow="ABOUT ME"
            title="Hey, I'm Huy."
            className="mb-7"
          />

          <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            <p>
              I'm a video creator and computer science student with a passion for visual storytelling and creative editing.
            </p>

            <p>
              From football edits to color grading and motion graphics, I enjoy experimenting with new ideas and bringing visuals to life. I also manage my brother's football content channel, creating and editing videos for his social media.
            </p>

            <p>
              My approach combines clean visuals, intentional pacing, and platform-native editing styles to make every video feel polished, engaging, and built to perform.
            </p>
          </div>

          {/* Quick Identity Highlights */}
          <div className="mt-7 pt-6 border-t border-zinc-800/80 space-y-3.5 select-none">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-amber-500 shrink-0" aria-hidden="true" />
              <span className="text-sm sm:text-base font-semibold text-zinc-200">
                Computer Science Student
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Clapperboard className="h-5 w-5 text-amber-500 shrink-0" aria-hidden="true" />
              <span className="text-sm sm:text-base font-semibold text-zinc-200">
                Video Editing & Creative Media
              </span>
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        src={portraitSrc}
        alt={portraitAlt}
      />
    </section>
  )
}
