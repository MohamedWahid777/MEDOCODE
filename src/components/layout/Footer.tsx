import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation()
  const footerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end']
  })

  // Cinematic reveal effect: Footer content moves up as you scroll down to it
  const y = useTransform(scrollYProgress, [0, 1], ['-50%', '0%'])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer 
      ref={footerRef}
      className="relative overflow-hidden bg-background border-t border-white/5 pt-20 pb-10"
    >
      <motion.div 
        style={{ y }}
        className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <div className="max-w-xl">
            <h2 className="font-display text-[64px] md:text-[100px] leading-[0.8] tracking-tighter text-primary mb-6">
              MEDOCODE
            </h2>
            <p className="font-mono-label text-on-surface-variant tracking-widest uppercase">
              {t('footer.tagline')}
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:bg-white/5 transition-all group hover-effect"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/5 pt-10">
          <div>
            <h4 className="font-mono-label text-on-surface-variant uppercase mb-6 tracking-widest text-sm">
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-4">
              <li><a href="#work" className="text-primary hover:opacity-70 transition-opacity hover-effect font-sans">Work</a></li>
              <li><a href="#about" className="text-primary hover:opacity-70 transition-opacity hover-effect font-sans">About</a></li>
              <li><a href="#services" className="text-primary hover:opacity-70 transition-opacity hover-effect font-sans">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono-label text-on-surface-variant uppercase mb-6 tracking-widest text-sm">
              {t('footer.socials')}
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-primary hover:opacity-70 transition-opacity hover-effect font-sans">GitHub</a></li>
              <li><a href="#" className="text-primary hover:opacity-70 transition-opacity hover-effect font-sans">LinkedIn</a></li>
              <li><a href="#" className="text-primary hover:opacity-70 transition-opacity hover-effect font-sans">Facebook</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 md:text-right md:ml-auto flex flex-col justify-end">
            <p className="font-mono-label text-xs text-on-surface-variant tracking-widest uppercase">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Massive Background Text Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] z-0 select-none overflow-hidden">
        <span className="font-display text-[30vw] whitespace-nowrap leading-none tracking-tighter text-primary">
          MEDOCODE
        </span>
      </div>
    </footer>
  )
}
