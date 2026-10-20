import { useLayoutEffect, useRef, useState } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'

function wrap(min, max, v) {
  const range = max - min
  const mod = (((v - min) % range) + range) % range
  return mod + min
}

function useElementWidth(ref) {
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    if (typeof ResizeObserver === 'undefined') {
      const updateWidth = () => setWidth(element.offsetWidth)
      updateWidth()
      window.addEventListener('resize', updateWidth)
      return () => window.removeEventListener('resize', updateWidth)
    }

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.borderBoxSize?.[0]?.inlineSize ?? entry.contentRect.width)
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref])

  return width
}

function VelocityText({
  children,
  baseVelocity = 100,
  damping = 50,
  stiffness = 400,
  numCopies = 4,
  className = '',
  separator = '',
  gap = 24,
}) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })
  const reduceMotion = useReducedMotion()

  const copyRef = useRef(null)
  const copyWidth = useElementWidth(copyRef)

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return '0px'
    return `${wrap(-copyWidth, 0, v)}px`
  })

  const directionFactor = useRef(1)

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  const spans = []
  for (let i = 0; i < numCopies; i++) {
    spans.push(
      <span
        className={`flex-shrink-0 inline-flex items-center ${className}`}
        key={i}
        ref={i === 0 ? copyRef : null}
        aria-hidden={i > 0 ? true : undefined}
        style={{ paddingRight: `${gap}px` }}
      >
        {children}
        {separator && (
          <span className="mx-4 text-zinc-600 font-mono text-sm">{separator}</span>
        )}
      </span>
    )
  }

  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <motion.div style={{ x }} className="flex whitespace-nowrap will-change-transform">
        {spans}
      </motion.div>
    </div>
  )
}

export function ScrollVelocity({
  texts = [],
  velocity = 60,
  className = '',
  separator = '•',
  gap = 24,
}) {
  return (
    <div className="w-full overflow-hidden py-4 select-none border-y border-white/10 bg-[#09090B]">
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          separator={separator}
          gap={gap}
        >
          {text}
        </VelocityText>
      ))}
    </div>
  )
}

export default ScrollVelocity
