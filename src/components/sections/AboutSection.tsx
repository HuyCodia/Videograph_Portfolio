import { SectionHeader } from '@/components/ui/SectionHeader'
import { SITE_CONFIG } from '@/constants/siteConfig'
import { Camera } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-28 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Portrait / On-Set Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80"
              alt={`${SITE_CONFIG.creator.name}`}
              className="w-full aspect-[4/5] object-cover filter contrast-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                  {SITE_CONFIG.creator.name}
                </span>
                <span className="text-sm font-medium text-white">{SITE_CONFIG.creator.role}</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                <Camera className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Story */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <SectionHeader
            eyebrow="About Me"
            title="Where creativity meets technology."
            className="mb-8"
          />

          <div className="space-y-5">
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              I'm an aspiring video editor and computer science student at Leibniz University Hannover, passionate about visual storytelling, creative editing, and digital media.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              My background in computer science shapes the way I approach creative projects — with curiosity, attention to detail, and a constant drive to learn and experiment.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              From football edits and short-form content to color grading and motion graphics, I enjoy exploring different styles and turning ideas into engaging visual experiences.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              I'm always looking for new ways to combine creativity and technology, develop my skills, and bring fresh ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
