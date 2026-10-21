import { SectionHeader } from '@/components/ui/SectionHeader'
import { SITE_CONFIG } from '@/constants/siteConfig'
import { Camera, Film, Award, CheckCircle2 } from 'lucide-react'

export function AboutSection() {
  const highlights = [
    'Über 8 Jahre internationale Erfahrung bei Werbeproduktionen, VFX & Musikvideos',
    'Eigene 6K Cinema-Kamerazüge (Sony FX-Reihe & RED Digital Cinema)',
    'Zertifiziertes Color Grading in DaVinci Resolve für High-End Postproduktion',
    'Lizensierter Drohnenpilot für spektakuläre Luftaufnahmen (EU-Klassen A1/A3 & A2)',
  ]

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-28 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Portrait / On-Set Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80"
              alt={`${SITE_CONFIG.creator.name} am Filmset`}
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
            eyebrow="Über mich"
            title="Cineastische Ästhetik & Visual Effects treffen auf präzises Handwerk."
            className="mb-8"
          />

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6 font-normal">
            Für mich ist ein Film mehr als nur bewegte Bilder. Es ist die Kunst, Emotionen greifbar zu machen, Stimmungen durch Licht und Visual Effects zu formen und Geschichten zu erzählen, die im Gedächtnis des Zuschauers nachhallen.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
            Seit über acht Jahren begleite ich Marken, Musiker und visionäre Unternehmen von der ersten Idee bis zum finalen Master. Mein Anspruch: Jeder Frame soll wie ein Kunstwerk wirken – mit filmischen Farben, atmosphärischer Lichtsetzung und dynamischer Kameraführung.
          </p>

          {/* Highlights List */}
          <div className="space-y-3.5 mb-10">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-zinc-300">{item}</span>
              </div>
            ))}
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-zinc-850 pt-8">
            <div className="rounded-xl border border-zinc-800/70 bg-zinc-900/30 p-4">
              <Film className="h-5 w-5 text-amber-400 mb-2" />
              <div className="text-xl font-bold text-white">60+</div>
              <div className="text-xs text-zinc-400 mt-0.5">Produzierte Filme</div>
            </div>
            <div className="rounded-xl border border-zinc-800/70 bg-zinc-900/30 p-4">
              <Award className="h-5 w-5 text-amber-400 mb-2" />
              <div className="text-xl font-bold text-white">12</div>
              <div className="text-xs text-zinc-400 mt-0.5">Festival Auszeichnungen</div>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-xl border border-zinc-800/70 bg-zinc-900/30 p-4">
              <Camera className="h-5 w-5 text-amber-400 mb-2" />
              <div className="text-xl font-bold text-white">6K DCI</div>
              <div className="text-xs text-zinc-400 mt-0.5">Max. Aufnahmeauflösung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
