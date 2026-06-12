import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { X, GraduationCap } from 'lucide-react'
import { useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'

type BioPanelDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export function BioPanelDrawer({ isOpen, onClose }: BioPanelDrawerProps) {
  const { t } = useTranslation()
  const { isRtl } = useLanguage()

  // Lock scroll when drawer is open
  useEffect(() => {
    const lenis = (window as any).lenis
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      if (lenis) lenis.stop()
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      if (lenis) lenis.start()
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      if (lenis) lenis.start()
    }
  }, [isOpen])

  const drawerVariants = {
    closed: {
      x: isRtl ? '-100%' : '100%',
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    },
    open: {
      x: '0%',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  }

  const fadeUp = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.08, duration: 0.5 }
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/75 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={`fixed top-0 ${isRtl ? 'start-0 border-e' : 'end-0 border-s'} h-full w-full max-w-full md:w-[560px] md:max-w-[560px] bg-surface border-white/10 z-[101] shadow-2xl flex flex-col box-border`}
          >
            {/* Fixed Header */}
            <div className="flex items-center justify-between px-6 sm:px-10 py-8 border-b border-white/5 flex-shrink-0 w-full max-w-full box-border">
              <h2 className="font-display text-[28px] text-primary tracking-tight">
                {t('about.bioTitle')}
              </h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all hover-effect"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div 
              data-lenis-prevent 
              className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar px-6 sm:px-10 py-8 space-y-0 w-full max-w-full box-border"
            >
              {/* Bio paragraphs */}
              <div className="space-y-8 mb-10 w-full max-w-full">
                <motion.p
                  custom={0} variants={fadeUp} initial="closed" animate="open" exit="closed"
                  className="w-full max-w-full box-border font-sans text-base sm:text-[17px] text-on-surface-variant leading-relaxed tracking-wide"
                >
                  {t('about.bio1')}
                </motion.p>
                <motion.p
                  custom={1} variants={fadeUp} initial="closed" animate="open" exit="closed"
                  className="w-full max-w-full box-border font-sans text-base sm:text-[17px] text-on-surface-variant leading-relaxed tracking-wide"
                >
                  {t('about.bio2')}
                </motion.p>
                <motion.p
                  custom={2} variants={fadeUp} initial="closed" animate="open" exit="closed"
                  className="w-full max-w-full box-border font-sans text-base sm:text-[17px] text-on-surface-variant leading-relaxed tracking-wide"
                >
                  {t('about.bio3')}
                </motion.p>
                <motion.p
                  custom={3} variants={fadeUp} initial="closed" animate="open" exit="closed"
                  className="w-full max-w-full box-border font-sans text-base sm:text-[17px] text-on-surface-variant leading-relaxed tracking-wide"
                >
                  {t('about.bio4')}
                </motion.p>
                <motion.p
                  custom={4} variants={fadeUp} initial="closed" animate="open" exit="closed"
                  className="w-full max-w-full box-border font-sans text-base sm:text-[17px] text-on-surface-variant leading-relaxed tracking-wide"
                >
                  {t('about.bio5')}
                </motion.p>
              </div>

              {/* Divider */}
              <motion.div
                custom={2} variants={fadeUp} initial="closed" animate="open" exit="closed"
                className="border-t border-white/8 pt-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-5 h-5 text-on-surface-variant" />
                  <h3 className="font-mono-label text-sm text-on-surface-variant uppercase tracking-widest">
                    {t('about.educationTitle')}
                  </h3>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4 group hover:border-white/15 transition-colors">
                  <span className="font-display text-[17px] text-primary group-hover:text-white transition-colors">
                    {t('about.education.msc')}
                  </span>
                  <span className="font-mono-label text-xs text-on-surface-variant">
                    {t('about.education.mscPeriod')}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
