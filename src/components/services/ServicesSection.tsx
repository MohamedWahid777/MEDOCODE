import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const SERVICE_KEYS = [
  'business', 'corporate', 'startups', 'portfolio', 
  'service', 'medical', 'product', 'dashboards', 
  'webapps', 'figma', 'custom', 'seo', 
  'performance', 'responsive', 'animations', 'ai'
]

// Asymmetrical position shifts and mt offsets to create a dynamic random rhythm
const PILL_DESIGNS = [
  { yShift: 'translate-y-0', bg: 'bg-white/[0.01]' },
  { yShift: 'translate-y-2 md:translate-y-4', bg: 'bg-white/[0.025]' },
  { yShift: 'translate-y-[-2px] md:translate-y-[-5px]', bg: 'bg-white/[0.015]' },
  { yShift: 'translate-y-1 md:translate-y-3', bg: 'bg-white/[0.03]' },
  { yShift: 'translate-y-[-4px] md:translate-y-[-7px]', bg: 'bg-white/[0.01]' },
  { yShift: 'translate-y-0', bg: 'bg-white/[0.02]' },
  { yShift: 'translate-y-3 md:translate-y-5', bg: 'bg-white/[0.015]' },
  { yShift: 'translate-y-[-1px]', bg: 'bg-white/[0.035]' },
  { yShift: 'translate-y-2 md:translate-y-4', bg: 'bg-white/[0.02]' },
  { yShift: 'translate-y-[-3px] md:translate-y-[-6px]', bg: 'bg-white/[0.015]' },
  { yShift: 'translate-y-1', bg: 'bg-white/[0.025]' },
  { yShift: 'translate-y-[-5px] md:translate-y-[-9px]', bg: 'bg-white/[0.04]' },
  { yShift: 'translate-y-0', bg: 'bg-white/[0.01]' },
  { yShift: 'translate-y-2 md:translate-y-4', bg: 'bg-white/[0.02]' },
  { yShift: 'translate-y-[-2px] md:translate-y-[-4px]', bg: 'bg-white/[0.015]' },
  { yShift: 'translate-y-3 md:translate-y-6', bg: 'bg-white/[0.03]' },
]

export function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section id="services" className="w-full py-32 md:py-40 border-t border-white/5 overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="font-display text-headline-lg text-primary"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-sans text-body-md text-on-surface-variant max-w-sm"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        {/* Asymmetrical Pill Tag Grid */}
        <div className="flex flex-wrap gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8 justify-center max-w-5xl mx-auto py-10 px-4">
          {SERVICE_KEYS.map((key, index) => {
            const design = PILL_DESIGNS[index % PILL_DESIGNS.length]
            const serviceName = t(`services.items.${key}`)

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: (index % 6) * 0.08, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } 
                }}
                className={`w-fit inline-flex items-center gap-3.5 px-6 py-4 border border-white/5 ${design.bg} rounded-none backdrop-blur-sm transition-all duration-300 relative overflow-hidden group select-none cursor-default hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)] ${design.yShift}`}
              >
                {/* Micro background highlight shimmer sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                {/* Leading active indicator dot with pulsing ping ring */}
                <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all duration-300 relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Service Name Label */}
                <span className="font-mono-label text-[13px] md:text-[14px] leading-none tracking-wider text-on-surface-variant group-hover:text-primary transition-colors duration-300">
                  {serviceName}
                </span>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
