import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function TiltCard({
  children,
  className = '',
  maxTilt = 10,
  glare = true,
}) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = ((y - centerY) / centerY) * -maxTilt
    const tiltY = ((x - centerX) / centerX) * maxTilt

    setTilt({ x: tiltX, y: tiltY })
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setGlarePos((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      style={{ perspective: '1200px' }}
      className={`group relative ${className}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          transformStyle: 'preserve-3d',
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
          mass: 0.8,
        }}
        className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 p-7 transition-colors duration-500 hover:border-white/30 backdrop-blur-sm"
      >
        {glare && (
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-500 ease-out"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.18), transparent 70%)`,
            }}
          />
        )}
        <div style={{ transform: 'translateZ(12px)' }}>{children}</div>
      </motion.div>
    </div>
  )
}
