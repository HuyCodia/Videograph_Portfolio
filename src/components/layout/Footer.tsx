import { SITE_CONFIG } from '@/constants/siteConfig'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10 text-sm text-zinc-500">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p>
          © {CURRENT_YEAR} {SITE_CONFIG.creator.name}. Alle Rechte vorbehalten.
        </p>

        <div className="flex gap-8">
          <a href="#" className="hover:text-amber-400 transition-colors">
            Impressum
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  )
}
