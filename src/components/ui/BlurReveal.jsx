import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

export function BlurReveal({
  children,
  className = '',
  delay = 0,
  speedReveal = 1.1,
  speedSegment = 0.65,
  trigger = true,
  onAnimationComplete,
  onAnimationStart,
  as: Component = 'p',
  style = {},
  inView = true,
}) {
  const ref = useRef(null)
  const isReduced = useReducedMotion()
  const isElementInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const shouldAnimate = inView ? isElementInView && trigger : trigger

  // Check if children is a string to split by words
  const isString = typeof children === 'string'
  const words = isString ? children.split(' ') : [children]

  const containerVariants = {
    hidden: { opacity: isReduced ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: isReduced
        ? { duration: 0 }
        : {
            staggerChildren: Math.max(0.025, speedReveal / (words.length * 2.2)),
            delayChildren: delay,
          },
    },
  }

  const segmentVariants = {
    hidden: isReduced
      ? { opacity: 1, filter: 'blur(0px)', y: 0 }
      : {
          opacity: 0,
          filter: 'blur(10px)',
          y: 14,
        },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: isReduced
        ? { duration: 0 }
        : {
            duration: speedSegment,
            ease: [0.16, 1, 0.3, 1],
          },
    },
  }

  const MotionComponent = motion[Component] || motion.p

  return (
    <MotionComponent
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={shouldAnimate ? 'visible' : 'hidden'}
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
      className={`block break-words ${className}`}
      style={style}
    >
      {isString
        ? words.map((word, idx) => (
            <motion.span
              key={idx}
              variants={segmentVariants}
              className="inline-block mr-[0.28em] last:mr-0 will-change-[filter,opacity,transform]"
            >
              {word}
            </motion.span>
          ))
        : (
            <motion.span variants={segmentVariants} className="inline-block">
              {children}
            </motion.span>
          )}
    </MotionComponent>
  )
}

export default BlurReveal
