import { useEffect, useRef, useState } from 'react'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

export function TiltedCard({
  children,
  containerHeight = 'auto',
  containerWidth = '100%',
  rotateAmplitude = 14,
  scaleOnHover = 1.02,
  glare = 0.5,
  className = '',
}) {
  const figureRef = useRef(null)
  const bodyRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const figure = figureRef.current
    const body = bodyRef.current
    if (!figure || !body) return

    let rafId = 0
    const target = { x: 0, y: 0, glareX: 50, glareY: 50, glareOpacity: 0 }
    const current = { x: 0, y: 0, glareX: 50, glareY: 50, glareOpacity: 0 }

    const updateLoop = () => {
      // Smooth lerp interpolation for Apple-standard buttery motion
      current.x += (target.x - current.x) * 0.12
      current.y += (target.y - current.y) * 0.12
      current.glareX += (target.glareX - current.glareX) * 0.15
      current.glareY += (target.glareY - current.glareY) * 0.15
      current.glareOpacity += (target.glareOpacity - current.glareOpacity) * 0.15

      const scale = target.glareOpacity > 0 ? scaleOnHover : 1

      body.style.transform = `translate3d(0, 0, 0) rotateX(${current.x.toFixed(2)}deg) rotateY(${current.y.toFixed(2)}deg) scale(${scale})`
      body.style.setProperty('--glare-x', `${current.glareX.toFixed(1)}%`)
      body.style.setProperty('--glare-y', `${current.glareY.toFixed(1)}%`)
      body.style.setProperty('--glare-op', `${(current.glareOpacity * glare).toFixed(3)}`)

      rafId = requestAnimationFrame(updateLoop)
    }

    rafId = requestAnimationFrame(updateLoop)

    const handlePointerMove = (e) => {
      const rect = figure.getBoundingClientRect()
      const nx = clamp((e.clientX - rect.left) / rect.width, 0, 1)
      const ny = clamp((e.clientY - rect.top) / rect.height, 0, 1)

      target.x = (ny - 0.5) * -rotateAmplitude * 2
      target.y = (nx - 0.5) * rotateAmplitude * 2
      target.glareX = nx * 100
      target.glareY = ny * 100
      target.glareOpacity = 1
    }

    const handlePointerEnter = () => {
      setIsHovered(true)
      target.glareOpacity = 1
    }

    const handlePointerLeave = () => {
      setIsHovered(false)
      target.x = 0
      target.y = 0
      target.glareOpacity = 0
    }

    figure.addEventListener('pointermove', handlePointerMove)
    figure.addEventListener('pointerenter', handlePointerEnter)
    figure.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      cancelAnimationFrame(rafId)
      figure.removeEventListener('pointermove', handlePointerMove)
      figure.removeEventListener('pointerenter', handlePointerEnter)
      figure.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [glare, rotateAmplitude, scaleOnHover])

  return (
    <figure
      ref={figureRef}
      style={{
        perspective: '1000px',
        width: containerWidth,
        height: containerHeight,
      }}
      className={`relative m-0 select-none outline-none ${className}`}
    >
      <div
        ref={bodyRef}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'box-shadow 0.5s ease',
        }}
        className={`relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 p-6 md:p-8 backdrop-blur-md will-change-transform ${
          isHovered ? 'border-white/30 shadow-2xl shadow-black/80' : ''
        }`}
      >
        {/* Dynamic Specular Glare (React Bits spec) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            opacity: 'var(--glare-op, 0)',
            background:
              'radial-gradient(circle 320px at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255, 255, 255, 0.22), transparent 70%)',
          }}
        />

        {/* Inner Content layer with 3D depth */}
        <div style={{ transform: 'translateZ(14px)' }} className="relative z-0">
          {children}
        </div>
      </div>
    </figure>
  )
}

export default TiltedCard
