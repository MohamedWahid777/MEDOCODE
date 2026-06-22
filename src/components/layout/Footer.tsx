import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowUp } from 'lucide-react'
import { navLinks } from '../../lib/constants'
import { Logo } from '../ui/Logo'

export function Footer() {
  const { t } = useTranslation()
  const footerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end']
  })

  // Cinematic reveal effect: Footer content moves up as you scroll down to it
  // Highly balanced range for responsive screen heights
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '0%'])

  // Observe when the footer area is entered to show the scroll-to-top button
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { 
        threshold: 0.05, // Trigger when 5% of the footer is visible
        rootMargin: '0px 0px 50px 0px' // Slight offset to load gracefully
      }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer 
      ref={footerRef}
      className="relative overflow-hidden bg-[var(--color-footer)] border-t border-[var(--color-footer-border)] pt-20 pb-12"
      dir="ltr"
    >
      <motion.div 
        style={{ y }}
        className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10"
      >
        {/* Main Asymmetric Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-16 sm:mb-20">
          
          {/* LEFT COLUMN: BRAND & IDENTITY SUMMARY (5 Columns on Desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10 items-center text-center lg:items-start lg:text-start">
            <div className="flex flex-col items-center lg:items-start">
              <div className="mb-4">
                <Logo />
              </div>
              <p className="font-mono-label text-[10px] sm:text-xs text-on-surface-variant tracking-widest uppercase max-w-sm leading-relaxed">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Current Studio Status (Exclusive to Desktop & Tablet Layouts) */}
            <div className="hidden lg:block">
              <p className="font-mono-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">
                Status
              </p>
              <div className="flex items-center gap-2.5 font-sans text-xs text-primary">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                Available for new projects & opportunities
              </div>
            </div>

            {/* Compact copyright grouped cleanly at the base of column */}
            <div className="hidden lg:flex flex-col gap-6">
              <p className="font-mono-label text-[10px] text-on-surface-variant/80 tracking-widest uppercase">
                {t('footer.copyright')}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: RESTRUCTURED LINKS & INQUIRIES (7 Columns on Desktop) */}
          <div className="lg:col-span-7 flex justify-between gap-8 sm:grid sm:grid-cols-2 lg:gap-8 relative w-full px-4 lg:px-0">
            
            {/* Navigation Column — mirrors main navbar exactly */}
            <div className="border-t border-white/10 pt-6 w-1/2 sm:w-auto flex flex-col">
              <h2 className="font-mono-label text-on-surface-variant uppercase mb-6 tracking-widest text-[10px] sm:text-xs text-start">
                {t('footer.navigation')}
              </h2>
              <ul className="flex flex-col justify-between h-full pb-2 gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="relative text-xs sm:text-sm text-primary font-sans font-medium py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out block w-fit text-start"
                    >
                      {t(`nav.${link.label.toLowerCase()}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inquiries / Social Icons — same design system as ContactSection socials */}
            <div className="border-t border-white/10 pt-6 w-1/2 sm:w-auto flex flex-col items-end sm:items-start text-end sm:text-start">
              <h2 className="font-mono-label text-on-surface-variant uppercase mb-6 tracking-widest text-[10px] sm:text-xs">
                Socials
              </h2>
              <div className="flex flex-col justify-between h-full items-end sm:items-start pb-2 gap-4" dir="ltr">
                {/* GitHub */}
                <a href="https://github.com/MohamedWahid777" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="relative h-12 rounded-full border border-white/10 flex items-center text-on-surface-variant hover:text-[var(--github-icon-hover)] hover:border-white/40 hover:bg-white/5 transition-[max-width,border-color,background-color,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group overflow-visible lg:overflow-hidden max-w-[48px] lg:hover:max-w-[200px]">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0 relative z-10">
                    <svg className="w-5 h-5 lg:group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a11.9 11.9 0 0 0-6 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.8 4.8 0 0 0-.1 3.5 5.1 5.1 0 0 0-1.4 3.5c0 5.6 3.3 6.8 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"/><path d="M9 20c-4 1-5-2-7-2"/></svg>
                  </div>
                  <span className="hidden lg:block font-mono-label text-[10px] tracking-widest uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap pr-6 -ml-1">GitHub</span>
                  <span className="lg:hidden absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-mono-label text-[10px] tracking-widest uppercase text-on-surface-variant bg-surface-container-high border border-white/10 px-3 py-1.5 rounded-sm whitespace-nowrap pointer-events-none shadow-2xl z-50">GitHub</span>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/mohamed-wahid-11469a3b8" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="relative h-12 rounded-full border border-white/10 flex items-center text-on-surface-variant hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-[max-width,border-color,background-color,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group overflow-visible lg:overflow-hidden max-w-[48px] lg:hover:max-w-[200px]">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0 relative z-10">
                    <svg className="w-5 h-5 lg:group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <span className="hidden lg:block font-mono-label text-[10px] tracking-widest uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap pr-6 -ml-1">LinkedIn</span>
                  <span className="lg:hidden absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-mono-label text-[10px] tracking-widest uppercase text-on-surface-variant bg-surface-container-high border border-white/10 px-3 py-1.5 rounded-sm whitespace-nowrap pointer-events-none shadow-2xl z-50">LinkedIn</span>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61589148441332" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="relative h-12 rounded-full border border-white/10 flex items-center text-on-surface-variant hover:text-[#1877f2] hover:border-[#1877f2]/50 hover:bg-[#1877f2]/10 transition-[max-width,border-color,background-color,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group overflow-visible lg:overflow-hidden max-w-[48px] lg:hover:max-w-[200px]">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0 relative z-10">
                    <svg className="w-5 h-5 lg:group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </div>
                  <span className="hidden lg:block font-mono-label text-[10px] tracking-widest uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap pr-6 -ml-1">Facebook</span>
                  <span className="lg:hidden absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-mono-label text-[10px] tracking-widest uppercase text-on-surface-variant bg-surface-container-high border border-white/10 px-3 py-1.5 rounded-sm whitespace-nowrap pointer-events-none shadow-2xl z-50">Facebook</span>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/201063841779" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="relative h-12 rounded-full border border-white/10 flex items-center text-on-surface-variant hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-[max-width,border-color,background-color,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group overflow-visible lg:overflow-hidden max-w-[48px] lg:hover:max-w-[200px]">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0 relative z-10">
                    <svg className="w-5 h-5 lg:group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <span className="hidden lg:block font-mono-label text-[10px] tracking-widest uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap pr-6 -ml-1">WhatsApp</span>
                  <span className="lg:hidden absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-mono-label text-[10px] tracking-widest uppercase text-on-surface-variant bg-surface-container-high border border-white/10 px-3 py-1.5 rounded-sm whitespace-nowrap pointer-events-none shadow-2xl z-50">WhatsApp</span>
                </a>
                {/* Email */}
                <a href="mailto:wahadmomo@gmail.com" aria-label="Email" className="relative h-12 rounded-full border border-white/10 flex items-center text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-[max-width,border-color,background-color,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group overflow-visible lg:overflow-hidden max-w-[48px] lg:hover:max-w-[200px]">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0 relative z-10">
                    <svg className="w-5 h-5 lg:group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <span className="hidden lg:block font-mono-label text-[10px] tracking-widest uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap pr-6 -ml-1">Email</span>
                  <span className="lg:hidden absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-mono-label text-[10px] tracking-widest uppercase text-on-surface-variant bg-surface-container-high border border-white/10 px-3 py-1.5 rounded-sm whitespace-nowrap pointer-events-none shadow-2xl z-50">Email</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* TABLET/MOBILE ACTIONS CONTAINER (Only visible on screens < lg) */}
        <div className="lg:hidden border-t border-white/5 pt-10 flex flex-col gap-8">
          {/* Compact Studio Status */}
          <div className="flex items-center gap-2.5 font-sans text-[11px] text-primary">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new projects & opportunities
          </div>

          {/* Copyright notice */}
          <div className="flex justify-between items-center gap-4">
            <p className="font-mono-label text-[9px] sm:text-[10px] text-on-surface-variant/80 tracking-widest uppercase">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
  
        {/* Scroll to Top Arrow Button - Fixed on the far right, hidden by default, visible on footer intersection */}
        <AnimatePresence>
          {isVisible && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:bg-white/5 transition-all duration-300 ease-in-out z-50 bg-background/90 backdrop-blur-md shadow-2xl hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>

      </motion.div>

      {/* Massive Background Text Graphic - Scaled beautifully to a medium size that is fully visible on all viewports */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.02] z-0 select-none overflow-hidden max-w-container-max px-margin-mobile md:px-margin-desktop">
        <span aria-hidden="true" className="font-display text-[clamp(2.5rem,10.5vw,7.5rem)] whitespace-nowrap leading-none tracking-tighter text-primary">
          &lt; MEDOCODE /&gt;
        </span>
      </div>
    </footer>
  )
}
