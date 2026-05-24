/* ══════════════════════════════════════════════════════════════
   GSAP Animation Presets
   Premium easing curves and reusable animation configurations
   ══════════════════════════════════════════════════════════════ */

export const EASE = {
  expoOut: 'expo.out',
  expoInOut: 'expo.inOut',
  circOut: 'circ.out',
  powerOut: 'power3.out',
  powerInOut: 'power3.inOut',
  smooth: 'power2.out',
  bounce: 'back.out(1.7)',
} as const

export const DURATION = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  cinematic: 1.6,
  ultraSlow: 2.0,
} as const

export const REVEAL_CONFIG = {
  y: 60,
  opacity: 0,
  duration: DURATION.slow,
  ease: EASE.expoOut,
  stagger: 0.1,
} as const

export const STAGGER_CONFIG = {
  each: 0.08,
  from: 'start' as const,
  ease: EASE.powerOut,
}

export const SCROLL_TRIGGER_DEFAULTS = {
  start: 'top 85%',
  end: 'bottom 20%',
  toggleActions: 'play none none none' as const,
}
