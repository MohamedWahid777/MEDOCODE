import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'

type AboutSectionProps = {
  onOpenDrawer: () => void
}

export function AboutSection({ onOpenDrawer }: AboutSectionProps) {
  const containerRef = useRef<HTMLElement>(null)
  const { t } = useTranslation()

  return (
    <>
      <section 
        id="about" 
        ref={containerRef}
        className="w-full py-32 border-t border-white/5 overflow-x-hidden"
      >
        {/* 
          Restored standard container pattern (max-w-container-max + px-margin-mobile)
          matching every other section in the site.
        */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/*
            FIX: Changed from grid-cols-1 + col-span-12 to grid-cols-1 + col-span-full.
            
            ROOT CAUSE: Using col-span-12 inside grid-cols-1 forced the browser to create
            12 implicit column tracks. Combined with gap-8 (32px column-gap × 11 inter-column
            gaps = 352px of extra horizontal space), the grid container became much wider than
            the viewport. The section's overflow-x-hidden then clipped the right edge of all
            content including the bio paragraph text.
            
            col-span-full spans all *explicit* columns (just 1 on mobile), avoiding
            implicit track creation entirely. On md+ screens, md:grid-cols-12 provides
            the 12-column grid and md:col-span-7 / md:col-span-5 work as intended.
          */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="col-span-full md:col-span-7 min-w-0"
            >
              <h2 className="font-display text-headline-lg text-primary mb-8">{t('about.title')}</h2>
              
              <p className="font-sans text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                {t('about.summary')}
              </p>
              <button 
                onClick={onOpenDrawer}
                className="flex items-center gap-2 text-primary font-mono-label hover:opacity-70 transition-opacity group hover-effect"
              >
                {t('about.readBio')}
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </button>
            </motion.div>

            <div className="col-span-full md:col-span-5 min-w-0 h-[450px] md:h-[580px] overflow-hidden relative bg-surface-container border border-white/10">
              <img 
                src="/myphoto.webp" 
                alt={t('hero.firstName')} 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}