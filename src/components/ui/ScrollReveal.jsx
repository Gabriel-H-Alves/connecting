import { motion } from 'framer-motion'

const APPLE_EASE = [0.16, 1, 0.3, 1]

export function RevealItem({
  children,
  className = '',
  delay = 0,
  y = 35,
  duration = 1.2,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        ease: APPLE_EASE,
        delay,
      }}
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
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealChild({ children, className = '', y = 30 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y, filter: 'blur(8px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: 1.2,
            ease: APPLE_EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
