import { ArrowUpRight, MessageCircle, ShieldCheck, Clock, Zap } from 'lucide-react'
import { BlurReveal } from './ui/BlurReveal'
import { RevealItem } from './ui/ScrollReveal'
import { SITE_CONFIG, buildWhatsAppUrl } from '../config/site'

export function CtaSection({
  whatsappNumber,
  defaultMessage,
}) {
  const number = whatsappNumber || SITE_CONFIG.contact.whatsAppNumber
  const message = defaultMessage || SITE_CONFIG.contact.defaultMessages.cta
  const whatsappUrl = buildWhatsAppUrl(number, message)

  return (
    <section id="contato" className="relative w-full border-b border-rule bg-paper-2 proof py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <RevealItem y={38} duration={1.1} scale={0.98} className="max-w-4xl mx-auto">
          <div className="crop bg-paper border border-rule p-6 sm:p-12 md:p-16 shadow-sheet">
            {/* Headline */}
            <BlurReveal
              as="h2"
              inView={true}
              delay={0.1}
              speedReveal={1.1}
              className="font-display text-2xl sm:text-4xl md:text-5xl font-normal text-ink leading-tight tracking-[-0.022em] mb-4 sm:mb-6"
            >
              Vamos analisar a presença digital da sua empresa sem custo.
            </BlurReveal>

            {/* Narrative */}
            <BlurReveal
              as="p"
              inView={true}
              delay={0.25}
              speedReveal={1.3}
              className="font-body text-sm sm:text-lg text-ink-2 leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal"
            >
              Envie o link do seu negócio ou o nome da sua empresa no WhatsApp. Analisamos velocidade, posicionamento no mapa e o que seus concorrentes estão fazendo, entregando uma recomendação prática em até 24 horas.
            </BlurReveal>

            {/* Action button */}
            <RevealItem delay={0.35} y={15} duration={0.8}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center inline-flex items-center gap-3 bg-accent text-accent-ink px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium rounded-sm border border-ink/20 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-focus cursor-pointer text-center"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  <span>Solicitar análise gratuita no WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
                <span className="text-xs text-muted text-center sm:text-left">
                  Resposta rápida no horário comercial
                </span>
              </div>
            </RevealItem>

            {/* Reassurance Badges */}
            <div className="mt-8 pt-6 border-t border-rule/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-ink-2">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>Retorno em até <span className="num">24h</span></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>Zero compromisso inicial</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>Entrega em até <span className="num">14</span> dias</span>
              </div>
            </div>
          </div>
        </RevealItem>
      </div>
    </section>
  )
}

export default CtaSection