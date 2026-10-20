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
          className="group relative cursor-pointer py-4 px-6 select-none transition-all duration-300"
        >
          {/* TrueFocus Brackets (Animated Corners on focus) */}
          <div className="pointer-events-none absolute inset-0">
            {/* Top-Left */}
            <span
              className={`absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-white transition-all duration-300 ${
                isFocused ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            />
            {/* Top-Right */}
            <span
              className={`absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-white transition-all duration-300 ${
                isFocused ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            />
            {/* Bottom-Left */}
            <span
              className={`absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-white transition-all duration-300 ${
                isFocused ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            />
            {/* Bottom-Right */}
            <span
              className={`absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-white transition-all duration-300 ${
                isFocused ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            />
          </div>

          {/* Mysterious Metadata header */}
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest text-zinc-500 uppercase transition-colors duration-300 group-hover:text-zinc-300">
            <span>[{code}]</span>
            <span className="h-px w-6 bg-zinc-800 group-hover:bg-zinc-400 transition-colors" />
            <span>{tag}</span>
          </div>

          {/* Title with React Bits Blur/TrueFocus Effect */}
          <motion.h3
            animate={{
              filter: isFocused ? 'blur(0px)' : 'blur(5px)',
              opacity: isFocused ? 1 : 0.32,
              y: isFocused ? 0 : 2,
            }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="mt-2 font-['Clash_Display'] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white transition-all"
          >
            {title}
          </motion.h3>

          {/* Revealed Sub-description on focus */}
          <motion.p
            initial={false}
            animate={{
              opacity: isFocused ? 0.9 : 0,
              height: isFocused ? 'auto' : 0,
              marginTop: isFocused ? 8 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden max-w-sm text-xs font-mono text-zinc-400 leading-relaxed font-light"
          >
            {description}
          </motion.p>
        </div>
      </Magnet>
    </div>
  )
}
