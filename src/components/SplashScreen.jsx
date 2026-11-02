import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const onCompleteRef = useRef(onComplete)
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    // If reduced motion is preferred, complete immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onCompleteRef.current?.()
      return
    }

    const duration = 800
    const startTime = performance.now()
    let rafId = 0
    let timeoutExitId = 0
    let timeoutCompleteId = 0

    const update = (now) => {
      const elapsed = now - startTime
      const current = Math.min(Math.round((elapsed / duration) * 100), 100)
      setProgress(current)

      if (current < 100) {
        rafId = requestAnimationFrame(update)
      } else {
        timeoutExitId = setTimeout(() => {
          setIsExiting(true)
          timeoutCompleteId = setTimeout(() => {
            onCompleteRef.current?.()
          }, 300)
        }, 120)
      }
    }

    rafId = requestAnimationFrame(update)
    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(timeoutExitId)
      clearTimeout(timeoutCompleteId)
    }
  }, [])

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper px-6 select-none"
        >
          {/* Studio dot grid background */}
          <div className="absolute inset-0 proof opacity-40 pointer-events-none" />

          <div className="relative flex flex-col items-center crop p-8 bg-paper border border-rule">
            {/* Minimalist Studio Metric Ring Loader */}
            <div className="relative mb-6 flex h-16 w-16 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-rule" />
              <div className="absolute inset-0 rounded-full border-t-2 border-accent animate-spin" />
              <span className="font-body text-xs font-medium text-ink num">
                {progress}%
              </span>
            </div>

            {/* Brand in Studio theme typography */}
            <h1 className="font-display text-4xl font-normal text-ink">
              Connecting
            </h1>

            <div className="mt-2 flex items-center gap-2 text-xs text-muted">
              <span>Presença digital e autoridade local</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
