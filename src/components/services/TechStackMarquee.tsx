import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { frontendSkills, uiuxSkills, expertiseMarquee, type SkillItem } from '../../lib/constants'

/* ── Inline brand logo (letter-box style) ─────────────────────── */
function BrandIcon({ skill }: { skill: SkillItem }) {
  if (!skill.abbr) {
    return (
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
      />
    )
  }
  return (
    <span
      className="inline-flex items-center justify-center rounded-[4px] text-[10px] font-bold leading-none flex-shrink-0"
      style={{
        width: 22,
        height: 22,
        backgroundColor: skill.color ?? 'rgba(255,255,255,0.15)',
        color: skill.textColor ?? '#fff',
        fontFamily: 'monospace',
      }}
    >
      {skill.abbr}
    </span>
  )
}

/* ── Single marquee pill ──────────────────────────────────────── */
function SkillPill({ skill }: { skill: SkillItem }) {
  return (
    <div className="glass-panel px-5 py-3 rounded-full flex items-center gap-3 hover:bg-white/[0.07] transition-colors duration-300 cursor-default whitespace-nowrap select-none">
      <BrandIcon skill={skill} />
      <span className="font-mono-label text-[13px] text-primary">{skill.name}</span>
    </div>
  )
}

/* ── Marquee row ──────────────────────────────────────────────── */
function MarqueeRow({
  skills,
  reverse = false,
  label,
}: {
  skills: SkillItem[]
  reverse?: boolean
  label: string
}) {
  const tripled = [...skills, ...skills, ...skills]
  return (
    <div className="relative">
      {/* Row label */}
      <div className="absolute -top-5 left-0 font-mono-label text-[10px] text-on-surface-variant/40 uppercase tracking-widest z-10">
        {label}
      </div>
      <div className="flex w-full overflow-hidden group mt-2">
        <div
          className={`flex gap-4 pr-4 w-max ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          } group-hover:[animation-play-state:paused]`}
        >
          {tripled.map((skill, i) => (
            <SkillPill key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Main Component ───────────────────────────────────────────── */
export function TechStackMarquee() {
  const { t } = useTranslation()

  return (
    <>
      {/* Skills Section */}
      <section className="py-32 border-y border-white/5 overflow-hidden bg-surface-container-lowest relative">
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

        <div className="flex flex-col gap-12 px-4">
          <MarqueeRow skills={frontendSkills} label="Frontend Development" />
          <MarqueeRow skills={uiuxSkills} reverse label="UI/UX & Design" />
        </div>
      </section>

      {/* Expertise Banner */}
      <section className="py-12 border-b border-white/5 overflow-hidden bg-primary text-background">
        <div className="relative flex overflow-hidden w-full">
          <div className="flex gap-16 pr-16 items-center animate-marquee w-max">
            {[...expertiseMarquee, ...expertiseMarquee, ...expertiseMarquee].map((item, i) => (
              <div key={i} className="flex items-center gap-16">
                <span className="font-display text-[40px] uppercase tracking-tighter whitespace-nowrap">
                  {item}
                </span>
                <span className="text-3xl text-background/50">★</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
