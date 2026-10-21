import { Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/constants/siteConfig'
import { Button } from '@/components/ui/Button'
import { InstagramIcon, YouTubeIcon } from '@/components/icons/SocialIcons'

export function ContactSection() {
  const instagramUrl = SITE_CONFIG.socials.find((s) => s.key === 'instagram')?.href ?? 'https://www.instagram.com/huuy_dng/'
  const youtubeUrl = SITE_CONFIG.socials.find((s) => s.key === 'youtube')?.href ?? 'https://www.youtube.com/@huydang5254'
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-28 border-t border-zinc-900">
      <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-10 sm:p-14 md:p-20 text-center relative overflow-hidden shadow-2xl">
        {/* Glow effect */}
        <div
          className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 h-72 w-[700px] rounded-full bg-amber-500/15 blur-[120px]"
          aria-hidden="true"
        />

        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-400">
          Zusammenarbeit
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mt-3 mb-6 max-w-3xl mx-auto leading-tight">
          Lass uns dein nächstes Projekt verwirklichen.
        </h2>

        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Egal ob globale Werbekampagne, emotionaler Imagefilm, Brand Story oder Musikvideo – lass uns
          über deine Vision sprechen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button
            href={`mailto:${SITE_CONFIG.creator.email}`}
            variant="primary"
            size="lg"
            icon={<Mail className="h-5 w-5" />}
            className="px-8 py-4 text-base shadow-xl shadow-amber-500/20"
          >
            {SITE_CONFIG.creator.email}
          </Button>

          <div className="flex items-center gap-3.5">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 transition hover:border-amber-400 hover:text-amber-400 hover:scale-105"
              aria-label="Instagram Profil besuchen"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>

            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 transition hover:border-amber-400 hover:text-amber-400 hover:scale-105"
              aria-label="YouTube Kanal besuchen"
            >
              <YouTubeIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
