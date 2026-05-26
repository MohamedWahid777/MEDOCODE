import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'

type AboutSectionProps = {
  onOpenDrawer: () => void
}

export function AboutSection({ onOpenDrawer }: AboutSectionProps) {
  const containerRef = useRef<HTMLElement>(null)
  const { t } = useTranslation()
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <>
      <section 
        id="about" 
        ref={containerRef}
        className="w-full py-32 border-t border-white/5"
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="col-span-12 md:col-span-7 min-w-0"
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

            <div className="col-span-12 md:col-span-5 w-full min-w-0 h-[450px] md:h-[580px] overflow-hidden relative bg-surface-container border border-white/10">
              <motion.img 
                style={{ y: imageY }}
                src="src/assets/my photo.webp" 
                alt={t('hero.firstName')} 
                className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}