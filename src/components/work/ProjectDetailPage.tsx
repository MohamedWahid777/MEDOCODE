import { useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects } from '../../lib/constants'

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const { t, i18n } = useTranslation()
  
  // Find the project based on the URL parameter
  const project = projects.find(p => p.id === projectId)
  const navigate = useNavigate()

  // Scroll to top when the page loads
  useEffect(() => {
    // Standard scroll
    window.scrollTo(0, 0)
    
    // Lenis scroll reset if it exists
    if (typeof window !== 'undefined' && (window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true })
    }
  }, [projectId])

  // If project not found, redirect to home or show error
  if (!project) {
    return <Navigate to="/#work" replace />
  }

  const description = i18n.language === 'ar' && project.descriptionAr 
    ? project.descriptionAr 
    : project.description

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-surface-variant selection:text-primary font-sans relative flex flex-col w-full pt-32 pb-24" style={{ isolation: 'isolate' }}>
      <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop flex-1 flex flex-col">
        
        {/* Back Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-mono-label text-sm tracking-widest transition-colors mb-12 w-fit group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
          {t('work.backToWork')}
        </button>

        {/* Project Content */}
        <div className="flex flex-col gap-8 w-full max-w-3xl mx-auto">
          
          {/* Visual Side */}
          <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] relative overflow-hidden bg-surface-container-highest rounded-2xl border border-white/10 shadow-2xl">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-surface-container-highest to-surface-container flex items-center justify-center">
                <span className="font-display text-5xl text-[var(--color-badge-text)] opacity-50">{project.title.charAt(0)}</span>
              </div>
            )}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <p className="font-mono-label text-primary/70 uppercase mb-4 tracking-widest text-xs md:text-sm">
              {project.category}
            </p>
            <h1 className="font-display text-[36px] sm:text-[42px] md:text-[54px] leading-[1.1] text-primary mb-8">
              {project.title}
            </h1>
            
            <p className="font-sans text-[15px] sm:text-[16px] md:text-[18px] text-[var(--color-card-text)] leading-relaxed mb-12">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="mb-12">
              <h3 className="font-mono-label text-on-surface-variant uppercase tracking-widest text-xs mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 font-mono-label text-[10px] sm:text-[11px] text-primary uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions / Footer Links */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6 pt-8 border-t border-white/10">
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-button px-8 py-4 rounded-full font-mono-label text-sm tracking-widest flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                {t('work.liveDemo')}
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-button px-8 py-4 rounded-full font-mono-label text-sm tracking-widest flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                {t('work.github')}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a11.9 11.9 0 0 0-6 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.8 4.8 0 0 0-.1 3.5 5.1 5.1 0 0 0-1.4 3.5c0 5.6 3.3 6.8 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"/><path d="M9 20c-4 1-5-2-7-2"/></svg>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
