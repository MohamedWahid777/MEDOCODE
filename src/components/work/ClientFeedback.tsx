import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Quote } from 'lucide-react'
import { testimonials } from '../../lib/constants'
import { useLanguage } from '../../context/LanguageContext'

export function ClientFeedback() {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const isArabic = language === 'ar'

  return (
    <section className="w-full py-32 border-t border-white/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Sticky header */}
        <div className="sticky top-24 mb-12 z-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-headline-lg text-primary"
          >
            {t('feedback.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-body-md text-on-surface-variant max-w-md mt-3"
          >
            {t('feedback.subtitle')}
          </motion.p>
        </div>

        {/* Stacked sticky cards — unified for all screen sizes */}
        <div className="relative pt-6 pb-24">
          {testimonials.map((testimonial, index) => {
            const zIndex = (index + 1) * 10
            const topOffset = 110 + index * 6
            const displayContent = isArabic ? testimonial.contentAr : testimonial.content

            return (
              <div
                key={testimonial.id}
                className="sticky rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface backdrop-blur-sm hover-effect mb-5"
                style={{ zIndex, top: `${topOffset}px` }}
              >
                <div className="p-8 md:p-12 relative">
                  {/* Large decorative quote icon */}
                  <Quote className="absolute top-8 right-8 md:top-10 md:right-12 w-10 h-10 md:w-14 md:h-14 text-[var(--color-badge-icon)] pointer-events-none" />

                  {/* Index number */}
                  <span className="font-mono-label text-[11px] text-on-surface-variant/40 tracking-widest block mb-6">
                    {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                  </span>

                  {/* Quote text */}
                  <blockquote
                    className="font-display text-[20px] md:text-[26px] text-[var(--color-card-text)] leading-[1.45] mb-10 max-w-3xl"
                    dir={isArabic ? 'rtl' : 'ltr'}
                  >
                    "{displayContent}"
                  </blockquote>

                  {/* Divider */}
                  <div className="border-t border-white/8 pt-6 flex items-center gap-4">
                    {/* Avatar initial */}
                    <div className="w-11 h-11 rounded-full bg-surface-bright border border-white/10 flex items-center justify-center text-[var(--color-badge-text)] font-display text-lg flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <h3 className="font-display text-[15px] text-primary leading-tight">
                        {testimonial.name}
                      </h3>
                      <p className="font-mono-label text-[11px] text-on-surface-variant tracking-widest uppercase">
                        {testimonial.role}
                      </p>
                    </div>

                    {/* Language indicator */}
                    <div className="ml-auto">
                      <span className="font-mono-label text-[10px] text-on-surface-variant/50 tracking-widest uppercase border border-white/10 px-2.5 py-1 rounded-full">
                        {isArabic ? 'AR' : 'EN'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}