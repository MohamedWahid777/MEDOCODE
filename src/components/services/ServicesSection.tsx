import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Globe, Zap, User, Monitor, LayoutDashboard } from 'lucide-react'

const SERVICES = [
  {
    key: 'service1',
    number: '01',
    icon: Globe,
  },
  {
    key: 'service2',
    number: '02',
    icon: Zap,
  },
  {
    key: 'service3',
    number: '03',
    icon: User,
  },
  {
    key: 'service4',
    number: '04',
    icon: Monitor,
  },
  {
    key: 'service5',
    number: '05',
    icon: LayoutDashboard,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section id="services" className="w-full py-32 md:py-40 border-t border-white/5 bg-background">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
          <motion.h2
            /* Fixed: Changed from x: -30 to y: 30 to prevent horizontal overflow without breaking sticky cards */
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="font-display text-headline-lg text-primary"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            /* Fixed: Changed from x: 30 to y: 20 to prevent horizontal overflow without breaking sticky cards */
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-sans text-body-md text-on-surface-variant max-w-sm"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            
            // Centering classes for the last row (items 4 and 5) on large screens (lg)
            let colSpanClasses = "lg:col-span-2"
            if (index === 3) {
              colSpanClasses = "lg:col-span-2 lg:col-start-2"
            }

            return (
              <motion.div
                key={service.key}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`sticky md:static rounded-2xl p-8 flex flex-col justify-between border border-white/10 shadow-2xl bg-surface backdrop-blur-sm overflow-hidden group select-none cursor-default min-h-[320px] h-full ${colSpanClasses}`}
                style={{
                  top: `calc(80px + ${index * 6}px)`,
                  zIndex: (index + 1) * 10
                }}
              >
                {/* Accent glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Card Header: Icon & Number */}
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center bg-white/5 text-primary group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-3xl font-bold tracking-tighter text-on-surface-variant/20 group-hover:text-primary/20 transition-colors duration-500">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-primary mt-8 mb-4 group-hover:text-primary/90 transition-colors duration-300">
                    {t(`services.items.${service.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[14px] md:text-[15px] text-on-surface-variant leading-relaxed mb-6 group-hover:text-on-surface transition-colors duration-300">
                    {t(`services.items.${service.key}.description`)}
                  </p>
                </div>

                {/* Subtle active footer link indicator */}
                <div className="flex items-center gap-2 mt-auto font-mono-label text-[11px] text-primary/40 group-hover:text-primary/80 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-none bg-primary/20 group-hover:bg-primary transition-colors duration-300" />
                  <span>MEDOCODE · SERVICE</span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

