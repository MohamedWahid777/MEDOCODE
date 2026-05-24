import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { projects } from '../../lib/constants'

export function SelectedWorkSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative min-h-[200vh]"
    >
      <div className="sticky top-24 mb-16 z-0">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-headline-lg text-primary"
        >
          {t('work.title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-body-md text-on-surface-variant max-w-md mt-4"
        >
          {t('work.subtitle')}
        </motion.p>
      </div>

      <div className="space-y-[10vh] md:space-y-[100vh] relative pt-10 pb-32">
        {projects.map((project, index) => {
          // Z-index increases for each card to stack on top
          const zIndex = (index + 1) * 10
          // Use hardcoded random colors/gradients for the project placeholder visual
          const isEven = index % 2 === 0
          
          return (
            <div 
              key={project.id}
              className="md:sticky md:top-[120px] glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface hover-effect"
              style={{ zIndex }}
            >
              <div className="grid md:grid-cols-2 min-h-[600px]">
                {/* Content Side */}
                <div className="p-10 md:p-16 flex flex-col justify-center order-2 md:order-1">
                  <p className="font-mono-label text-on-surface-variant uppercase mb-4 tracking-widest">
                    {project.category}
                  </p>
                  <h3 className="font-display text-[48px] md:text-[56px] leading-[1.1] text-primary mb-6">
                    {project.title}
                  </h3>
                  <p className="font-sans text-body-lg text-on-surface-variant mb-12">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-12">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 font-mono-label text-xs text-primary uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 mt-auto">
                    <button className="self-start text-primary border-b border-primary pb-1 font-mono-label hover:opacity-70 transition-opacity tracking-widest flex items-center gap-2 group">
                      {t('work.viewCase')}
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                    </button>
                    
                    <div className="flex gap-4 sm:ml-auto">
                      <a href={project.liveUrl} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-white/5 transition-all group">
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform" />
                      </a>
                      <a href={project.githubUrl} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-white/5 transition-all group">
                        <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a11.9 11.9 0 0 0-6 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.8 4.8 0 0 0-.1 3.5 5.1 5.1 0 0 0-1.4 3.5c0 5.6 3.3 6.8 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"/><path d="M9 20c-4 1-5-2-7-2"/></svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="h-[300px] md:h-auto relative overflow-hidden bg-surface-container-highest order-1 md:order-2 group">
                  <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'br' : 'bl'} from-surface-container-highest to-surface-container flex items-center justify-center`}>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-3/4 h-3/4 bg-surface rounded-xl border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden relative"
                    >
                      {/* Wireframe placeholder effect */}
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-primary)_100%)]" />
                      <div className="w-full h-full opacity-20 border-[0.5px] border-primary/20 grid grid-cols-4 grid-rows-4">
                         {Array.from({ length: 16 }).map((_, i) => <div key={i} className="border-[0.5px] border-primary/20" />)}
                      </div>
                      <span className="font-display text-4xl text-primary/30 absolute">{project.title.charAt(0)}</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
