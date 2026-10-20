import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ParallaxWatermark({
  text = 'DOMINANCE // AUTHORITY',
  direction = 'left',
  speed = 120,
  className = '',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? [speed, -speed] : [-speed, speed]
  )

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute w-full overflow-hidden select-none z-0 ${className}`}
    >
      <motion.div
        style={{ x: xTransform }}
        className="whitespace-nowrap font-['Clash_Display'] text-[14vw] font-black uppercase tracking-tighter text-white/[0.03] will-change-transform leading-none"
      >
        {text}
      </motion.div>
    </div>
  )
}
