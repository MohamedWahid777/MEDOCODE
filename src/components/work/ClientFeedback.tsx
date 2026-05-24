import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { testimonials } from '../../lib/constants'
import { Quote } from 'lucide-react'

export function ClientFeedback() {
  const { t } = useTranslation()

  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-white/5">
      <div className="text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-headline-lg text-primary"
        >
          {t('feedback.title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-body-md text-on-surface-variant mt-4"
        >
          {t('feedback.subtitle')}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="glass-panel p-10 rounded-2xl relative group hover:bg-surface-variant/30 transition-colors duration-500"
          >
            <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5 group-hover:text-primary/10 transition-colors duration-500" />
            
            <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed mb-10 relative z-10">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
              <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary font-display text-xl">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-display text-primary">{testimonial.name}</h4>
                <p className="font-mono-label text-xs text-on-surface-variant mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
