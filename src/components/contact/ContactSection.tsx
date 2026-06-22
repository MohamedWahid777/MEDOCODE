import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export function ContactSection() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    details: '',
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const data = new FormData()
      data.append('name',    formData.fullName)
      data.append('email',   formData.email)
      data.append('phone',   formData.phone)
      data.append('message', formData.details)
      data.append('_subject',  'New Message from Portfolio')
      data.append('_captcha',  'false')
      data.append('_template', 'table')

      const res = await fetch('https://formsubmit.co/ajax/wahadmomo@gmail.com', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ fullName: '', email: '', phone: '', details: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="w-full py-32 border-t border-white/5 relative overflow-x-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32">

          {/* Left Side: Typography & Socials */}
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="font-display text-[80px] md:text-[120px] leading-[0.9] text-primary tracking-tighter mb-8"
            >
              {t('contact.title')} <br />
              <span className="text-on-surface-variant">{t('contact.titleLine2')}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-body-lg text-on-surface-variant max-w-md mx-auto md:mx-0 mb-16"
            >
              {t('contact.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-12 flex flex-col items-center md:items-start"
            >
              <div className="flex flex-col items-center md:items-start">
                <p className="font-mono-label text-on-surface-variant uppercase mb-4 tracking-widest text-sm">
                  Status
                </p>
                <div className="flex items-center gap-3 font-mono-label text-primary">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  {t('contact.availability')}
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start w-full">
                <p className="font-mono-label text-on-surface-variant uppercase mb-5 tracking-widest text-sm">
                  Socials
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start" dir="ltr">
                  {/* GitHub */}
                  <a href="https://github.com/MohamedWahid777" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="relative h-12 rounded-full border border-white/10 flex items-center text-on-surface-variant hover:text-[var(--github-icon-hover)] hover:border-white/40 hover:bg-white/5 transition-[max-width,border-color,background-color,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group overflow-visible lg:overflow-hidden max-w-[48px] lg:hover:max-w-[200px]">
                    <div className="w-12 h-12 flex items-center justify-center shrink-0 relative z-10">
                      <svg className="w-5 h-5 lg:group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a11.9 11.9 0 0 0-6 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.8 4.8 0 0 0-.1 3.5 5.1 5.1 0 0 0-1.4 3.5c0 5.6 3.3 6.8 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"/><path d="M9 20c-4 1-5-2-7-2"/></svg>
                    </div>
                    <span className="hidden lg:block font-mono-label text-[10px] tracking-widest uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap pr-6 -ml-1">GitHub</span>
                    <span className="lg:hidden absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-mono-label text-[10px] tracking-widest uppercase text-on-surface-variant bg-surface-container-high border border-white/10 px-3 py-1.5 rounded-sm whitespace-nowrap pointer-events-none shadow-2xl z-50">GitHub</span>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/mohamed-wahid-11469a3b8" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="relative h-12 rounded-full border border-white/10 flex items-center text-on-surface-variant hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-[max-width,border-color,background-color,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group overflow-visible lg:overflow-hidden max-w-[48px] lg:hover:max-w-[200px]">
                    <div className="w-12 h-12 flex items-center justify-center shrink-0 relative z-10">
                      <svg className="w-5 h-5 lg:group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </div>
                    <span className="hidden lg:block font-mono-label text-[10px] tracking-widest uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap pr-6 -ml-1">LinkedIn</span>
                    <span className="lg:hidden absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-mono-label text-[10px] tracking-widest uppercase text-on-surface-variant bg-surface-container-high border border-white/10 px-3 py-1.5 rounded-sm whitespace-nowrap pointer-events-none shadow-2xl z-50">LinkedIn</span>
                  </a>
                  {/* Facebook */}
                  <a href="https://www.facebook.com/profile.php?id=61589148441332" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="relative h-12 rounded-full border border-white/10 flex items-center text-on-surface-variant hover:text-[#1877f2] hover:border-[#1877f2]/50 hover:bg-[#1877f2]/10 transition-[max-width,border-color,background-color,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group overflow-visible lg:overflow-hidden max-w-[48px] lg:hover:max-w-[200px]">
                    <div className="w-12 h-12 flex items-center justify-center shrink-0 relative z-10">
                      <svg className="w-5 h-5 lg:group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </div>
                    <span className="hidden lg:block font-mono-label text-[10px] tracking-widest uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap pr-6 -ml-1">Facebook</span>
                    <span className="lg:hidden absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-mono-label text-[10px] tracking-widest uppercase text-on-surface-variant bg-surface-container-high border border-white/10 px-3 py-1.5 rounded-sm whitespace-nowrap pointer-events-none shadow-2xl z-50">Facebook</span>
                  </a>
                  {/* WhatsApp */}
                  <a href="https://wa.me/201063841779" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="relative h-12 rounded-full border border-white/10 flex items-center text-on-surface-variant hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-[max-width,border-color,background-color,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group overflow-visible lg:overflow-hidden max-w-[48px] lg:hover:max-w-[200px]">
                    <div className="w-12 h-12 flex items-center justify-center shrink-0 relative z-10">
                      <svg className="w-5 h-5 lg:group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </div>
                    <span className="hidden lg:block font-mono-label text-[10px] tracking-widest uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap pr-6 -ml-1">WhatsApp</span>
                    <span className="lg:hidden absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-mono-label text-[10px] tracking-widest uppercase text-on-surface-variant bg-surface-container-high border border-white/10 px-3 py-1.5 rounded-sm whitespace-nowrap pointer-events-none shadow-2xl z-50">WhatsApp</span>
                  </a>
                  {/* Email */}
                  <a href="mailto:wahadmomo@gmail.com" aria-label="Email" className="relative h-12 rounded-full border border-white/10 flex items-center text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-[max-width,border-color,background-color,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group overflow-visible lg:overflow-hidden max-w-[48px] lg:hover:max-w-[200px]">
                    <div className="w-12 h-12 flex items-center justify-center shrink-0 relative z-10">
                      <svg className="w-5 h-5 lg:group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </div>
                    <span className="hidden lg:block font-mono-label text-[10px] tracking-widest uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap pr-6 -ml-1">Email</span>
                    <span className="lg:hidden absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-mono-label text-[10px] tracking-widest uppercase text-on-surface-variant bg-surface-container-high border border-white/10 px-3 py-1.5 rounded-sm whitespace-nowrap pointer-events-none shadow-2xl z-50">Email</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
          >
            <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group">
              {/* Ambient hover glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-surface-variant)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <AnimatePresence mode="wait">

                {/* ── Success State ── */}
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 flex flex-col items-center justify-center text-center py-16 gap-6"
                  >
                    <CheckCircle className="w-14 h-14 text-green-500" />
                    <h3 className="font-display text-2xl text-primary">
                      {t('contact.success.title') as string || 'Message Sent!'}
                    </h3>
                    <p className="font-sans text-on-surface-variant text-sm max-w-xs">
                      {t('contact.success.subtitle') as string || "Thanks for reaching out. I'll get back to you soon."}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-4 font-mono-label text-[11px] uppercase tracking-widest text-on-surface-variant border border-white/10 px-5 py-2.5 rounded-sm hover:text-primary hover:border-primary/40 transition-all"
                    >
                      Send Another
                    </button>
                  </motion.div>
                )}

                {/* ── Form State ── */}
                {status !== 'success' && (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="relative z-10 space-y-12"
                  >
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">

                      {/* Full Name */}
                      <div className="relative md:col-span-2">
                        <input
                          id="contact-fullName"
                          type="text"
                          name="name"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          onFocus={() => setFocusedField('fullName')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-white/5 border border-white/15 px-4 py-4 text-primary focus:outline-none focus:border-primary transition-colors font-sans text-base rounded-[4px]"
                          placeholder=""
                        />
                        <motion.label
                          htmlFor="contact-fullName"
                          animate={{
                            y: (focusedField === 'fullName' || formData.fullName.length > 0) ? -28 : 0,
                            scale: (focusedField === 'fullName' || formData.fullName.length > 0) ? 0.85 : 1,
                            color: focusedField === 'fullName' ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                            backgroundColor: (focusedField === 'fullName' || formData.fullName.length > 0) ? '#1c1b1b' : 'rgba(0, 0, 0, 0)',
                          }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute start-4 top-[18px] font-mono-label text-[10px] uppercase tracking-widest pointer-events-none origin-left px-1.5 z-10"
                        >
                          {t('contact.form.fullName')}
                        </motion.label>
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-white/5 border border-white/15 px-4 py-4 text-primary focus:outline-none focus:border-primary transition-colors font-sans text-base rounded-[4px]"
                          placeholder=""
                        />
                        <motion.label
                          htmlFor="contact-email"
                          animate={{
                            y: (focusedField === 'email' || formData.email.length > 0) ? -28 : 0,
                            scale: (focusedField === 'email' || formData.email.length > 0) ? 0.85 : 1,
                            color: focusedField === 'email' ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                            backgroundColor: (focusedField === 'email' || formData.email.length > 0) ? '#1c1b1b' : 'rgba(0,0,0,0)',
                          }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute start-4 top-[18px] font-mono-label text-[10px] uppercase tracking-widest pointer-events-none origin-left px-1.5 z-10"
                        >
                          {t('contact.form.email')}
                        </motion.label>
                      </div>

                      {/* Phone */}
                      <div className="relative">
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-white/5 border border-white/15 px-4 py-4 text-primary focus:outline-none focus:border-primary transition-colors font-sans text-base rounded-[4px]"
                          placeholder=""
                        />
                        <motion.label
                          htmlFor="contact-phone"
                          animate={{
                            y: (focusedField === 'phone' || formData.phone.length > 0) ? -28 : 0,
                            scale: (focusedField === 'phone' || formData.phone.length > 0) ? 0.85 : 1,
                            color: focusedField === 'phone' ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                            backgroundColor: (focusedField === 'phone' || formData.phone.length > 0) ? '#1c1b1b' : 'rgba(0,0,0,0)',
                          }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute start-4 top-[18px] font-mono-label text-[10px] uppercase tracking-widest pointer-events-none origin-left px-1.5 z-10"
                        >
                          {t('contact.form.phone')}
                        </motion.label>
                      </div>

                      {/* Your Message */}
                      <div className="relative md:col-span-2">
                        <textarea
                          id="contact-message"
                          rows={4}
                          name="message"
                          required
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          onFocus={() => setFocusedField('details')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-white/5 border border-white/15 px-4 py-4 text-primary focus:outline-none focus:border-primary transition-colors font-sans text-base rounded-[4px] min-h-[120px] resize-none"
                          placeholder=""
                        />
                        <motion.label
                          htmlFor="contact-message"
                          animate={{
                            y: (focusedField === 'details' || formData.details.length > 0) ? -26 : 0,
                            scale: (focusedField === 'details' || formData.details.length > 0) ? 0.85 : 1,
                            color: focusedField === 'details' ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                            backgroundColor: (focusedField === 'details' || formData.details.length > 0) ? '#1c1b1b' : 'rgba(0, 0, 0, 0)',
                          }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute start-4 top-4 font-mono-label text-[10px] uppercase tracking-widest pointer-events-none origin-left px-1.5 z-10"
                        >
                          {t('contact.yourMessage')}
                        </motion.label>
                      </div>
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="flex items-center gap-2.5 text-red-400 font-mono-label text-[11px] uppercase tracking-widest"
                        >
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          {t('contact.error') as string || 'Something went wrong. Please try again.'}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        whileHover={status !== 'loading' ? { scale: 1.015 } : {}}
                        whileTap={status !== 'loading' ? { scale: 0.985 } : {}}
                        className="w-full bg-primary text-background py-5 rounded-sm font-mono-label tracking-widest flex items-center justify-center gap-3 hover:brightness-110 transition-all duration-300 hover-effect group/btn disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>{t('contact.form.sending') as string || 'SENDING...'}</span>
                          </>
                        ) : (
                          <>
                            {t('contact.form.send')}
                            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}