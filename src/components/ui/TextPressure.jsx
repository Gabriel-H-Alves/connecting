import { useRef, useState, useLayoutEffect, useEffect } from 'react'
import { motion } from 'framer-motion'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const dist = (a, b) => {
  const dx = b.x - a.x
  const dy = b.y - a.y
  return Math.sqrt(dx * dx + dy * dy)
}

const clamp01 = (value) => Math.min(1, Math.max(0, value))

export function TextPressure({
  text = 'CONNECTING',
  fontFamily = "'Clash Display', -apple-system, sans-serif",
  textColor = '#FFFFFF',
  className = '',
  minFontSize = 40,
  radius = 0.35,
}) {
  const containerRef = useRef(null)
  const spansRef = useRef([])
  const [fontSize, setFontSize] = useState(minFontSize)
  const chars = Array.from(text)
  const charCount = chars.length
  const [pressures, setPressures] = useState(() => Array(charCount).fill(0))

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const resize = () => {
      const { width } = container.getBoundingClientRect()
      const calculated = Math.max(width / (chars.length * 0.64), minFontSize)
      setFontSize(calculated)
    }

    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(container)
    return () => observer.disconnect()
  }, [chars.length, minFontSize])

  useEffect(() => {
    let rafId = 0

    const updatePhysics = (clientX, clientY) => {
      const activeChars = Array.from(text)
      const newPressures = activeChars.map((_, i) => {
        const el = spansRef.current[i]
        if (!el) return 0
        const rect = el.getBoundingClientRect()
        const center = {
          x: rect.x + rect.width / 2,
          y: rect.y + rect.height / 2,
        }
        const maxDist = Math.max(rect.width * 5 * radius, 140)
        return clamp01(1 - dist({ x: clientX, y: clientY }, center) / maxDist)
      })

      setPressures(newPressures)
    }

    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => updatePhysics(e.clientX, e.clientY))
    }

    const handleTouch = (e) => {
      if (e.touches[0]) {
        cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(() =>
          updatePhysics(e.touches[0].clientX, e.touches[0].clientY)
        )
      }
    }

    const handleMouseLeave = () => {
      cancelAnimationFrame(rafId)
      setPressures(Array(text.length).fill(0))
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouch, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouch)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [text, radius])

  return (
    <div
      ref={containerRef}
      style={{ perspective: '1200px' }}
      className={`relative w-full flex items-center justify-center overflow-hidden py-3 select-none ${className}`}
    >
      <h1
        aria-label={text}
        className="m-0 flex w-full justify-between items-center text-center uppercase tracking-tight"
        style={{
          fontFamily,
          fontSize: `${fontSize}px`,
          lineHeight: 0.92,
          color: textColor,
        }}
      >
        {chars.map((char, i) => {
          const pressure = pressures[i] || 0

          return (
            <motion.span
              key={i}
              ref={(el) => {
                spansRef.current[i] = el
              }}
              data-char={char}
              initial={{
                y: 80,
                opacity: 0,
                rotateX: 45,
                filter: 'blur(12px)',
              }}
              animate={{
                y: pressure > 0 ? -pressure * 16 : 0,
                scale: 1 + pressure * 0.14,
                scaleY: 1 + pressure * 0.22,
                opacity: 1,
                rotateX: 0,
                filter: 'blur(0px)',
              }}
              transition={{
                type: 'spring',
                stiffness: 50,
                damping: 20,
                mass: 1,
                delay: i * 0.045,
              }}
              style={{
                display: 'inline-block',
                fontWeight: pressure > 0 ? Math.floor(500 + 400 * pressure) : 600,
                textShadow: pressure > 0
                  ? `0 0 ${pressure * 24}px rgba(255, 255, 255, ${pressure * 0.5})`
                  : 'none',
              }}
              className="will-change-transform cursor-default"
            >
              {char}
            </motion.span>
          )
        })}
      </h1>
    </div>
  )
}
