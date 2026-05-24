import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { X } from 'lucide-react'
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
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Framer motion variants for RTL support
  const drawerVariants = {
    closed: {
      x: isRtl ? '-100%' : '100%',
      transition: { duration: 0.5 }
    },
    open: {
      x: '0%',
      transition: { duration: 0.7 }
    }
  }

  const contentStagger = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + (i * 0.1), duration: 0.6 }
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={`fixed top-0 ${isRtl ? 'left-0 border-r' : 'right-0 border-l'} h-full w-full md:w-[600px] bg-surface border-white/10 z-[101] p-10 overflow-y-auto custom-scrollbar shadow-2xl`}
          >
            <button 
              onClick={onClose}
              className={`absolute top-10 ${isRtl ? 'left-10' : 'right-10'} text-on-surface-variant hover:text-primary transition-colors hover-effect`}
            >
              <X size={32} />
            </button>

            <motion.h2 
              custom={0} variants={contentStagger} initial="closed" animate="open" exit="closed"
              className="font-display text-headline-lg text-primary mb-12 mt-12"
            >
              {t('about.bioTitle')}
            </motion.h2>

            <div className="space-y-8 font-sans text-body-lg text-on-surface-variant leading-relaxed">
              <motion.p custom={1} variants={contentStagger} initial="closed" animate="open" exit="closed">
                {t('about.bio1')}
              </motion.p>
              <motion.p custom={2} variants={contentStagger} initial="closed" animate="open" exit="closed">
                {t('about.bio2')}
              </motion.p>
              <motion.p custom={3} variants={contentStagger} initial="closed" animate="open" exit="closed">
                {t('about.bio3')}
              </motion.p>

              <motion.div 
                custom={4} variants={contentStagger} initial="closed" animate="open" exit="closed"
                className="mt-16 pt-12 border-t border-white/10"
              >
                <h3 className="font-display text-headline-md text-primary mb-8">
                  {t('about.educationTitle')}
                </h3>
                <ul className="space-y-6 font-sans">
                  <li className="flex justify-between items-center border-b border-white/5 pb-4 group hover:border-white/20 transition-colors">
                    <span className="text-on-surface group-hover:text-primary transition-colors">{t('about.education.msc')}</span> 
                    <span className="font-mono-label text-on-surface-variant">{t('about.education.mscPeriod')}</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/5 pb-4 group hover:border-white/20 transition-colors">
                    <span className="text-on-surface group-hover:text-primary transition-colors">{t('about.education.bsc')}</span> 
                    <span className="font-mono-label text-on-surface-variant">{t('about.education.bscPeriod')}</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
