import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { ShinyText } from './ui/ShinyText'
import { RevealItem } from './ui/ScrollReveal'
import { AppleScrollRevealText } from './ui/AppleScrollRevealText'

export function CtaSection({
  whatsappNumber = '5511999999999',
  defaultMessage = 'Olá! Quero transformar a presença digital e o faturamento do meu negócio com a Connecting.',
}) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-32 border-t border-white/10 overflow-hidden">
      <div className="flex flex-col items-start">
        {/* Technical Label */}
        <RevealItem delay={0.1}>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 block">
            [04 // INICIE A TRANSIÇÃO]
          </span>
        </RevealItem>

        {/* Fluid Mega Headline with ShinyText */}
        <RevealItem delay={0.2}>
          <h2 className="font-['Clash_Display'] text-[clamp(2.5rem,7vw,6.5rem)] font-bold leading-none tracking-tighter text-white uppercase mb-8">
            Pronto para Dominar <br className="hidden md:block" />
            <ShinyText text="Sua Região?" speed={2.5} />
          </h2>
        </RevealItem>

        {/* Apple Scroll Reveal Narrative */}
        <div className="max-w-2xl mb-12">
          <AppleScrollRevealText
            text="Enquanto você lê esta frase, centenas de potenciais clientes na sua cidade estão escolhendo o seu concorrente simplesmente porque ele aparece primeiro no Google Maps com fotos profissionais e um site impecável. Vamos mudar essa realidade hoje."
            className="font-sans text-base sm:text-lg md:text-xl font-light text-zinc-400 leading-relaxed"
          />
        </div>

        {/* High-Conversion Luxury CTA Button with Shiny Sheen */}
        <RevealItem delay={0.4}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-interactive
            className="group relative inline-flex items-center gap-4 rounded-full border border-white/20 bg-white px-8 py-5 text-black shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-zinc-200 active:scale-95"
          >
            <MessageCircle className="h-5 w-5 fill-black stroke-black" />
            <span className="font-['Clash_Display'] text-base md:text-lg font-bold tracking-tight uppercase">
              Falar com um Estrategista
            </span>
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </RevealItem>
      </div>
    </section>
  )
}

export default CtaSection
