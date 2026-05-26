import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../context/LanguageContext'
import { navLinks } from '../../lib/constants'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useTranslation()
  const { language, setLanguage, isRtl } = useLanguage()

  // Hide/Reveal navbar based on scroll direction
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (previous && latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    // Smooth scroll to element using standard DOM methods (Lenis intercepts this)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: '-100%', opacity: 0 }
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed top-6 left-0 right-0 w-full max-w-full z-50 flex justify-center px-margin-mobile md:px-margin-desktop pointer-events-none"
      >
        <nav className="bg-surface/60 backdrop-blur-xl border border-white/10 rounded-full w-full max-w-container-max flex justify-between items-center px-6 md:px-8 py-4 pointer-events-auto shadow-2xl">
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'body')}
            className="font-display text-[24px] tracking-tighter text-primary hover-effect"
          >
            MEDOCODE
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-on-surface-variant hover:text-primary transition-colors font-mono-label hover-effect"
              >
                {t(`nav.${link.label.toLowerCase()}`)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={toggleLanguage}
              className="text-primary hover:opacity-80 transition-opacity duration-300 font-mono-label hidden md:block hover-effect"
            >
              {t('nav.langSwitch')}
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:block bg-primary text-background px-6 py-2 rounded-full font-mono-label hover:bg-surface-variant hover:text-primary border border-transparent hover:border-white/20 transition-all duration-300 hover-effect"
            >
              {t('nav.letsBuild')}
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-primary p-2 hover-effect"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay / Side Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark overlay backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Slide-in side drawer */}
            <motion.div
              key="drawer"
              initial={{ x: isRtl ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? '-100%' : '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 40 }}
              className={`fixed top-0 bottom-0 z-[101] w-[75vw] max-w-[320px] h-full bg-surface/95 backdrop-blur-xl shadow-2xl flex flex-col p-6 md:hidden ${
                isRtl ? 'left-0 border-r border-white/10' : 'right-0 border-l border-white/10'
              }`}
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-display text-[24px] tracking-tighter text-primary">MEDOCODE</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-primary p-2"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-8 flex-1 justify-center">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-3xl font-display text-on-surface-variant hover:text-primary transition-colors text-start"
                  >
                    {t(`nav.${link.label.toLowerCase()}`)}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-6 mt-auto">
                <button
                  onClick={toggleLanguage}
                  className="text-start text-xl font-display text-primary hover:opacity-80 transition-opacity"
                >
                  {language === 'en' ? 'Arabic Version (عربي)' : 'English Version'}
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="bg-primary text-background text-center px-6 py-4 rounded-xl font-mono-label hover:bg-surface-variant hover:text-primary transition-all"
                >
                  {t('nav.letsBuild')}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
