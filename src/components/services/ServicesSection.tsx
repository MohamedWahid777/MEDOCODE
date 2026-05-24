import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Globe, Sparkles, Cable, Brain } from 'lucide-react'
import { services } from '../../lib/constants'

// Map string icon names to Lucide components
const IconMap: Record<string, React.ElementType> = {
  Globe,
  Sparkles,
  Cable,
  Brain
}

export function ServicesSection() {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section id="services" className="w-full py-32 border-t border-white/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-headline-lg text-primary">{t('services.title')}</h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-body-md text-on-surface-variant max-w-md"
        >
          {t('services.subtitle')}
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service, index) => {
          const Icon = IconMap[service.icon]
          const keys = ['frontend', 'creative', 'integration', 'ai']
          const key = keys[index]

          return (
            <motion.div 
              key={service.title}
              variants={cardVariants}
              className="glass-panel p-8 rounded-2xl md:rounded-none md:border-t-0 md:border-r-0 md:border-b-0 border-l border-white/10 hover:bg-surface-variant/50 transition-colors duration-500 group relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 mb-8 opacity-70 group-hover:opacity-100 transition-opacity text-primary">
                  {Icon && <Icon strokeWidth={1.5} className="w-full h-full" />}
                </div>
                <h3 className="font-display text-[24px] text-primary mb-4 leading-tight">
                  {t(`services.items.${key}.title` as any) as unknown as string}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {t(`services.items.${key}.description` as any) as unknown as string}
                </p>
              </div>
            </motion.div>
          )
        })}
        </motion.div>
      </div>
    </section>
  )
}
