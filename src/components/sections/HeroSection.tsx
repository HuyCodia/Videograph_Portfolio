import { SITE_CONFIG } from '@/constants/siteConfig'

interface HeroSectionProps {
  onPlayShowreel: () => void
}

export function HeroSection({ onPlayShowreel }: HeroSectionProps) {
  return (
    <header className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-24 overflow-hidden">
      {/* Ambient background lighting */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-amber-500/10 blur-[160px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Static Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4.5 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-6 sm:mb-7 select-none">
              {SITE_CONFIG.creator.status}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.25rem] font-black uppercase tracking-tight text-white leading-[1.05] mb-5">
              VISUALS THAT <br />
              HIT DIFFERENT.
            </h1>

            {/* Categories Subtitle */}
            <p className="text-base sm:text-lg font-medium text-zinc-300 mb-4">
              {SITE_CONFIG.creator.categories}
            </p>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl mb-8">
              {SITE_CONFIG.creator.shortBio}
            </p>

            {/* Action Buttons with synchronized Contact-button animation */}
            <div className="flex flex-wrap items-center gap-5">
              {/* Button 1: Explore My Work */}
              <div className="relative group/btn1 inline-flex">
                <span
                  className="pointer-events-none absolute inset-0 rounded-full bg-amber-500/45 opacity-0 transition-all duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn1:-inset-[4px] sm:group-hover/btn1:-inset-[4.5px] group-hover/btn1:opacity-100 will-change-[inset,opacity]"
                  aria-hidden="true"
                />

                <a
                  href="#projects"
                  className="relative inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-sm sm:text-base font-bold text-black shadow-lg shadow-amber-500/25 cursor-pointer select-none"
                >
                  <div className="relative overflow-hidden">
                    <span className="block transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover/btn1:-translate-y-full text-black">
                      Explore My Work
                    </span>
                    <span
                      className="absolute inset-0 block transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform translate-y-full group-hover/btn1:translate-y-0 text-black font-bold"
                      aria-hidden="true"
                    >
                      Explore My Work
                    </span>
                  </div>
                </a>
              </div>

              {/* Button 2: Get in Touch */}
              <div className="relative group/btn2 inline-flex">
                <span
                  className="pointer-events-none absolute inset-0 rounded-full bg-zinc-700/50 opacity-0 transition-all duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn2:-inset-[4px] sm:group-hover/btn2:-inset-[4.5px] group-hover/btn2:opacity-100 will-change-[inset,opacity]"
                  aria-hidden="true"
                />

                <a
                  href="#contact"
                  className="relative inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 px-7 py-3.5 text-sm sm:text-base font-semibold text-zinc-200 shadow-md cursor-pointer select-none transition-colors group-hover/btn2:border-zinc-700 group-hover/btn2:text-white"
                >
                  <div className="relative overflow-hidden">
                    <span className="block transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover/btn2:-translate-y-full text-zinc-200 group-hover/btn2:text-white">
                      Get in Touch
                    </span>
                    <span
                      className="absolute inset-0 block transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform translate-y-full group-hover/btn2:translate-y-0 text-white font-semibold"
                      aria-hidden="true"
                    >
                      Get in Touch
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Showreel Card */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end self-center">
            <div
              onClick={onPlayShowreel}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPlayShowreel()
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Play Showreel"
              className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] aspect-square rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900 shadow-2xl shadow-black/80 cursor-default shrink-0 self-center focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <img
                src="/hero-card.png"
                alt="Your Next Showreel - Featured Visual"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
