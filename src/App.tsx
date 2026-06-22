import React, { useState, Suspense } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import { SmoothScroll } from './components/effects/SmoothScroll'
import { CustomCursor } from './components/effects/CustomCursor'
import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/hero/HeroSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

// Lazy loaded components
const AboutSection = React.lazy(() => import('./components/about/AboutSection').then(m => ({ default: m.AboutSection })))
const BioPanelDrawer = React.lazy(() => import('./components/about/BioPanelDrawer').then(m => ({ default: m.BioPanelDrawer })))
const ProcessTimeline = React.lazy(() => import('./components/about/ProcessTimeline').then(m => ({ default: m.ProcessTimeline })))
const ServicesSection = React.lazy(() => import('./components/services/ServicesSection').then(m => ({ default: m.ServicesSection })))
const TechStackMarquee = React.lazy(() => import('./components/services/TechStackMarquee').then(m => ({ default: m.TechStackMarquee })))
const SelectedWorkSection = React.lazy(() => import('./components/work/SelectedWorkSection').then(m => ({ default: m.SelectedWorkSection })))
const ClientFeedback = React.lazy(() => import('./components/work/ClientFeedback').then(m => ({ default: m.ClientFeedback })))
const ContactSection = React.lazy(() => import('./components/contact/ContactSection').then(m => ({ default: m.ContactSection })))
const Footer = React.lazy(() => import('./components/layout/Footer').then(m => ({ default: m.Footer })))
const ProjectDetailPage = React.lazy(() => import('./components/work/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })))

function AppContent() {
  const { t } = useTranslation()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <> 
      <Helmet>
        <title>MEDOCODE</title>
        <meta name="description" content={t('intro.body')} />
      </Helmet>
      <CustomCursor />
      
      <SmoothScroll>
        <div className="min-h-screen bg-background text-on-background selection:bg-surface-variant selection:text-primary font-sans relative flex flex-col w-full" style={{ isolation: 'isolate' }}>

          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <Suspense fallback={<div className="h-[200vh] w-full" />}>
                    <AboutSection onOpenDrawer={() => setIsDrawerOpen(true)} />
                    <ProcessTimeline />
                    <ServicesSection />
                    <TechStackMarquee />
                    <SelectedWorkSection />
                    <ClientFeedback />
                    <ContactSection />
                  </Suspense>
                </>
              } />
              <Route path="/work/:projectId" element={
                <Suspense fallback={<div className="h-screen w-full" />}>
                  <ProjectDetailPage />
                </Suspense>
              } />
            </Routes>
          </main>
          
          <Suspense fallback={<div className="h-32 w-full" />}>
            <Footer />
          </Suspense>
        </div>
      </SmoothScroll>

      <Suspense fallback={null}>
        <BioPanelDrawer 
          isOpen={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)} 
        />
      </Suspense>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
