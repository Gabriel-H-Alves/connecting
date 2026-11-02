import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { BlurReveal } from './ui/BlurReveal'

export function CtaSection({
  whatsappNumber = '5511999999999',
  defaultMessage = 'Olá! Quero transformar a presença digital e o faturamento do meu negócio com a Connecting.',
}) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <section id="contato" className="relative w-full border-b border-rule bg-paper-2 proof py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <div className="crop bg-paper border border-rule p-8 sm:p-12 md:p-16 max-w-4xl mx-auto shadow-sheet">
          {/* Headline */}
          <BlurReveal
            as="h2"
            inView={true}
            delay={0.1}
            speedReveal={1.1}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-ink leading-tight tracking-[-0.022em] mb-6"
          >
            Pronto para dominar a sua região?
          </BlurReveal>

          {/* Narrative */}
          <BlurReveal
            as="p"
            inView={true}
            delay={0.25}
            speedReveal={1.3}
            className="font-body text-base sm:text-lg text-ink-2 leading-relaxed mb-8 max-w-2xl font-normal"
          >
            Enquanto você lê esta frase, centenas de potenciais clientes na sua cidade estão escolhendo o seu concorrente simplesmente porque ele aparece primeiro no Google Maps com fotos profissionais e um site impecável. Vamos mudar essa realidade hoje.
          </BlurReveal>

          {/* Action button */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-accent-ink px-8 py-4 text-base font-medium rounded-sm border border-ink/20 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-focus cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Falar com um estrategista</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <span className="text-xs text-muted">
              Resposta em minutos no horário comercial
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
