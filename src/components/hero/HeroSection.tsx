import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { HeroSpline } from './HeroSpline'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const [hasAnimated, setHasAnimated] = useState(() => {
    if (typeof window !== 'undefined') {
      return !!(window as Window & { __hero_intro_animated?: boolean }).__hero_intro_animated
    }
    return false
  })

  useEffect(() => {
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        if (typeof window !== 'undefined') {
          (window as Window & { __hero_intro_animated?: boolean }).__hero_intro_animated = true
          setHasAnimated(true)
        }
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [hasAnimated])

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen h-[100dvh] w-full max-w-full flex items-center justify-center overflow-hidden bg-background"
    >
      {/* 3D Spline Background */}
      <HeroSpline />

      {/* Background Gradients (Decorative, pointer-events-none) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_100%)] pointer-events-none opacity-80" />

      {/* Ambient Glows (Decorative, pointer-events-none) */}
      <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_0%,transparent_100%)] blur-[120px] pointer-events-none z-[1]" />
      <div className="absolute bottom-[20%] right-[20%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle_at_center,rgba(185,215,234,0.012)_0%,transparent_100%)] blur-[120px] pointer-events-none z-[1]" />

      {/* Main Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-margin-mobile md:px-margin-desktop w-full max-w-5xl mx-auto mt-24 md:mt-16 pointer-events-none flex flex-col items-center"
      >
        <motion.span 
          className="font-mono-label text-on-surface-variant text-[11px] md:text-[13px] tracking-[0.2em] mb-4 block pointer-events-auto"
          initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={hasAnimated ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
        >
        </motion.span>

        <motion.h1 
          className="font-display text-[48px] sm:text-[68px] md:text-[96px] lg:text-[112px] leading-[0.9] tracking-tighter mb-8 flex flex-col items-center font-bold pointer-events-auto"
          initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={hasAnimated ? { duration: 0 } : { duration: 1.2, delay: 0.3 }}
        >
          <span className="flex flex-wrap justify-center gap-x-4" dir="ltr">
            <span style={{ backgroundImage: 'linear-gradient(to right, var(--hero-name-from), var(--hero-name-via), var(--hero-name-to))' }} className="bg-clip-text text-transparent font-extrabold">Mohamed</span>
            <span className="text-on-surface-variant font-light">Wahid</span>
          </span>
        </motion.h1>

        <motion.h2 
          className="font-display text-[20px] sm:text-[24px] md:text-[32px] text-primary leading-tight mb-6 max-w-3xl tracking-tight text-center pointer-events-auto"
          initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={hasAnimated ? { duration: 0 } : { duration: 1, delay: 0.45 }}
        >
          {t('hero.tagline')}
        </motion.h2>

        <motion.p 
          className="font-sans text-[15px] sm:text-[16px] md:text-[18px] text-on-surface-variant mb-12 leading-relaxed max-w-2xl text-center pointer-events-auto"
          initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={hasAnimated ? { duration: 0 } : { duration: 1, delay: 0.6 }}
        >
          {t('hero.introduction')}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 pointer-events-auto w-full sm:w-auto items-center justify-center mb-8"
          initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={hasAnimated ? { duration: 0 } : { duration: 1, delay: 0.75 }}
        >
          <a 
            href="#work"
            className="hero-cta-button px-8 py-4 rounded-full font-mono-label text-center block w-full sm:w-auto"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a 
            href="#contact"
            className="border border-white/20 bg-transparent text-primary px-8 py-4 rounded-full font-mono-label text-center hover:bg-white/5 hover:border-white/40 transition-all duration-300 hover-effect block w-full sm:w-auto"
          >
            {t('hero.ctaSecondary')}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 hover:opacity-75 transition-opacity duration-300 pointer-events-none z-10 py-6"
        initial={hasAnimated ? { opacity: 0.3 } : { opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={hasAnimated ? { duration: 0 } : { duration: 1, delay: 1.5 }}
      >
        <div className="w-[1.5px] h-12 bg-white/10 rounded-full relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-zinc-600 rounded-full"
            animate={{ y: [0, 32, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}