import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Send } from 'lucide-react'

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Left Side: Typography & Socials */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-[80px] md:text-[120px] leading-[0.9] text-primary tracking-tighter mb-8"
          >
            {t('contact.title')} <br />
            <span className="text-on-surface-variant">{t('contact.titleLine2')}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-body-lg text-on-surface-variant max-w-md mb-16"
          >
            {t('contact.subtitle')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <p className="font-mono-label text-on-surface-variant uppercase mb-4 tracking-widest text-sm">
                Status
              </p>
              <div className="flex items-center gap-3 font-mono-label text-primary">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {t('contact.availability')}
              </div>
            </div>

            <div>
              <p className="font-mono-label text-on-surface-variant uppercase mb-4 tracking-widest text-sm">
                Socials
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-white/5 transition-all group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a11.9 11.9 0 0 0-6 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.8 4.8 0 0 0-.1 3.5 5.1 5.1 0 0 0-1.4 3.5c0 5.6 3.3 6.8 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"/><path d="M9 20c-4 1-5-2-7-2"/></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-white/5 transition-all group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-white/5 transition-all group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <form className="glass-panel p-8 md:p-12 rounded-3xl space-y-8 relative overflow-hidden group">
            {/* Ambient hover glow inside form */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-surface-variant)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8">
              <div className="space-y-2 md:col-span-2">
                <label className="font-mono-label text-sm text-on-surface-variant uppercase tracking-widest">
                  {t('contact.form.fullName')}
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors hover-effect placeholder:text-white/10"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono-label text-sm text-on-surface-variant uppercase tracking-widest">
                  {t('contact.form.email')}
                </label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors hover-effect placeholder:text-white/10"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono-label text-sm text-on-surface-variant uppercase tracking-widest">
                  {t('contact.form.phone')}
                </label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors hover-effect placeholder:text-white/10"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="font-mono-label text-sm text-on-surface-variant uppercase tracking-widest">
                  {t('contact.form.service')}
                </label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors hover-effect appearance-none">
                  <option className="bg-surface text-primary" value="frontend">Frontend Architecture</option>
                  <option className="bg-surface text-primary" value="creative">Creative Development</option>
                  <option className="bg-surface text-primary" value="integration">System Integration</option>
                  <option className="bg-surface text-primary" value="ai">AI Workflows</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="font-mono-label text-sm text-on-surface-variant uppercase tracking-widest">
                  {t('contact.form.details')}
                </label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-primary focus:outline-none focus:border-primary transition-colors hover-effect placeholder:text-white/10 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            <div className="relative z-10 pt-4">
              <button 
                type="button"
                className="w-full bg-primary text-background py-5 rounded-xl font-mono-label tracking-widest flex items-center justify-center gap-3 hover:bg-surface-variant hover:text-primary border border-transparent hover:border-white/20 transition-all duration-300 hover-effect group/btn"
              >
                {t('contact.form.send')}
                <Send className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
