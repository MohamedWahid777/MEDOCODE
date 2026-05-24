import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Code2, Monitor, View, Orbit, Palette, Server, Database, Container, Layout } from 'lucide-react'
import { techStack, expertiseMarquee } from '../../lib/constants'

const TechIconMap: Record<string, React.ElementType> = {
  'JavaScript / TypeScript': Code2,
  'React & Next.js': Monitor,
  'Three.js / WebGL': View,
  'GSAP': Orbit,
  'Tailwind CSS': Palette,
  'Node.js': Server,
  'Framer Motion': Orbit,
  'PostgreSQL': Database,
  'Docker': Container,
  'Figma': Layout,
}

export function TechStackMarquee() {
  const { t } = useTranslation()

  // Split stack into two rows for the marquee
  const row1 = techStack.slice(0, 5)
  const row2 = techStack.slice(5)

  return (
    <>
      <section className="py-32 border-y border-white/5 overflow-hidden bg-surface-container-lowest relative">
        <div className="mb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-headline-lg text-primary text-center"
          >
            {t('techStack.title' as any) as unknown as string}
          </motion.h2>
        </div>

        {/* Gradient fades for marquee edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none" />

        <div className="relative flex flex-col gap-8">
          {/* Row 1: Left */}
          <div className="flex relative w-full group">
            <div className="flex gap-8 pr-8 animate-marquee group-hover:[animation-play-state:paused] w-max">
              {[...row1, ...row1, ...row1].map((tech, i) => {
                const Icon = TechIconMap[tech.name] || Code2
                return (
                  <div 
                    key={`${tech.name}-${i}`}
                    className="glass-panel px-8 py-4 rounded-full flex items-center gap-4 hover:bg-white/5 transition-colors cursor-default whitespace-nowrap relative group/tooltip"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-mono-label text-primary">{tech.name}</span>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-surface border border-white/10 p-4 rounded-xl opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity z-20 shadow-2xl scale-95 group-hover/tooltip:scale-100 duration-200">
                      <p className="font-mono-label text-on-surface-variant mb-2">{tech.experience}</p>
                      <p className="font-sans text-sm text-primary whitespace-normal">{tech.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Row 2: Right */}
          <div className="flex relative w-full group">
            <div className="flex gap-8 pr-8 animate-marquee-reverse group-hover:[animation-play-state:paused] w-max">
              {[...row2, ...row2, ...row2].map((tech, i) => {
                const Icon = TechIconMap[tech.name] || Code2
                return (
                  <div 
                    key={`${tech.name}-${i}`}
                    className="glass-panel px-8 py-4 rounded-full flex items-center gap-4 hover:bg-white/5 transition-colors cursor-default whitespace-nowrap relative group/tooltip"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-mono-label text-primary">{tech.name}</span>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-surface border border-white/10 p-4 rounded-xl opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity z-20 shadow-2xl scale-95 group-hover/tooltip:scale-100 duration-200">
                      <p className="font-mono-label text-on-surface-variant mb-2">{tech.experience}</p>
                      <p className="font-sans text-sm text-primary whitespace-normal">{tech.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
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
