import type { SkillItem } from '@/types/skill'

interface SkillCardProps {
  readonly skill: SkillItem
  readonly index: number
  readonly totalCards: number
}

/**
 * Individual sticky skill card component.
 * Uses CSS sticky positioning with dynamic z-indexing and uniform scroll spacing
 * so that each incoming card cleanly glides over and covers previous cards,
 * maintaining an authentic physical card deck stacking interaction.
 *
 * All cards standardize on a uniform 520px desktop height with identical,
 * symmetrical 26px padding around the artwork.
 */
export function SkillCard({ skill, index, totalCards }: SkillCardProps) {
  const formattedIndex = String(index + 1).padStart(2, '0')
  const formattedTotal = String(totalCards).padStart(2, '0')

  return (
    <div
      className="sticky mb-[10vh] sm:mb-[12vh]"
      style={{
        // Pins the card in a balanced center position with safe clearance below the floating navbar
        top: 'max(96px, calc(50vh - 200px))',
        zIndex: index + 1,
      }}
    >
      {/* Solid background and deep shadow ensure cards behind are completely covered with no bleed-through.
          Standardized to a uniform 480px height on desktop for a balanced, slightly sleeker card profile. */}
      <div className="rounded-2xl sm:rounded-3xl border border-zinc-800 bg-zinc-950 p-4 sm:p-5 lg:p-6 shadow-2xl shadow-black/95 min-h-[480px] lg:h-[480px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 h-full items-stretch">
          {/* Left Column: Skill Information */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center p-3 sm:p-6 lg:p-8">
            {/* Sleek, Minimalist Numbering Index */}
            <div className="flex items-center gap-1.5 text-xs font-mono tracking-wider mb-4 select-none">
              <span className="text-amber-400 font-semibold">{formattedIndex}</span>
              <span className="text-zinc-600 font-light">/</span>
              <span className="text-zinc-500 font-medium">{formattedTotal}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 sm:mb-5">
              {skill.title}
            </h3>

            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl">
              {skill.description}
            </p>

            {skill.ctaText && skill.ctaHref && (
              <a
                href={skill.ctaHref}
                className="mt-7 sm:mt-8 inline-flex items-center justify-center rounded-full border border-zinc-700/70 bg-zinc-800/90 px-6 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-semibold text-zinc-100 shadow-md cursor-pointer select-none transition-all duration-300 hover:bg-zinc-700 hover:border-zinc-500 hover:text-white hover:shadow-lg active:scale-[0.98]"
              >
                {skill.ctaText}
              </a>
            )}
          </div>

          {/* Right Column: Visual Artwork - Standardized height with uniform 26px margins */}
          <div className="lg:col-span-6 flex items-center justify-center h-full">
            <div className="relative w-full h-[280px] sm:h-[360px] lg:h-full overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800/80 shadow-2xl bg-zinc-900">
              <img
                src={skill.image}
                alt={skill.imageAlt}
                className="absolute inset-0 h-full w-full object-cover rounded-xl sm:rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
