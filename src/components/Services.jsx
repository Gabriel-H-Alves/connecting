import { MapPin, Gauge, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react'
import { TiltedCard } from './ui/TiltedCard'
import { BeforeAfterComparison } from './BeforeAfterComparison'
import { RevealItem, RevealStagger, RevealChild } from './ui/ScrollReveal'
import { ScrollVelocity } from './ui/ScrollVelocity'
import { AppleScrollRevealText } from './ui/AppleScrollRevealText'

export function Services() {
  return (
    <section className="relative w-full overflow-x-hidden bg-[#09090B] pt-12 pb-28">
      {/* 1. React Bits Scroll Velocity Separator Marquee */}
      <div className="w-full mb-28">
        <ScrollVelocity
          texts={['DOMÍNIO LOCAL • SITES PREMIUM • GOOGLE MAPS • CONVERSÃO TERRITORIAL •']}
          velocity={45}
          className="font-['Clash_Display'] text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase tracking-tight text-white/90"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header with Fluid Clamp and Apple Scroll Reveal */}
        <div className="flex flex-col items-start mb-20">
          <RevealItem delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-3 block">
              [02 // CAPACIDADES DE ELITE]
            </span>
          </RevealItem>

          <RevealItem delay={0.2}>
            <h2 className="font-['Clash_Display'] text-[clamp(2.2rem,6vw,4.8rem)] font-bold leading-none tracking-tighter text-white max-w-3xl mb-6">
              Menos Ruído. <br className="hidden md:block" />
              Mais Clientes na Sua Porta.
            </h2>
          </RevealItem>

          <div className="max-w-xl">
            <AppleScrollRevealText
              text="Eliminamos os três maiores gargalos que fazem negócios locais perderem vendas diárias para a concorrência na mesma avenida."
              className="font-sans text-sm sm:text-base text-zinc-400 font-light"
            />
          </div>
        </div>

        {/* Asymmetric Bento Grid with React Bits TiltedCard */}
        <RevealStagger stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-28">
          {/* Card 1: Google Maps */}
          <RevealChild className="md:col-span-2">
            <TiltedCard rotateAmplitude={8} className="h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300">
                      <MapPin className="h-3.5 w-3.5 text-white" />
                      Local SEO &bull; Google Maps
                    </span>
                    <span className="font-mono text-xs text-zinc-500">01</span>
                  </div>
                  <h3 className="font-['Clash_Display'] text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight">
                    Primeiro Lugar Onde os Clientes Buscam
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-lg leading-relaxed">
                    87% dos consumidores pesquisam no Google Maps antes de visitar um negócio local.<br className="hidden md:block" />
                    Se você não está no Top 3, seu concorrente está levando o seu faturamento.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Palavras-chave locais &bull; Otimização de tags</span>
                  <span className="text-white flex items-center gap-1">
                    Ver detalhes <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </TiltedCard>
          </RevealChild>

          {/* Card 2: Performance Web */}
          <RevealChild className="md:col-span-1">
            <TiltedCard rotateAmplitude={8} className="h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300">
                      <Gauge className="h-3.5 w-3.5 text-white" />
                      Velocidade Pura
                    </span>
                    <span className="font-mono text-xs text-zinc-500">02</span>
                  </div>
                  <h3 className="font-['Clash_Display'] text-xl font-semibold text-white mb-3 tracking-tight">
                    Sites Instantâneos
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                    Sem templates pesados ou lentidão. Páginas sob medida em React carregando em menos de 1 segundo.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[11px] text-zinc-500">
                  99+ Score no Google PageSpeed
                </div>
              </div>
            </TiltedCard>
          </RevealChild>

          {/* Card 3: Design Sob Medida */}
          <RevealChild className="md:col-span-1">
            <TiltedCard rotateAmplitude={8} className="h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300">
                      <ShieldCheck className="h-3.5 w-3.5 text-white" />
                      Anti-Template
                    </span>
                    <span className="font-mono text-xs text-zinc-500">03</span>
                  </div>
                  <h3 className="font-['Clash_Display'] text-xl font-semibold text-white mb-3 tracking-tight">
                    Credibilidade Total
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                    Design limpo e minimalista para elevar a percepção de valor e justificar tickets maiores.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[11px] text-zinc-500">
                  Zero Códigos Genéricos
                </div>
              </div>
            </TiltedCard>
          </RevealChild>

          {/* Card 4: Produção Visual */}
          <RevealChild className="md:col-span-2">
            <TiltedCard rotateAmplitude={8} className="h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300">
                      <Sparkles className="h-3.5 w-3.5 text-white" />
                      Produção Visual
                    </span>
                    <span className="font-mono text-xs text-zinc-500">04</span>
                  </div>
                  <h3 className="font-['Clash_Display'] text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight">
                    Fotografia e Imagens em Alta Resolução
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-lg leading-relaxed">
                    Fotos amadoras ou escuras afastam clientes exigentes.<br className="hidden md:block" />
                    Substituímos imagens improvisadas por fotos de estúdio e ambientação de alto impacto.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Tratamento de cor &bull; Ambientação de produtos</span>
                  <span className="text-white flex items-center gap-1">
                    Alto contraste <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </TiltedCard>
          </RevealChild>
        </RevealStagger>

        {/* Before & After Interactive Showcase with TiltedCard */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <RevealItem delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2 block">
                [03 // COMPARATIVO REAL]
              </span>
            </RevealItem>
            <RevealItem delay={0.2}>
              <h3 className="font-['Clash_Display'] text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold text-white tracking-tight leading-tight">
                A Diferença Entre Ser Invisível <br className="hidden md:block" />
                ou Líder Territorial
              </h3>
            </RevealItem>
          </div>
          <BeforeAfterComparison />
        </div>
      </div>
    </section>
  )
}

export default Services
