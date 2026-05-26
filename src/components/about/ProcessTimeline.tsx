import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { processSteps } from '../../lib/constants'
import { Search, ListChecks, Palette, Code2, Rocket } from 'lucide-react'

// Map string icon names to Lucide components
const IconMap: Record<string, React.ElementType> = {
  Search,
  ListChecks,
  Palette,
  Code2,
  Rocket
}

export function ProcessTimeline() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress of the timeline section in the middle of the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  })

  // Dynamic progress transforms for the glowing active pointer
  const tipTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const tipOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  // Precision progressive reveals (opacity, scale, y-translation) for each step card
  const item0Opacity = useTransform(scrollYProgress, [0, 0.05], [1, 1])
  const item1Opacity = useTransform(scrollYProgress, [0.08, 0.22], [0, 1])
  const item2Opacity = useTransform(scrollYProgress, [0.30, 0.45], [0, 1])
  const item3Opacity = useTransform(scrollYProgress, [0.55, 0.70], [0, 1])
  const item4Opacity = useTransform(scrollYProgress, [0.78, 0.92], [0, 1])

  const item0Scale = useTransform(scrollYProgress, [0, 0.05], [1, 1])
  const item1Scale = useTransform(scrollYProgress, [0.08, 0.22], [0.85, 1])
  const item2Scale = useTransform(scrollYProgress, [0.30, 0.45], [0.85, 1])
  const item3Scale = useTransform(scrollYProgress, [0.55, 0.70], [0.85, 1])
  const item4Scale = useTransform(scrollYProgress, [0.78, 0.92], [0.85, 1])

  const item0Y = useTransform(scrollYProgress, [0, 0.05], [0, 0])
  const item1Y = useTransform(scrollYProgress, [0.08, 0.22], [30, 0])
  const item2Y = useTransform(scrollYProgress, [0.30, 0.45], [30, 0])
  const item3Y = useTransform(scrollYProgress, [0.55, 0.70], [30, 0])
  const item4Y = useTransform(scrollYProgress, [0.78, 0.92], [30, 0])

  const itemOpacities = [item0Opacity, item1Opacity, item2Opacity, item3Opacity, item4Opacity]
  const itemScales = [item0Scale, item1Scale, item2Scale, item3Scale, item4Scale]
  const itemYs = [item0Y, item1Y, item2Y, item3Y, item4Y]

  // Color & lighting state transitions for center icons to represent activation
  const icon0Color = useTransform(scrollYProgress, [0, 0.05], ['rgba(255,255,255,0.4)', '#ffffff'])
  const icon0Border = useTransform(scrollYProgress, [0, 0.05], ['rgba(255,255,255,0.06)', 'rgba(255,255,255,0.3)'])
  const icon0Bg = useTransform(scrollYProgress, [0, 0.05], ['rgba(24,24,27,0.6)', 'rgba(255,255,255,0.05)'])

  const icon1Color = useTransform(scrollYProgress, [0.10, 0.22], ['rgba(255,255,255,0.4)', '#ffffff'])
  const icon1Border = useTransform(scrollYProgress, [0.10, 0.22], ['rgba(255,255,255,0.06)', 'rgba(255,255,255,0.3)'])
  const icon1Bg = useTransform(scrollYProgress, [0.10, 0.22], ['rgba(24,24,27,0.6)', 'rgba(255,255,255,0.05)'])

  const icon2Color = useTransform(scrollYProgress, [0.32, 0.45], ['rgba(255,255,255,0.4)', '#ffffff'])
  const icon2Border = useTransform(scrollYProgress, [0.32, 0.45], ['rgba(255,255,255,0.06)', 'rgba(255,255,255,0.3)'])
  const icon2Bg = useTransform(scrollYProgress, [0.32, 0.45], ['rgba(24,24,27,0.6)', 'rgba(255,255,255,0.05)'])

  const icon3Color = useTransform(scrollYProgress, [0.57, 0.70], ['rgba(255,255,255,0.4)', '#ffffff'])
  const icon3Border = useTransform(scrollYProgress, [0.57, 0.70], ['rgba(255,255,255,0.06)', 'rgba(255,255,255,0.3)'])
  const icon3Bg = useTransform(scrollYProgress, [0.57, 0.70], ['rgba(24,24,27,0.6)', 'rgba(255,255,255,0.05)'])

  const icon4Color = useTransform(scrollYProgress, [0.80, 0.92], ['rgba(255,255,255,0.4)', '#ffffff'])
  const icon4Border = useTransform(scrollYProgress, [0.80, 0.92], ['rgba(255,255,255,0.06)', 'rgba(255,255,255,0.3)'])
  const icon4Bg = useTransform(scrollYProgress, [0.80, 0.92], ['rgba(24,24,27,0.6)', 'rgba(255,255,255,0.05)'])

  const iconColors = [icon0Color, icon1Color, icon2Color, icon3Color, icon4Color]
  const iconBorders = [icon0Border, icon1Border, icon2Border, icon3Border, icon4Border]
  const iconBgs = [icon0Bg, icon1Bg, icon2Bg, icon3Bg, icon4Bg]

  return (
  <section id="process" ref={containerRef} className="w-full py-40 border-t border-white/5 contain-paint-mobile">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-headline-lg text-primary"
          >
            {t('process.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-body-lg text-on-surface-variant mt-6"
          >
            {t('process.subtitle')}
          </motion.p>
        </div>

        <div className="w-full max-w-4xl mx-auto relative min-h-[1200px] md:min-h-[1400px]">
          {/* Dynamic connecting track: static background and glowing scale-grown active line */}
          <div className="absolute left-7 md:left-1/2 top-[28px] bottom-[28px] w-[2px] bg-white/5 md:-translate-x-1/2 rounded-full pointer-events-none">
            {/* Active glowing progress line */}
            <motion.div
              style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
              className="w-full h-full bg-gradient-to-b from-white via-white/40 to-white"
            />
            
            {/* Glowing pointer tip following scroll progress */}
            <motion.div
              style={{ top: tipTop, opacity: tipOpacity }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_10px_#ffffff] z-20 border border-white/50 transition-shadow duration-300"
            />
          </div>

          <div className="space-y-36 relative w-full">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0
              const Icon = IconMap[step.icon]
              const stepKey = step.title.toLowerCase()

              return (
                <motion.div 
                  key={step.number}
                  style={{ 
                    opacity: itemOpacities[index],
                    scale: itemScales[index],
                    y: itemYs[index]
                  }}
                  className="relative flex flex-col md:flex-row items-start md:items-center justify-between group w-full"
                >
                  {/* Left Side Content (Even steps) */}
                  <div className={`w-full md:w-[45%] text-left ${isEven ? 'md:text-right pr-0 md:pr-16 pl-16 md:pl-0 mb-6 md:mb-0 order-2 md:order-1' : 'hidden md:block md:order-1'}`}>
                    {isEven && (
                      <>
                        <div className="font-mono-label text-primary/30 mb-3 select-none">{step.number}</div>
                        <h3 className="font-display text-headline-md text-primary mb-4">
                          {t(`process.steps.${stepKey}.title`)}
                        </h3>
                        <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                          {t(`process.steps.${stepKey}.description`)}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Reactive Activated Center Icon */}
                  <motion.div 
                    style={{
                      color: iconColors[index],
                      borderColor: iconBorders[index],
                      backgroundColor: iconBgs[index]
                    }}
                    className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full border flex items-center justify-center md:-translate-x-1/2 transition-all duration-300 z-10 shadow-lg order-1 md:order-2 group-hover:scale-105"
                  >
                    <Icon className="w-5 h-5 transition-colors" />
                  </motion.div>

                  {/* Right Side Content (Odd steps) */}
                  <div className={`w-full md:w-[45%] text-left pl-16 md:pl-16 order-3 ${!isEven ? 'block' : 'hidden md:block'}`}>
                    {!isEven && (
                      <>
                        <div className="font-mono-label text-primary/30 mb-3 select-none">{step.number}</div>
                        <h3 className="font-display text-headline-md text-primary mb-4">
                          {t(`process.steps.${stepKey}.title`)}
                        </h3>
                        <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                          {t(`process.steps.${stepKey}.description`)}
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
