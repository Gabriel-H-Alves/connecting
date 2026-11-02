import { useState } from 'react'
import { motion } from 'framer-motion'
import { Magnet } from './Magnet'

export function InteractivePillar({
  code = '01',
  title = '',
  tag = '',
  description = '',
  className = '',
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`relative ${className}`}>
      <Magnet strength={0.4} active={true}>
        <div
          onMouseEnter={() => setIsFocused(true)}
          onMouseLeave={() => setIsFocused(false)}
          data-cursor-interactive
          className="group relative cursor-pointer py-4 px-6 select-none transition-colors duration-300"
        >
          {/* Studio Focus Brackets */}
          <div className="pointer-events-none absolute inset-0">
            <span
              className={`absolute top-0 left-0 h-3 w-3 border-t border-l border-accent transition-opacity duration-300 ${
                isFocused ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            />
            <span
              className={`absolute top-0 right-0 h-3 w-3 border-t border-r border-accent transition-opacity duration-300 ${
                isFocused ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-3 w-3 border-b border-l border-accent transition-opacity duration-300 ${
                isFocused ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            />
            <span
              className={`absolute bottom-0 right-0 h-3 w-3 border-b border-r border-accent transition-opacity duration-300 ${
                isFocused ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            />
          </div>

          {/* Metadata header */}
          <div className="flex items-center gap-3 text-xs text-muted transition-colors duration-300 group-hover:text-ink">
            <span className="num">[{code}]</span>
            <span className="h-px w-6 bg-rule group-hover:bg-accent transition-colors duration-200" />
            <span>{tag}</span>
          </div>

          {/* Title */}
          <motion.h3
            animate={{
              opacity: isFocused ? 1 : 0.8,
              y: isFocused ? 0 : 2,
            }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="mt-2 font-display text-2xl sm:text-3xl font-normal text-ink"
          >
            {title}
          </motion.h3>

          {/* Revealed Sub-description on focus */}
          <motion.p
            initial={false}
            animate={{
              opacity: isFocused ? 1 : 0,
              height: isFocused ? 'auto' : 0,
              marginTop: isFocused ? 8 : 0,
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden max-w-sm text-xs text-ink-2 leading-relaxed font-normal"
          >
            {description}
          </motion.p>
        </div>
      </Magnet>
    </div>
  )
}

export default InteractivePillar
