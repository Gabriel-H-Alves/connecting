import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl, SITE_CONFIG } from '../config/site'

export function FloatingWhatsApp({
  phoneNumber,
  defaultMessage = SITE_CONFIG.contact.defaultMessages.floating,
}) {
  const [isHovered, setIsHovered] = useState(false)
  const whatsappUrl = buildWhatsAppUrl(phoneNumber, defaultMessage)

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90] flex items-center gap-3 pointer-events-auto select-none">
      {/* Tooltip on hover or focus */}
      {isHovered && (
        <div
          role="tooltip"
          id="whatsapp-tooltip"
          className="hidden sm:flex items-center rounded-sm border border-rule bg-paper-hi px-3 py-1.5 shadow-sheet pointer-events-none"
        >
          <span className="text-xs text-ink font-medium">
            Análise gratuita no WhatsApp
          </span>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Connecting"
        aria-describedby={isHovered ? 'whatsapp-tooltip' : undefined}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-sm bg-accent text-accent-ink border border-ink/20 shadow-sheet transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-focus cursor-pointer select-none"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.2] pointer-events-none" />
      </a>
    </div>
  )
}

export default FloatingWhatsApp
