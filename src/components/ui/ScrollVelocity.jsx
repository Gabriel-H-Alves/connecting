import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion'

function wrap(min, max, v) {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

function VelocityText({
  children,
  baseVelocity = 100,
  className = '',
  separator = '·',
  gap = 24,
}) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
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
  for (let i = 0; i < 4; i++) {
    spans.push(
      <span
        key={i}
        className={`inline-flex items-center ${className}`}
        style={{ marginRight: `${gap}px` }}
      >
        <span>{children}</span>
        {separator && (
          <span className="opacity-40" style={{ marginLeft: `${gap}px` }}>
            {separator}
          </span>
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
  separator = '·',
  gap = 24,
}) {
  return (
    <div className="w-full overflow-hidden py-4 select-none border-y border-rule bg-paper-2">
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
