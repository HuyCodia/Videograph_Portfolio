import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { Menu, X } from "lucide-react";

function FilmStripPlayIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 61 61"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 0 6 A 6 6 0 0 1 6 0 H 7 V 8 H 15 V 0 H 46 V 8 H 54 V 0 H 55 A 6 6 0 0 1 61 6 V 55 A 6 6 0 0 1 55 61 H 54 V 53 H 46 V 61 H 15 V 53 H 7 V 61 H 6 A 6 6 0 0 1 0 55 Z M 7 15 h 8 v 12 H 7 Z M 7 34 h 8 v 12 H 7 Z M 46 15 h 8 v 12 H 46 Z M 46 34 h 8 v 12 H 46 Z M 22 19 L 39 30 L 22 41 Z"
      />
    </svg>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      // Pure scroll-direction response:
      if (delta > 0) {
        // Any downward scroll movement -> Hide immediately
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else if (delta < 0) {
        // Any upward scroll movement -> Show immediately
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    // Instant wheel listener for zero-latency response on the first scroll tick
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else if (e.deltaY < 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <header
      className={`fixed top-5 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none will-change-transform ${
        isVisible
          ? "translate-y-0 opacity-100 transition-all duration-[500ms] ease-[cubic-bezier(0.34,1.15,0.64,1)]"
          : "-translate-y-40 opacity-0 transition-all duration-[220ms] ease-in"
      }`}
    >
      {/* Floating Pill Navbar */}
      <nav className="pointer-events-auto flex items-center justify-between gap-5 sm:gap-6 md:gap-8 lg:gap-9 rounded-full border border-zinc-800/80 bg-zinc-950/90 backdrop-blur-2xl pl-3 pr-1.5 py-1.5 sm:pl-3.5 sm:pr-2 sm:py-2 shadow-2xl shadow-black/80 transition-all duration-300">
        {/* Left: Brand Icon + HUY DANG */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-amber-500 text-black shadow-md shadow-amber-500/25">
            <FilmStripPlayIcon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
          </div>
          <span className="text-lg sm:text-xl font-bold text-white tracking-[-0.02em] uppercase">
            {SITE_CONFIG.creator.name}
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6 text-sm sm:text-base font-semibold text-zinc-200">
          {SITE_CONFIG.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group py-1 inline-block cursor-pointer select-none"
            >
              <div className="relative overflow-hidden">
                <span className="block transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:-translate-y-full text-zinc-200">
                  {item.label}
                </span>
                <span
                  className="absolute inset-0 block transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform translate-y-full group-hover:translate-y-0 text-amber-400 font-semibold"
                  aria-hidden="true"
                >
                  {item.label}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Right: Contact Capsule Button with half-opacity expanding silhouette */}
        <div className="hidden sm:block">
          <div className="relative group/btn inline-flex">
            {/* Balanced half-opacity expanding silhouette (mini minimal larger: 4px / 4.5px) */}
            <span
              className="pointer-events-none absolute inset-0 rounded-full bg-amber-500/45 opacity-0 transition-all duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:-inset-[4px] sm:group-hover/btn:-inset-[4.5px] group-hover/btn:opacity-100 will-change-[inset,opacity]"
              aria-hidden="true"
            />

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-bold text-black shadow-md shadow-amber-500/25 cursor-pointer select-none"
            >
              <div className="relative overflow-hidden">
                <span className="block transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover/btn:-translate-y-full text-black">
                  Contact
                </span>
                <span
                  className="absolute inset-0 block transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform translate-y-full group-hover/btn:translate-y-0 text-black font-bold"
                  aria-hidden="true"
                >
                  Contact
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition"
          aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Pill */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto mt-3 w-full max-w-xs rounded-3xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl p-5 shadow-2xl flex flex-col gap-4 text-center animate-in fade-in zoom-in-95 duration-150">
          {SITE_CONFIG.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="group py-2 inline-flex justify-center items-center cursor-pointer text-base font-semibold"
            >
              <div className="relative overflow-hidden">
                <span className="block transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:-translate-y-full text-zinc-200">
                  {item.label}
                </span>
                <span
                  className="absolute inset-0 block transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform translate-y-full group-hover:translate-y-0 text-amber-400 font-semibold"
                  aria-hidden="true"
                >
                  {item.label}
                </span>
              </div>
            </a>
          ))}
          <div className="relative group/mbtn inline-flex justify-center mt-1 w-full">
            <span
              className="pointer-events-none absolute inset-0 rounded-full bg-amber-500/45 opacity-0 transition-all duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/mbtn:-inset-[4px] group-hover/mbtn:opacity-100 will-change-[inset,opacity]"
              aria-hidden="true"
            />
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative inline-flex items-center justify-center rounded-full bg-amber-500 py-2.5 px-6 text-sm font-bold text-black shadow-md shadow-amber-500/25 cursor-pointer select-none w-full"
            >
              <div className="relative overflow-hidden">
                <span className="block transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover/mbtn:-translate-y-full text-black">
                  Contact
                </span>
                <span
                  className="absolute inset-0 block transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform translate-y-full group-hover/mbtn:translate-y-0 text-black font-bold"
                  aria-hidden="true"
                >
                  Contact
                </span>
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
