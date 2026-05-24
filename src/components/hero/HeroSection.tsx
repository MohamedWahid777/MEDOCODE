import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ParticleField } from './ParticleField'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Parallax effects for scroll
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const canvasY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen h-[100dvh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* 3D Particle Background */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: canvasY }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ParticleField />
        </Canvas>
      </motion.div>

      {/* Background Gradients for Depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_100%)] pointer-events-none opacity-80" />

      {/* Main Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-20 pointer-events-none flex flex-col items-center"
      >
        <motion.h1 
          className="font-display text-[64px] md:text-[140px] leading-[0.9] text-primary tracking-tighter mb-6 flex flex-col"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <span>{t('hero.firstName')}</span>
          <span>{t('hero.lastName')}</span>
        </motion.h1>

        <motion.p 
          className="font-headline-md text-headline-lg-mobile md:text-headline-md text-on-surface-variant mb-12 tracking-wide max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.a 
          href="#work"
          className="glass-panel text-primary px-10 py-5 rounded-full font-mono-label hover:bg-white/10 transition-colors pointer-events-auto hover-effect block w-fit"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {t('hero.cta')}
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="font-mono-label mb-4">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-primary" size={24} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  )
}
