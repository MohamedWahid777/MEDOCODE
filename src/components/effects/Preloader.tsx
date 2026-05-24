import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    // Lock scroll during preloader
    document.body.classList.add('overflow-hidden')
    
    // Simulate loading progress
    const duration = 2000 // 2 seconds
    const interval = 20
    const steps = duration / interval
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setProgress(Math.min((currentStep / steps) * 100, 100))
      
      if (currentStep >= steps) {
        clearInterval(timer)
        setTimeout(() => {
          setIsLoading(false)
          document.body.classList.remove('overflow-hidden')
        }, 500)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl tracking-tighter text-primary"
            >
              MEDOCODE
            </motion.div>
            
            <div className="w-64 h-px bg-surface-variant relative overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-primary w-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono-label text-on-surface-variant flex gap-4"
            >
              <span>{t('hero.subtitle', 'Creative Developer & Architect')}</span>
              <span>{Math.round(progress)}%</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
