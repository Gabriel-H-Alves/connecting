import { motion } from 'framer-motion'

export function SplitText({
  text = '',
  className = '',
  delay = 0,
  stagger = 0.04,
  by = 'words', // 'words' | 'chars'
}) {
  const items = by === 'words' ? text.split(' ') : text.split('')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.span
          key={`${item}-${index}`}
          variants={childVariants}
          className="inline-block"
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  )
}
