import { useEffect, useRef } from 'react'
import type { SkillItem } from '@/types/skill'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'

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
 * Cards enter from the bottom scaled down by 10% (scale: 0.9) and smoothly scale up
 * to their full 1.0 size while preserving their exact aspect ratio as they reach
 * their locked sticky end position.
 *
 * All cards standardize on a uniform 480px desktop height with identical,
 * symmetrical 26px padding around the artwork.
 */
export function SkillCard({ skill, index, totalCards }: SkillCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardInnerRef = useRef<HTMLDivElement>(null)

  const formattedIndex = String(index + 1).padStart(2, '0')
  const formattedTotal = String(totalCards).padStart(2, '0')
  const hasComparison = skill.id === 'color-grading' || Boolean(skill.beforeImage && skill.afterImage)

  useEffect(() => {
    const container = containerRef.current
    const cardInner = cardInnerRef.current
    if (!container || !cardInner) return

    let rafId: number | null = null

    const updateScale = () => {
      const rect = container.getBoundingClientRect()
      const stickyTop = parseFloat(window.getComputedStyle(container).top) || 0
      const currentTop = rect.top

      // Once the card has reached or passed its sticky end position, lock strictly at 1.0
      if (currentTop <= stickyTop + 1) {
        cardInner.style.transform = 'scale(1)'
        return
      }

      // Card is scrolling up from below towards its sticky end position
      const travelDistance = Math.max(100, window.innerHeight - stickyTop)
      const remainingDistance = currentTop - stickyTop
      const progress = Math.max(0, Math.min(1, 1 - remainingDistance / travelDistance))
      const scale = 0.9 + 0.1 * progress

      cardInner.style.transform = `scale(${scale.toFixed(4)})`
    }

    const onScrollOrResize = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateScale()
          rafId = null
        })
      }
    }

    // Initialize scale on mount
    updateScale()

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="sticky mb-[10vh] sm:mb-[12vh]"
      style={{
        // Pins the card in a balanced center position with safe clearance below the floating navbar
        top: 'max(96px, calc(50vh - 200px))',
        zIndex: index + 1,
      }}
    >
      {/* Solid background and deep shadow ensure cards behind are completely covered with no bleed-through.
          Standardized to a uniform 480px height on desktop for a balanced, slightly sleeker card profile.
          willChange transform ensures buttery smooth 60fps/120fps GPU compositing. */}
      <div
        ref={cardInnerRef}
        style={{
          transformOrigin: 'center center',
          willChange: 'transform',
        }}
        className="rounded-2xl sm:rounded-3xl border border-zinc-800 bg-zinc-950 p-4 sm:p-5 lg:p-5 shadow-2xl shadow-black/95 min-h-[490px] lg:h-[490px]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.07fr_1fr] gap-8 lg:gap-10 h-full items-stretch">
          {/* Left Column: Skill Information */}
          <div className="flex flex-col items-start justify-center p-3 sm:p-6 lg:py-8 lg:pr-6 lg:pl-14">
            {/* Sleek, Minimalist Numbering Index */}
            <div className="flex items-center gap-1.5 text-xs font-mono tracking-wider mb-4 select-none">
              <span className="text-amber-400 font-semibold">{formattedIndex}</span>
              <span className="text-zinc-600 font-light">/</span>
              <span className="text-zinc-500 font-medium">{formattedTotal}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 sm:mb-5">
              {skill.title}
            </h3>

            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 font-normal leading-relaxed max-w-[410px]">
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
          <div className="flex items-center justify-center h-full">
            <div className="relative w-full h-[280px] sm:h-[360px] lg:h-full overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800/80 shadow-2xl bg-zinc-900">
              {hasComparison ? (
                <BeforeAfterSlider
                  beforeImage={skill.beforeImage}
                  afterImage={skill.afterImage || skill.image}
                  alt={skill.imageAlt}
                />
              ) : (
                <img
                  src={skill.image}
                  alt={skill.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover rounded-xl sm:rounded-2xl"
                  loading="eager"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
