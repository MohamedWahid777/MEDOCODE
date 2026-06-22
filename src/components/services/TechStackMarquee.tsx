import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { row1Skills, row2Skills, type SkillItem } from '../../lib/constants'
import {
  MonitorSmartphone, Boxes, Globe,
  Compass, Palette, LayoutTemplate,
  Workflow,
  GitBranch, Lightbulb, Rocket, ShieldCheck, Plug, Component,
  Code2, Search, Terminal, Zap, Brain, GitMerge, Cpu,
  ChevronLeft, ChevronRight
} from 'lucide-react'

/* ── Skill Icon — logo صورة حقيقية أو Lucide fallback ───────── */
function SkillIcon({ skill }: { skill: SkillItem }) {
  if (skill.logoUrl) {
    return (
      <img
        src={skill.logoUrl}
        alt={skill.name}
        className="w-5 h-5 flex-shrink-0 object-contain"
      />
    )
  }

  // Use the exact iconFallback name if provided, otherwise default to Boxes
  const iconProps = { className: "w-5 h-5 text-on-surface-variant flex-shrink-0" }
  
  switch (skill.iconFallback) {
    case 'MonitorSmartphone': return <MonitorSmartphone {...iconProps} />
    case 'Component': return <Component {...iconProps} />
    case 'Plug': return <Plug {...iconProps} />
    case 'ShieldCheck': return <ShieldCheck {...iconProps} />
    case 'Compass': return <Compass {...iconProps} />
    case 'LayoutTemplate': return <LayoutTemplate {...iconProps} />
    case 'Workflow': return <Workflow {...iconProps} />
    case 'GitBranch': return <GitBranch {...iconProps} />
    case 'Lightbulb': return <Lightbulb {...iconProps} />
    case 'Rocket': return <Rocket {...iconProps} />
    case 'Code2': return <Code2 {...iconProps} />
    case 'Search': return <Search {...iconProps} />
    case 'Terminal': return <Terminal {...iconProps} />
    case 'Zap': return <Zap {...iconProps} />
    case 'Brain': return <Brain {...iconProps} />
    case 'GitMerge': return <GitMerge {...iconProps} />
    case 'Cpu': return <Cpu {...iconProps} />
    case 'Globe': return <Globe {...iconProps} />
    case 'Palette': return <Palette {...iconProps} />
    default: return <Boxes {...iconProps} />
  }
}

/* ── Single Marquee Skill Pill ───────────────────────────────── */
function SkillPill({ skill }: { skill: SkillItem }) {
  return (
    <div className="glass-panel px-3 py-3 md:px-5 rounded-xl md:rounded-full flex items-center gap-2 md:gap-3 hover:bg-white/[0.07] transition-colors duration-300 cursor-default select-none border border-white/5 bg-surface-container/20 backdrop-blur-sm w-full md:w-auto overflow-hidden">
      <SkillIcon skill={skill} />
      <span className="font-mono-label text-[11px] md:text-[13px] text-primary truncate">{skill.name}</span>
    </div>
  )
}

/* ── Seamless Infinite Marquee Row ────────────────────────────── */
function MarqueeRow({
  skills,
  reverse = false,
  label,
}: {
  skills: SkillItem[]
  reverse?: boolean
  label: string
}) {
  return (
    <div className="relative w-full max-w-full">
      <div className="absolute -top-5 start-0 font-mono-label text-[10px] text-on-surface-variant/70 uppercase tracking-widest z-10 select-none">
        {label}
      </div>
      <div className="flex w-full overflow-hidden mt-2 select-none max-w-full" dir="ltr" style={{ contain: 'paint' }}>
        <div
          className={`flex gap-4 w-max ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          } hover:[animation-play-state:paused]`}
        >
          {skills.map((skill, i) => (
            <SkillPill key={`${skill.name}-a-${i}`} skill={skill} />
          ))}
          {skills.map((skill, i) => (
            <SkillPill key={`${skill.name}-b-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Mobile Touch-Friendly Snap Scroll ────────────────────────── */
function MobileSnapScroll({ t }: { t: any }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' })
    }
  }

  return (
    <div className="md:hidden relative w-full pt-2 pb-6 group">
      
      {/* Navigation Arrows */}
      <div className="absolute top-1 left-0 right-0 flex justify-between px-margin-mobile pointer-events-none z-10">
        <button 
          onClick={scrollLeft} 
          aria-label="Previous"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 bg-surface-container/50 backdrop-blur-md text-on-surface-variant hover:text-primary transition-colors pointer-events-auto"
        >
          <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
        </button>
        <button 
          onClick={scrollRight} 
          aria-label="Next"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 bg-surface-container/50 backdrop-blur-md text-on-surface-variant hover:text-primary transition-colors pointer-events-auto"
        >
          <ChevronRight className="w-4 h-4 rtl:rotate-180" />
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto snap-x snap-mandatory flex scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" 
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* Page 1: Languages & Frameworks */}
        <div className="w-full shrink-0 snap-center px-margin-mobile flex flex-col">
          <div className="font-mono-label text-[10px] text-on-surface-variant/70 uppercase tracking-widest mb-6 select-none text-center">
            {t('techStack.row1' as any) as unknown as string}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {row1Skills.map((skill, i) => (
              <SkillPill key={`p1-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Page 2: Engineering & Practices */}
        <div className="w-full shrink-0 snap-center px-margin-mobile flex flex-col">
          <div className="font-mono-label text-[10px] text-on-surface-variant/70 uppercase tracking-widest mb-6 select-none text-center">
            {t('techStack.row2' as any) as unknown as string}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {row2Skills.map((skill, i) => (
              <SkillPill key={`p2-${i}`} skill={skill} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

/* ── Main Component ───────────────────────────────────────────── */
export function TechStackMarquee() {
  const { t } = useTranslation()

  return (
    <section className="py-32 border-y border-white/5 bg-surface-container-lowest relative overflow-hidden">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none" />

      <div className="mb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-headline-lg text-primary text-center"
        >
          {t('techStack.title' as any) as unknown as string}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono-label text-center text-on-surface-variant mt-3 text-sm tracking-widest uppercase"
        >
          {t('techStack.subtitle' as any) as unknown as string}
        </motion.p>
      </div>

      <div className="flex flex-col gap-12 relative z-20">
        {/* Desktop Marquees */}
        <div className="hidden md:flex flex-col gap-12 px-4">
          <MarqueeRow skills={row1Skills} label={t('techStack.row1' as any) as unknown as string} />
          <MarqueeRow skills={row2Skills} reverse label={t('techStack.row2' as any) as unknown as string} />
        </div>

        {/* Mobile Snap Scroll */}
        <MobileSnapScroll t={t} />
      </div>
    </section>
  )
}