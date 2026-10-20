import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp({
  phoneNumber = '5511999999999',
  defaultMessage = 'Olá! Gostaria de entender como a Connecting pode posicionar meu negócio local no topo.',
}) {
  const [isHovered, setIsHovered] = useState(false)

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex items-center gap-3">
      {/* Tooltip on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center rounded-lg border border-white/20 bg-zinc-950 px-3.5 py-1.5 shadow-2xl backdrop-blur-md"
          >
            <span className="font-mono text-xs text-white tracking-wide">
              Falar com um Especialista
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button with animated radar ring */}
      <div className="relative flex items-center justify-center">
        {/* Radar wave pulse 1 */}
        <span className="absolute -inset-2.5 rounded-full bg-white/15 animate-ping pointer-events-none duration-1000" />
        
        {/* Radar wave pulse 2 */}
        <span className="absolute -inset-1 rounded-full border border-white/30 animate-pulse pointer-events-none" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp com a Connecting"
          data-cursor-interactive
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-zinc-200 active:scale-95"
        >
          <MessageCircle className="h-6 w-6 stroke-[2.2] fill-black" />
        </a>
      </div>
    </div>
  )
}
