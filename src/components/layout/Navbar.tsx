import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { navLinks } from '../../lib/constants'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Logo } from '../ui/Logo'

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useTranslation()
  const { language, setLanguage, isRtl } = useLanguage()
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'warm' : 'dark')
    setIsMobileMenuOpen(false)
  }

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
    setIsMobileMenuOpen(false)
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
            className="hover-effect"
          >
            <Logo />
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
              onClick={toggleTheme}
              className="text-primary hover:opacity-80 transition-opacity duration-300 hidden md:block hover-effect"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="text-primary hover:opacity-80 transition-opacity duration-300 font-mono-label hidden md:block hover-effect"
            >
              {t('nav.langSwitch')}
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hero-cta-button hidden md:block px-6 py-2 rounded-full font-mono-label hover-effect"
            >
              {t('nav.letsBuild')}
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-primary p-2 hover-effect"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
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
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[100] bg-black/80 md:hidden"
            />

            {/* Slide-in side drawer */}
            <motion.div
              key="drawer"
              initial={{ x: isRtl ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? '-100%' : '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`fixed top-0 bottom-0 z-[101] w-[85vw] max-w-[400px] h-full bg-surface shadow-2xl flex flex-col p-6 md:hidden ${
                isRtl ? 'left-0 border-r border-white/10' : 'right-0 border-l border-white/10'
              }`}
            >
              <div className="flex justify-between items-center mb-8">
                <Logo />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-white/5 transition-all group"
                  aria-label="Close mobile menu"
                >
                  <X size={20} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>

              <div className="flex flex-col gap-2 flex-1 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group relative flex items-center p-3 sm:p-4 rounded-xl border border-white/10 bg-surface-variant/30 hover:bg-surface-variant/80 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                  >
                    {/* Subtle accent highlight left border */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary group-hover:h-1/2 transition-all duration-300 rounded-r-full" />
                    
                    <span className="text-[20px] sm:text-[24px] leading-tight font-display text-on-background group-hover:text-primary transition-colors pl-3">
                      {t(`nav.${link.label.toLowerCase()}`)}
                    </span>
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-auto border-t border-white/10 pt-6">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="font-mono-label tracking-widest text-[10px] text-on-surface-variant uppercase">
                    Theme
                  </span>
                  <span className="text-primary">
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                  </span>
                </button>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="font-mono-label tracking-widest text-[10px] text-on-surface-variant uppercase">
                    Language
                  </span>
                  <span className="font-display text-primary text-xs">
                    {language === 'en' ? 'Arabic (عربي)' : 'English Version'}
                  </span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hero-cta-button text-center px-6 py-3 rounded-xl font-mono-label tracking-widest flex justify-center items-center text-xs"
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
