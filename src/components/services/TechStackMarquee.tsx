import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { row1Skills, row2Skills, type SkillItem } from '../../lib/constants'
import {
  MonitorSmartphone, Boxes, Globe, Lock,
  Compass, Palette, UserCheck, LayoutTemplate,
  Workflow, Smartphone, Accessibility, Target,
  GitBranch, Lightbulb, Rocket, ShieldCheck, Plug, Component
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
    default: return <Boxes {...iconProps} />
  }
}

/* ── Single Marquee Skill Pill ───────────────────────────────── */
function SkillPill({ skill }: { skill: SkillItem }) {
  return (
    <div className="glass-panel px-5 py-3 rounded-full flex items-center gap-3 hover:bg-white/[0.07] transition-colors duration-300 cursor-default whitespace-nowrap select-none border border-white/5 bg-surface-container/20 backdrop-blur-sm mr-4 rtl:mr-0 rtl:ml-4">
      <SkillIcon skill={skill} />
      <span className="font-mono-label text-[13px] text-primary">{skill.name}</span>
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
      <div className="absolute -top-5 start-0 font-mono-label text-[10px] text-on-surface-variant/40 uppercase tracking-widest z-10 select-none">
        {label}
      </div>
      <div className="flex w-full overflow-hidden mt-2 select-none max-w-full" dir="ltr" style={{ contain: 'paint' }}>
        <div
          className={`flex gap-0 w-max ${
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
function MobileSnapScroll({ skills }: { skills: SkillItem[] }) {
  return (
    <div className="md:hidden w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 pt-2 px-margin-mobile -mx-margin-mobile flex gap-4" style={{ WebkitOverflowScrolling: 'touch' }}>
      {/* 2-row horizontal grid */}
      <div className="grid grid-rows-2 grid-flow-col gap-x-4 gap-y-4 pr-margin-mobile">
        {skills.map((skill, i) => (
          <div key={`mobile-skill-${i}`} className="snap-center shrink-0">
            <SkillPill skill={skill} />
          </div>
        ))}
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

      <div className="flex flex-col gap-12 px-4 relative z-20">
        {/* Desktop Marquees */}
        <div className="hidden md:flex flex-col gap-12">
          <MarqueeRow skills={row1Skills} label={t('techStack.row1' as any) as unknown as string} />
          <MarqueeRow skills={row2Skills} reverse label={t('techStack.row2' as any) as unknown as string} />
        </div>

        {/* Mobile Snap Scroll */}
        <MobileSnapScroll skills={[...row1Skills, ...row2Skills]} />
      </div>
    </section>
  )
}