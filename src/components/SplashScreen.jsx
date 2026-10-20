import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function SplashScreen({ is3DLoaded = false, onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    const duration = is3DLoaded ? 1400 : 2200 // Max 2.2s total, never infinite
    const startTime = performance.now()
    let rafId = 0

    const update = (now) => {
      const elapsed = now - startTime
      const current = Math.min(Math.round((elapsed / duration) * 100), 100)
      setProgress(current)

      if (current < 100) {
        rafId = requestAnimationFrame(update)
      } else {
        setTimeout(() => {
          setIsExiting(true)
          setTimeout(() => {
            onCompleteRef.current?.()
          }, 600)
        }, 200)
      }
    }

    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [is3DLoaded])

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            filter: 'blur(16px)',
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090B] px-6 select-none"
        >
          {/* Subtle geometric background grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

          <div className="relative flex flex-col items-center">
            {/* Minimalist Geometric Ring Loader */}
            <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full border border-white/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-1 rounded-full border-t border-r border-white/80"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
              />
              <span className="font-mono text-xs tracking-wider text-zinc-400">
                {progress}%
              </span>
            </div>

            {/* Brand reveal with tracking letter spacing */}
            <motion.h1
              initial={{ letterSpacing: '0.5em', opacity: 0 }}
              animate={{ letterSpacing: '0.18em', opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Clash_Display'] text-3xl md:text-5xl font-bold uppercase tracking-[0.18em] text-white"
            >
              Connecting
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-3 flex items-center gap-2 font-mono text-[11px] tracking-widest text-zinc-500 uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Digital Performance &bull; Local Authority
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
