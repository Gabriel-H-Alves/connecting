import { motion, useReducedMotion } from 'framer-motion'

const APPLE_EASE = [0.16, 1, 0.3, 1]

export function RevealItem({
  children,
  className = '',
  delay = 0,
  y = 36,
  duration = 1.1,
  scale = 0.985,
  trigger,
  viewportMargin = '-10% 0px',
}) {
  const isReduced = useReducedMotion()

  const variants = {
    hidden: isReduced
      ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }
      : { opacity: 0, y, filter: 'blur(12px)', scale },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: isReduced ? 0 : duration,
        ease: APPLE_EASE,
        delay: isReduced ? 0 : delay,
      },
    },
  }

  // If a manual trigger is supplied (e.g. Hero on page load), animate with state.
  // Otherwise, trigger on scroll when in viewport.
  if (trigger !== undefined) {
    return (
      <motion.div
        initial="hidden"
        animate={trigger ? 'visible' : 'hidden'}
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealStagger({
  children,
  className = '',
  stagger = 0.12,
  delay = 0,
  trigger,
  viewportMargin = '-10% 0px',
}) {
  const isReduced = useReducedMotion()

  const variants = {
    hidden: { opacity: isReduced ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: isReduced
        ? { duration: 0 }
        : {
            staggerChildren: stagger,
            delayChildren: delay,
          },
    },
  }

  if (trigger !== undefined) {
    return (
      <motion.div
        initial="hidden"
        animate={trigger ? 'visible' : 'hidden'}
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealChild({
  children,
  className = '',
  y = 30,
  duration = 1.05,
  scale = 0.985,
}) {
  const isReduced = useReducedMotion()

  const childVariants = {
    hidden: isReduced
      ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }
      : { opacity: 0, y, filter: 'blur(10px)', scale },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: isReduced ? 0 : duration,
        ease: APPLE_EASE,
      },
    },
  }

  return (
    <motion.div variants={childVariants} className={className}>
      {children}
    </motion.div>
  )
}

export default RevealItem
