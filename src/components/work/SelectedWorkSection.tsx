import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { projects } from '../../lib/constants'

export function SelectedWorkSection() {
  const { t, i18n } = useTranslation()
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
        <p className="font-sans text-[14px] md:text-[15px] text-[var(--color-card-text)] mb-3 md:mb-8 leading-relaxed line-clamp-2 md:line-clamp-3">
          {i18n.language === 'ar' && project.descriptionAr ? project.descriptionAr : project.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-auto pt-6 border-t border-white/5 md:border-t-0 md:pt-4">
          <Link 
            to={`/work/${project.id}`}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary hover:text-background text-primary font-mono-label text-sm tracking-widest flex justify-center items-center gap-2 group transition-all duration-300 shadow-sm"
            aria-label={`Read more about ${project.title}`}
          >
            {t('work.readMore')}
            <span className="sr-only"> about {project.title}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:rotate-180" />
          </Link>

          <div className="flex justify-between w-full sm:w-[140px] md:w-[160px]" dir="ltr">
            <a href={project.liveUrl} aria-label={`View live demo of ${project.title}`} className="w-12 h-12 md:w-11 md:h-11 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:text-background hover:border-primary hover:bg-primary transition-all duration-300 group shrink-0 shadow-sm hover:shadow-md">
              <span className="sr-only">View live demo of {project.title}</span>
              <ArrowUpRight className="w-5 h-5 md:w-[18px] md:h-[18px] transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform" strokeWidth={2.5} />
            </a>
            <a href={project.githubUrl} aria-label={`View GitHub repo for ${project.title}`} className="w-12 h-12 md:w-11 md:h-11 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:text-background hover:border-primary hover:bg-primary transition-all duration-300 group shrink-0 shadow-sm hover:shadow-md">
              <span className="sr-only">View GitHub repo for {project.title}</span>
              <svg className="w-5 h-5 md:w-[18px] md:h-[18px] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a11.9 11.9 0 0 0-6 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.8 4.8 0 0 0-.1 3.5 5.1 5.1 0 0 0-1.4 3.5c0 5.6 3.3 6.8 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"/><path d="M9 20c-4 1-5-2-7-2"/></svg>
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
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-badge-text)_100%)]" />
              <div className="w-full h-full opacity-20 border-[0.5px] border-primary/20 grid grid-cols-4 grid-rows-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-primary/20" />
                ))}
              </div>
              <span className="font-display text-3xl text-[var(--color-badge-text)] absolute">{project.title.charAt(0)}</span>
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
                className="sticky rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface backdrop-blur-sm hover-effect mb-5"
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