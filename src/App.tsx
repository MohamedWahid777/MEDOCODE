import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import { SmoothScroll } from './components/effects/SmoothScroll'
import { CustomCursor } from './components/effects/CustomCursor'
import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/hero/HeroSection'
import { AboutSection } from './components/about/AboutSection'
import { BioPanelDrawer } from './components/about/BioPanelDrawer'
import { ProcessTimeline } from './components/about/ProcessTimeline'
import { ServicesSection } from './components/services/ServicesSection'
import { TechStackMarquee } from './components/services/TechStackMarquee'
import { SelectedWorkSection } from './components/work/SelectedWorkSection'
import { ClientFeedback } from './components/work/ClientFeedback'
import { ContactSection } from './components/contact/ContactSection'
import { Footer } from './components/layout/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProjectDetailPage } from './components/work/ProjectDetailPage'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

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
                  <AboutSection onOpenDrawer={() => setIsDrawerOpen(true)} />
                  <ProcessTimeline />
                  <ServicesSection />
                  <TechStackMarquee />
                  <SelectedWorkSection />
                  <ClientFeedback />
                  <ContactSection />
                </>
              } />
              <Route path="/work/:projectId" element={<ProjectDetailPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </SmoothScroll>

      <BioPanelDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
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
