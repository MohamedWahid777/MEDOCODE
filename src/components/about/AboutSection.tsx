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

  // Parallax for the image
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  // Intro text word animation logic
  const introHighlightWords = t('intro.highlight').split(' ')
  const introBodyWords = t('intro.body').split(' ')

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.8
      }
    })
  }

  return (
    <>
      {/* Introduction Statement */}
      <section className="py-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
        <div className="max-w-5xl mx-auto">
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-display text-[40px] md:text-[64px] text-on-surface-variant leading-[1.1] tracking-tight flex flex-wrap gap-x-3 gap-y-2"
          >
            <span className="text-primary block w-full mb-4 flex flex-wrap gap-x-3 gap-y-2">
              {introHighlightWords.map((word, i) => (
                <motion.span custom={i} variants={wordAnimation} key={`h-${i}`}>
                  {word}
                </motion.span>
              ))}
            </span>
            {introBodyWords.map((word, i) => (
              <motion.span custom={i + introHighlightWords.length} variants={wordAnimation} key={`b-${i}`}>
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </section>

      {/* About Overview */}
      <section 
        id="about" 
        ref={containerRef}
        className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-white/5"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
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

          <div className="w-full h-[600px] md:h-[800px] overflow-hidden rounded-2xl relative bg-surface-container">
            <motion.img 
              style={{ y: imageY }}
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1200&h=1600" 
              alt={t('hero.firstName')} 
              className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Inner shadow overlay for depth */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
          </div>
        </div>
      </section>
    </>
  )
}
