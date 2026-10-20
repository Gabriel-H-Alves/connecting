import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.18, 1])
  const blur = useTransform(progress, range, [4, 0])

  return (
    <span className="relative inline-block mr-[0.3em] last:mr-0">
      <span className="absolute inset-0 opacity-15 text-zinc-600 select-none">
        {children}
      </span>
      <motion.span
        style={{
          opacity,
          filter: useTransform(blur, (v) => `blur(${v}px)`),
        }}
        className="text-white will-change-[opacity,filter]"
      >
        {children}
      </motion.span>
    </span>
  )
}

export function AppleScrollRevealText({
  text = '',
  className = '',
}) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'start 0.3'],
  })

  const words = text.split(' ')

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap leading-relaxed select-none ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}

export default AppleScrollRevealText
