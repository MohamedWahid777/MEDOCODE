import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { processSteps } from '../../lib/constants'
import { Search, ListChecks, Palette, Code2, Gauge, Rocket } from 'lucide-react'

// Map string icon names to Lucide components
const IconMap: Record<string, React.ElementType> = {
  Search,
  ListChecks,
  Palette,
  Code2,
  Gauge,
  Rocket
}

export function ProcessTimeline() {
  const { t } = useTranslation()

  return (
    <section id="process" className="w-full py-40 border-t border-white/5">
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

        <div className="max-w-4xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-32">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0
              const Icon = IconMap[step.icon]
              const stepKey = step.title.toLowerCase()

              return (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.8 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center justify-between group"
                >
                  {/* Left Side Content (Even steps) */}
                  <div className={`md:w-[45%] text-left ${isEven ? 'md:text-right pr-0 md:pr-16 pl-16 md:pl-0 mb-6 md:mb-0 order-2 md:order-1' : 'hidden md:block md:order-1'}`}>
                    {isEven && (
                      <>
                        <div className="font-mono-label text-primary/40 mb-4">{step.number}</div>
                        <h3 className="font-display text-headline-md text-primary mb-4">
                          {t(`process.steps.${stepKey}.title` as any) as unknown as string}
                        </h3>
                        <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
                          {t(`process.steps.${stepKey}.description` as any) as unknown as string}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center md:-translate-x-1/2 group-hover:border-primary/50 group-hover:bg-surface-variant transition-all duration-500 z-10 shadow-xl order-1 md:order-2 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>

                  {/* Right Side Content (Odd steps) */}
                  <div className={`md:w-[45%] text-left pl-16 md:pl-16 order-3 ${!isEven ? 'block' : 'hidden md:block'}`}>
                    {!isEven && (
                      <>
                        <div className="font-mono-label text-primary/40 mb-4">{step.number}</div>
                        <h3 className="font-display text-headline-md text-primary mb-4">
                          {t(`process.steps.${stepKey}.title` as any) as unknown as string}
                        </h3>
                        <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
                          {t(`process.steps.${stepKey}.description` as any) as unknown as string}
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
