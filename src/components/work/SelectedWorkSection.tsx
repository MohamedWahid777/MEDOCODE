import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { projects } from '../../lib/constants'

export function SelectedWorkSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  const CardContent = ({ project, isEven }: { project: typeof projects[0], isEven: boolean }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px]">
      {/* Content Side */}
      <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
        <p className="font-mono-label text-on-surface-variant uppercase mb-3 tracking-widest text-xs">
          {project.category}
        </p>
        <h3 className="font-display text-[32px] md:text-[38px] leading-[1.1] text-primary mb-4">
          {project.title}
        </h3>
        <p className="font-sans text-[14px] md:text-[15px] text-on-surface-variant mb-8 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono-label text-[10px] text-primary uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-row items-center justify-between gap-4 mt-auto pt-4 border-t border-white/5 md:border-transparent md:pt-0">
          <button className="text-primary border-b border-primary pb-1 font-mono-label text-sm hover:opacity-70 transition-opacity tracking-widest flex items-center gap-2 group">
            {t('work.viewCase')}
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform rtl:rotate-180" />
          </button>

          <div className="flex gap-3">
            <a href={project.liveUrl} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-white/5 transition-all group shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform" />
            </a>
            <a href={project.githubUrl} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-white/5 transition-all group shrink-0">
              <svg className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a11.9 11.9 0 0 0-6 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.8 4.8 0 0 0-.1 3.5 5.1 5.1 0 0 0-1.4 3.5c0 5.6 3.3 6.8 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"/><path d="M9 20c-4 1-5-2-7-2"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Visual Side */}
      <div className="h-[200px] md:h-auto relative overflow-hidden bg-surface-container-highest order-1 md:order-2 group">
        {project.imageUrl ? (
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full absolute inset-0 overflow-hidden cursor-pointer"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ) : (
          <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-br' : 'bg-gradient-to-bl'} from-surface-container-highest to-surface-container flex items-center justify-center`}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-3/4 h-3/4 bg-surface rounded-xl border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-primary)_100%)]" />
              <div className="w-full h-full opacity-20 border-[0.5px] border-primary/20 grid grid-cols-4 grid-rows-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-primary/20" />
                ))}
              </div>
              <span className="font-display text-3xl text-primary/30 absolute">{project.title.charAt(0)}</span>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <section
      id="work"
      ref={sectionRef}
      className="w-full py-32 relative"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Sticky header */}
        <div className="sticky top-24 mb-12 z-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-headline-lg text-primary"
          >
            {t('work.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-body-md text-on-surface-variant max-w-md mt-3"
          >
            {t('work.subtitle')}
          </motion.p>
        </div>

        {/* Stacked sticky cards — unified for all screen sizes */}
        <div className="relative pt-6 pb-24">
          {projects.map((project, index) => {
            const zIndex = (index + 1) * 10
            const isEven = index % 2 === 0
            const topOffset = 110 + index * 6
            return (
              <div
                key={project.id}
                className="sticky glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface hover-effect mb-5"
                style={{ zIndex, top: `${topOffset}px` }}
              >
                <CardContent project={project} isEven={isEven} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}