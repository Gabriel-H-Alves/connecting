import { useState, useCallback } from 'react'
import { SplashScreen } from './components/SplashScreen'
import { CustomCursor } from './components/ui/CustomCursor'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { CtaSection } from './components/CtaSection'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { FooterMinimal } from './components/FooterMinimal'

export function App() {
  const [is3DLoaded, setIs3DLoaded] = useState(false)
  const [loadingFinished, setLoadingFinished] = useState(false)

  const handleComplete = useCallback(() => {
    setLoadingFinished(true)
  }, [])

  const handle3DReady = useCallback(() => {
    setIs3DLoaded(true)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#09090B] text-white selection:bg-white selection:text-black">
      {/* 1. Splash Screen Loader - Guarantees smooth entrance, never stuck */}
      {!loadingFinished && (
        <SplashScreen
          is3DLoaded={is3DLoaded}
          onComplete={handleComplete}
        />
      )}

      {/* 2. Custom Interactive Follower Cursor (Desktop) */}
      <CustomCursor />

      {/* 3. Main Landing Page Content (No Navbar - Pure Fluid Scroll - Overflow Safe) */}
      <main className="relative z-10 w-full overflow-x-hidden">
        <Hero
          isReady={loadingFinished}
          on3DReady={handle3DReady}
        />
        <Services />
        <CtaSection />
        <FooterMinimal />
      </main>

      {/* 4. Fixed Animated Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  )
}

export default App
