import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../context/ThemeContext'
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

// Default dark theme colors (original hardcoded values)
const darkColors = {
  iconInactive: 'rgba(255,255,255,0.4)',
  iconActive: '#ffffff',
  borderInactive: 'rgba(255,255,255,0.06)',
  borderActive: 'rgba(255,255,255,0.3)',
  bgInactive: 'rgba(24,24,27,0.6)',
  bgActive: 'rgba(255,255,255,0.05)',
  trackBg: 'rgba(255,255,255,0.05)',
  progressGradient: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.4), #ffffff)',
  dotBg: '#ffffff',
  dotShadow: '0 0 10px #ffffff',
  dotBorderColor: 'rgba(255,255,255,0.5)',
}

export function ProcessTimeline() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)

  // Theme-driven color state
  const [tc, setTc] = useState(darkColors)

  useEffect(() => {
    const updateColors = () => {
      const getCSSVar = (name: string) =>
        getComputedStyle(document.documentElement).getPropertyValue(name).trim()

      if (theme === 'warm') {
        setTc({
          iconInactive: getCSSVar('--timeline-circle-icon') || darkColors.iconInactive,
          iconActive: getCSSVar('--timeline-circle-icon') || darkColors.iconActive,
          borderInactive: getCSSVar('--timeline-circle-border') || darkColors.borderInactive,
          borderActive: getCSSVar('--timeline-circle-border') || darkColors.borderActive,
          bgInactive: getCSSVar('--color-surface-variant') || darkColors.bgInactive,
          bgActive: getCSSVar('--timeline-circle-bg') || darkColors.bgActive,
          trackBg: getCSSVar('--timeline-track-color') || darkColors.trackBg,
          progressGradient: getCSSVar('--timeline-progress-color') || darkColors.progressGradient,
          dotBg: getCSSVar('--timeline-progress-dot-color') || darkColors.dotBg,
          dotShadow: `0 0 10px ${getCSSVar('--timeline-progress-dot-color') || '#8B5E1A'}`,
          dotBorderColor: getCSSVar('--timeline-progress-dot-color') || darkColors.dotBorderColor,
        })
      } else {
        setTc(darkColors)
      }
    }

    const timer = setTimeout(updateColors, 50)
    return () => clearTimeout(timer)
  }, [theme])

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
  const icon0Color = useTransform(scrollYProgress, [0, 0.05], [tc.iconInactive, tc.iconActive])
  const icon0Border = useTransform(scrollYProgress, [0, 0.05], [tc.borderInactive, tc.borderActive])
  const icon0Bg = useTransform(scrollYProgress, [0, 0.05], [tc.bgInactive, tc.bgActive])

  const icon1Color = useTransform(scrollYProgress, [0.10, 0.22], [tc.iconInactive, tc.iconActive])
  const icon1Border = useTransform(scrollYProgress, [0.10, 0.22], [tc.borderInactive, tc.borderActive])
  const icon1Bg = useTransform(scrollYProgress, [0.10, 0.22], [tc.bgInactive, tc.bgActive])

  const icon2Color = useTransform(scrollYProgress, [0.32, 0.45], [tc.iconInactive, tc.iconActive])
  const icon2Border = useTransform(scrollYProgress, [0.32, 0.45], [tc.borderInactive, tc.borderActive])
  const icon2Bg = useTransform(scrollYProgress, [0.32, 0.45], [tc.bgInactive, tc.bgActive])

  const icon3Color = useTransform(scrollYProgress, [0.57, 0.70], [tc.iconInactive, tc.iconActive])
  const icon3Border = useTransform(scrollYProgress, [0.57, 0.70], [tc.borderInactive, tc.borderActive])
  const icon3Bg = useTransform(scrollYProgress, [0.57, 0.70], [tc.bgInactive, tc.bgActive])

  const icon4Color = useTransform(scrollYProgress, [0.80, 0.92], [tc.iconInactive, tc.iconActive])
  const icon4Border = useTransform(scrollYProgress, [0.80, 0.92], [tc.borderInactive, tc.borderActive])
  const icon4Bg = useTransform(scrollYProgress, [0.80, 0.92], [tc.bgInactive, tc.bgActive])

  const iconColors = [icon0Color, icon1Color, icon2Color, icon3Color, icon4Color]
  const iconBorders = [icon0Border, icon1Border, icon2Border, icon3Border, icon4Border]
  const iconBgs = [icon0Bg, icon1Bg, icon2Bg, icon3Bg, icon4Bg]

  return (
  <section id="process" ref={containerRef} className="w-full py-40 border-t border-white/5 overflow-x-hidden">
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
          <div
            className="absolute left-7 md:left-1/2 top-[28px] bottom-[28px] w-[2px] md:-translate-x-1/2 rounded-full pointer-events-none transition-colors duration-300"
            style={{ backgroundColor: tc.trackBg }}
          >
            {/* Active glowing progress line */}
            <motion.div
              style={{ scaleY: scrollYProgress, transformOrigin: 'top', background: tc.progressGradient }}
              className="w-full h-full transition-colors duration-300"
            />
            
            {/* Glowing pointer tip following scroll progress */}
            <motion.div
              style={{ top: tipTop, opacity: tipOpacity, backgroundColor: tc.dotBg, boxShadow: tc.dotShadow, borderColor: tc.dotBorderColor }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full z-20 border transition-[background-color,border-color,box-shadow] duration-300"
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
