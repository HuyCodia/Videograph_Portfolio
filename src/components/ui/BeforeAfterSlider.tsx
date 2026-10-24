import { useState, useRef, useCallback, useEffect } from 'react'

interface BeforeAfterSliderProps {
  readonly beforeImage?: string
  readonly afterImage: string
  readonly alt: string
  readonly className?: string
  readonly initialPosition?: number
}

/**
 * Before/After Image Comparison Slider
 *
 * Interactive split-view comparison slider for post-production color grading showcases.
 * Supports smooth mouse dragging, touch gestures with pointer capture, click-to-position,
 * and keyboard navigation (arrow keys).
 *
 * Displays "Before" (flat Log/RAW curve) and "After" (cinematic graded film look)
 * with corner badges, a central dividing line, and an interactive grab handle.
 */
export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  alt,
  className = '',
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate position percentage from pointer event clientX
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const offsetX = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId)
      } catch {
        // Pointer capture was already released
      }
      setIsDragging(false)
    }
  }

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 2
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault()
      setSliderPosition((prev) => Math.max(0, prev - step))
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault()
      setSliderPosition((prev) => Math.min(100, prev + step))
    } else if (e.key === 'Home') {
      e.preventDefault()
      setSliderPosition(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setSliderPosition(100)
    }
  }

  // Safety fallback if mouse releases outside window without pointer capture
  useEffect(() => {
    const onGlobalMouseUp = () => setIsDragging(false)
    window.addEventListener('mouseup', onGlobalMouseUp)
    return () => window.removeEventListener('mouseup', onGlobalMouseUp)
  }, [])

  // Fade out corner badges when the slider handle comes within proximity
  const beforeBadgeOpacity = Math.max(0, Math.min(1, (sliderPosition - 10) / 14))
  const afterBadgeOpacity = Math.max(0, Math.min(1, (90 - sliderPosition) / 14))

  // Determine whether to apply the authentic flat Log curve simulation:
  // If no separate beforeImage is provided, or beforeImage equals afterImage,
  // apply the S-Log3 / Log-C transformation to simulate camera raw footage.
  const isSimulatedLog = !beforeImage || beforeImage === afterImage
  const resolvedBeforeImage = beforeImage || afterImage

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Color Grading Vorher / Nachher Vergleich"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPosition)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`group relative h-full w-full overflow-hidden rounded-xl sm:rounded-2xl select-none cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-amber-500/80 ${
        isDragging ? 'touch-none' : ''
      } ${className}`}
    >
      {/* 1. Base Layer: "After" (Graded Rec.709 / Film Look) */}
      <img
        src={afterImage}
        alt={`${alt} - Nachher (Color Graded)`}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none rounded-xl sm:rounded-2xl"
        loading="eager"
        draggable={false}
      />

      {/* 2. Top Layer: "Before" (Flat S-Log3 / Camera RAW footage) - Clipped by slider position */}
      <div
        className="absolute inset-0 h-full w-full pointer-events-none rounded-xl sm:rounded-2xl overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={resolvedBeforeImage}
          alt={`${alt} - Vorher (Flat Log / RAW)`}
          className="absolute inset-0 h-full w-full object-cover pointer-events-none rounded-xl sm:rounded-2xl"
          style={
            isSimulatedLog
              ? {
                  // S-Log3 / Arri Log-C emulation: lifted shadow pedestal, flat contrast, desaturated primaries
                  filter: 'contrast(0.66) brightness(1.22) saturate(0.44) sepia(0.06)',
                }
              : undefined
          }
          loading="eager"
          draggable={false}
        />
      </div>

      {/* 3. Corner Pill Badges */}
      {/* Left Badge: "Before" */}
      <div
        style={{ opacity: beforeBadgeOpacity }}
        className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 pointer-events-none transition-opacity duration-150"
      >
        <span className="inline-flex items-center rounded-md bg-black/70 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-white tracking-wide border border-white/10 shadow-xl select-none">
          Before
        </span>
      </div>

      {/* Right Badge: "After" */}
      <div
        style={{ opacity: afterBadgeOpacity }}
        className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 pointer-events-none transition-opacity duration-150"
      >
        <span className="inline-flex items-center rounded-md bg-black/70 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-white tracking-wide border border-white/10 shadow-xl select-none">
          After
        </span>
      </div>

      {/* 4. Center Divider Line */}
      <div
        className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.7)] z-20 pointer-events-none -translate-x-1/2 will-change-[left]"
        style={{ left: `${sliderPosition}%` }}
      />

      {/* 5. Circular Slider Handle / Thumb with Bidirectional Chevrons */}
      <div
        className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-[left]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div
          className={`flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-zinc-950 shadow-[0_4px_24px_rgba(0,0,0,0.6)] border border-white/80 transition-transform duration-150 ${
            isDragging ? 'scale-110 shadow-[0_6px_28px_rgba(0,0,0,0.8)]' : 'group-hover:scale-105'
          }`}
        >
          {/* Bidirectional horizontal arrow chevrons */}
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="8 7 3 12 8 17" />
            <polyline points="16 7 21 12 16 17" />
          </svg>
        </div>
      </div>
    </div>
  )
}
