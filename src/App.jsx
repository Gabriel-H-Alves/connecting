import { useState, useCallback } from 'react'
import { SplashScreen } from './components/SplashScreen'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { CtaSection } from './components/CtaSection'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { FooterMinimal } from './components/FooterMinimal'

export function App() {
  const [loadingFinished, setLoadingFinished] = useState(false)

  const handleComplete = useCallback(() => {
    setLoadingFinished(true)
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-paper text-ink selection:bg-accent/20 selection:text-ink">
      {/* 1. Splash Screen Loader */}
      {!loadingFinished && (
        <SplashScreen onComplete={handleComplete} />
      )}

      {/* 2. Main Editorial Content */}
      <main className="relative z-10 w-full">
        <Hero />
        <Services />
        <CtaSection />
        <FooterMinimal />
      </main>

      {/* 3. Floating WhatsApp Conversion Trigger */}
      <FloatingWhatsApp />
    </div>
  )
}

export default App
