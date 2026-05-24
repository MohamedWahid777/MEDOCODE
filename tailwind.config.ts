import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* ── Core Surfaces ─────────────────────────────── */
        background: 'var(--color-background)',
        surface: {
          DEFAULT: 'var(--color-surface)',
          dim: 'var(--color-surface-dim)',
          bright: 'var(--color-surface-bright)',
          variant: 'var(--color-surface-variant)',
          tint: 'var(--color-surface-tint)',
        },
        'surface-container': {
          lowest: 'var(--color-surface-container-lowest)',
          low: 'var(--color-surface-container-low)',
          DEFAULT: 'var(--color-surface-container)',
          high: 'var(--color-surface-container-high)',
          highest: 'var(--color-surface-container-highest)',
        },

        /* ── On Surfaces ───────────────────────────────── */
        'on-surface': {
          DEFAULT: 'var(--color-on-surface)',
          variant: 'var(--color-on-surface-variant)',
        },
        'on-background': 'var(--color-on-background)',

        /* ── Primary ───────────────────────────────────── */
        primary: {
          DEFAULT: 'var(--color-primary)',
          container: 'var(--color-primary-container)',
          fixed: 'var(--color-primary-fixed)',
          'fixed-dim': 'var(--color-primary-fixed-dim)',
        },
        'on-primary': {
          DEFAULT: 'var(--color-on-primary)',
          container: 'var(--color-on-primary-container)',
          fixed: 'var(--color-on-primary-fixed)',
          'fixed-variant': 'var(--color-on-primary-fixed-variant)',
        },
        'inverse-primary': 'var(--color-inverse-primary)',

        /* ── Secondary ─────────────────────────────────── */
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          container: 'var(--color-secondary-container)',
          fixed: 'var(--color-secondary-fixed)',
          'fixed-dim': 'var(--color-secondary-fixed-dim)',
        },
        'on-secondary': {
          DEFAULT: 'var(--color-on-secondary)',
          container: 'var(--color-on-secondary-container)',
          fixed: 'var(--color-on-secondary-fixed)',
          'fixed-variant': 'var(--color-on-secondary-fixed-variant)',
        },

        /* ── Tertiary ──────────────────────────────────── */
        tertiary: {
          DEFAULT: 'var(--color-tertiary)',
          container: 'var(--color-tertiary-container)',
          fixed: 'var(--color-tertiary-fixed)',
          'fixed-dim': 'var(--color-tertiary-fixed-dim)',
        },
        'on-tertiary': {
          DEFAULT: 'var(--color-on-tertiary)',
          container: 'var(--color-on-tertiary-container)',
          fixed: 'var(--color-on-tertiary-fixed)',
          'fixed-variant': 'var(--color-on-tertiary-fixed-variant)',
        },

        /* ── Outline ───────────────────────────────────── */
        outline: {
          DEFAULT: 'var(--color-outline)',
          variant: 'var(--color-outline-variant)',
        },

        /* ── Inverse ───────────────────────────────────── */
        'inverse-surface': 'var(--color-inverse-surface)',
        'inverse-on-surface': 'var(--color-inverse-on-surface)',

        /* ── Error ─────────────────────────────────────── */
        error: {
          DEFAULT: 'var(--color-error)',
          container: 'var(--color-error-container)',
        },
        'on-error': {
          DEFAULT: 'var(--color-on-error)',
          container: 'var(--color-on-error-container)',
        },
      },

      fontFamily: {
        sans: ['Geist Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
        display: ['Geist Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },

      fontSize: {
        display: [
          '72px',
          {
            lineHeight: '1.1',
            letterSpacing: '-0.04em',
            fontWeight: '700',
          },
        ],
        'headline-lg': [
          '48px',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.03em',
            fontWeight: '600',
          },
        ],
        'headline-lg-mobile': [
          '32px',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            fontWeight: '600',
          },
        ],
        'headline-md': [
          '32px',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.02em',
            fontWeight: '600',
          },
        ],
        'body-lg': [
          '18px',
          {
            lineHeight: '1.6',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
        'body-md': [
          '16px',
          {
            lineHeight: '1.5',
            letterSpacing: '0em',
            fontWeight: '400',
          },
        ],
        'label-sm': [
          '12px',
          {
            lineHeight: '1.4',
            letterSpacing: '0.05em',
            fontWeight: '500',
          },
        ],
      },

      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
      },

      spacing: {
        unit: '8px',
        gutter: '24px',
        'margin-mobile': '20px',
        'margin-desktop': '64px',
        'container-max': '1400px',
      },

      maxWidth: {
        container: '1400px',
      },

      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'circ-out': 'cubic-bezier(0, 0.55, 0.45, 1)',
      },

      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },

      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
