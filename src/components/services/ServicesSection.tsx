import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import { servicesList } from '../../lib/constants'

export function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section id="services" className="w-full py-32 border-t border-white/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
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

        {/* Services List */}
        <div className="relative">
          {servicesList.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index % 8) * 0.045 }}
              whileHover={{ x: 6 }}
              className="group flex items-center gap-6 py-5 md:py-6 border-b border-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default relative overflow-hidden"
            >
              {/* Hover background sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.025] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              {/* Number */}
              <span className="font-mono-label text-[11px] text-on-surface-variant/35 w-8 flex-shrink-0 transition-colors duration-300 group-hover:text-on-surface-variant/70 tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Service Name */}
              <h3 className="font-display text-[18px] md:text-[22px] text-primary flex-1 leading-tight transition-colors duration-300 group-hover:text-white">
                {service}
              </h3>

              {/* Arrow — appears on hover */}
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ArrowUpRight className="w-5 h-5 text-on-surface-variant" />
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
