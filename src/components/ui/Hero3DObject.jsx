import { useState, useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export function Hero3DObject({
  sceneUrl = 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode',
  onReady,
  className = '',
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const isLoadedRef = useRef(false)
  const onReadyRef = useRef(onReady)
  onReadyRef.current = onReady

  // Safety fallback: if Spline takes longer than 2.5s, signal ready so UI continues smoothly
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isLoadedRef.current) {
        isLoadedRef.current = true
        setIsLoaded(true)
        onReadyRef.current?.()
      }
    }, 2500)

    return () => clearTimeout(timeout)
  }, [])

  const handleSplineLoad = (splineApp) => {
    if (!isLoadedRef.current) {
      isLoadedRef.current = true
      setIsLoaded(true)
      onReadyRef.current?.(splineApp)
    }
  }

  const handleSplineError = () => {
    if (!isLoadedRef.current) {
      isLoadedRef.current = true
      setIsLoaded(true)
      onReadyRef.current?.()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className={`pointer-events-auto absolute z-0 select-none ${className}`}
      style={{
        WebkitMaskImage:
          'radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
        maskImage:
          'radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
      }}
    >
      <Spline
        scene={sceneUrl}
        onLoad={handleSplineLoad}
        onError={handleSplineError}
        className="w-full h-full"
      />
    </motion.div>
  )
}

export default Hero3DObject
