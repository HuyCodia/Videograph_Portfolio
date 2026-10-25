import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

interface ImageLightboxProps {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly src: string
  readonly alt: string
}

/**
 * Image Lightbox Modal
 *
 * Implements an immersive, smooth-fade full-screen modal view for portraits and artwork:
 * - Animated fade-in and scale-up transitions (300ms ease-out)
 * - Backdrop click to close (cursor-zoom-out)
 * - Corner close button (X)
 * - Escape key dismissal
 * - Background body scroll lock while active
 * - Preserves aspect ratio with object-contain to display the entire photo
 */
export function ImageLightbox({ isOpen, onClose, src, alt }: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState(false)

  // Smooth enter / exit transition management
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined

    if (isOpen) {
      setMounted(true)
      // Small frame delay to ensure DOM render before triggering CSS transition
      const raf = requestAnimationFrame(() => {
        setActive(true)
      })
      return () => cancelAnimationFrame(raf)
    } else {
      setActive(false)
      timer = setTimeout(() => {
        setMounted(false)
      }, 300)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isOpen])

  // Body scroll lock and Escape keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!mounted) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} - Großansicht`}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 transition-opacity duration-300 ease-out select-none ${
        active ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* 1. Backdrop: Clicking anywhere outside closes the lightbox */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-zoom-out"
        aria-hidden="true"
      />

      {/* 2. Top-Right Floating Close Button (X) */}
      <button
        type="button"
        onClick={onClose}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900/90 border border-zinc-700/70 text-zinc-300 shadow-2xl hover:bg-zinc-800 hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/80"
        aria-label="Großansicht schließen (Esc)"
      >
        <X className="h-5 w-5" />
      </button>

      {/* 3. Responsive Lightbox Image: Full image visibility with object-contain */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative z-10 max-h-[90vh] max-w-[90vw] flex items-center justify-center transition-all duration-300 ease-out ${
          active ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[88vh] max-w-[88vw] w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-zinc-800/80 bg-zinc-950"
          draggable={false}
        />
      </div>
    </div>
  )
}

