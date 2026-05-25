import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowUp } from 'lucide-react'

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
      className="relative overflow-hidden bg-background border-t border-white/5 pt-20 pb-12"
    >
      <motion.div 
        style={{ y }}
        className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10"
      >
        {/* Main Asymmetric Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-16 sm:mb-20">
          
          {/* LEFT COLUMN: BRAND & IDENTITY SUMMARY (5 Columns on Desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div>
              {/* Reduced size premium brand header */}
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] leading-none tracking-tighter text-primary mb-4">
                MEDOCODE
              </h2>
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
              <p className="font-mono-label text-[10px] text-on-surface-variant/60 tracking-widest uppercase">
                {t('footer.copyright')}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: RESTRUCTURED LINKS & INQUIRIES (7 Columns on Desktop) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-8 relative">
            
            {/* Navigation Column */}
            <div className="border-t border-white/10 pt-6">
              <h4 className="font-mono-label text-on-surface-variant uppercase mb-6 tracking-widest text-[10px] sm:text-xs">
                {t('footer.navigation')}
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="#work" className="relative text-xs sm:text-sm text-primary font-sans font-medium py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out block w-fit">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="relative text-xs sm:text-sm text-primary font-sans font-medium py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out block w-fit">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="relative text-xs sm:text-sm text-primary font-sans font-medium py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out block w-fit">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Inquiries / Social Icons Row (Matching visual aesthetic of Contact Section + Brand Colors Hover) */}
            <div className="border-t border-white/10 pt-6">
              <h4 className="font-mono-label text-on-surface-variant uppercase mb-6 tracking-widest text-[10px] sm:text-xs">
                Inquiries
              </h4>
              <div className="flex flex-wrap gap-4">
                {/* GitHub */}
                <a href="https://github.com/MohamedWahid777" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 ease-in-out group shrink-0">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a11.9 11.9 0 0 0-6 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.8 4.8 0 0 0-.1 3.5 5.1 5.1 0 0 0-1.4 3.5c0 5.6 3.3 6.8 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"/><path d="M9 20c-4 1-5-2-7-2"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/mohamed-wahid-11469a3b8" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/5 transition-all duration-300 ease-in-out group shrink-0">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61589148441332" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-[#1877f2] hover:border-[#1877f2]/50 hover:bg-[#1877f2]/5 transition-all duration-300 ease-in-out group shrink-0">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                {/* WhatsApp (Primary Contact Integration) */}
                <a href="https://wa.me/201063841779" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-[#25d366] hover:border-[#25d366]/50 hover:bg-[#25d366]/5 transition-all duration-300 ease-in-out group shrink-0">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17v-.08z"/></svg>
                </a>
                {/* Email */}
                <a href="mailto:wahadmomo@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-[#ea4335] hover:border-[#ea4335]/50 hover:bg-[#ea4335]/5 transition-all duration-300 ease-in-out group shrink-0">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
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
            <p className="font-mono-label text-[9px] sm:text-[10px] text-on-surface-variant/60 tracking-widest uppercase">
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
        <span className="font-display text-[clamp(2.5rem,10.5vw,7.5rem)] whitespace-nowrap leading-none tracking-tighter text-primary">
          MEDOCODE
        </span>
      </div>
    </footer>
  )
}
