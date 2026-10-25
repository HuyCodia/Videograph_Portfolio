import { Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/constants/siteConfig'
import { Button } from '@/components/ui/Button'
import { InstagramIcon, YouTubeIcon } from '@/components/icons/SocialIcons'

export function ContactSection() {
  const instagramUrl =
    SITE_CONFIG.socials.find((s) => s.key === 'instagram')?.href ??
    'https://www.instagram.com/huuy_dng/'
  const youtubeUrl =
    SITE_CONFIG.socials.find((s) => s.key === 'youtube')?.href ??
    'https://www.youtube.com/@huydang5254'

  return (
    <section
      id="contact"
      className="min-h-screen min-h-[100dvh] flex flex-col justify-center items-center mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-12 sm:py-16 border-t border-zinc-900"
    >
      <div className="w-full max-w-5xl mx-auto rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-7 sm:p-10 md:p-12 lg:p-14 text-center relative overflow-hidden shadow-2xl">
        {/* Glow effect */}
        <div
          className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-amber-500/15 blur-[120px]"
          aria-hidden="true"
        />

        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-400">
          GET IN TOUCH
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black tracking-tight text-white mt-2.5 mb-4 max-w-4xl mx-auto leading-tight">
          <span className="block">LET'S CONNECT.</span>
          <span className="block text-amber-400 whitespace-nowrap">LET'S CREATE SOMETHING.</span>
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-7 sm:mb-8 leading-relaxed">
          Interested in my work? I'd love to hear from you. Whether it's a job opportunity, a
          creative collaboration or simply a conversation — feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Button
            href={`mailto:${SITE_CONFIG.creator.email}`}
            variant="primary"
            size="lg"
            icon={<Mail className="h-5 w-5" />}
            className="px-7 py-3.5 sm:px-8 sm:py-3.5 text-sm sm:text-base shadow-xl shadow-amber-500/20"
          >
            {SITE_CONFIG.creator.email}
          </Button>

          <div className="flex items-center gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 transition hover:border-amber-400 hover:text-amber-400 hover:scale-105"
              aria-label="Instagram Profil besuchen"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>

            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 transition hover:border-amber-400 hover:text-amber-400 hover:scale-105"
              aria-label="YouTube Kanal besuchen"
            >
              <YouTubeIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* CURRENTLY Status Badge Card */}
        <div className="mt-8 sm:mt-10 max-w-md mx-auto rounded-xl sm:rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-4 sm:p-5 text-left backdrop-blur-md shadow-xl select-none">
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-500">
              CURRENTLY
            </span>
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">
            Open to new opportunities
          </h3>
          <p className="text-xs text-zinc-400">
            Video Editing · Creative Media · Digital Content
          </p>
        </div>
      </div>
    </section>
  )
}