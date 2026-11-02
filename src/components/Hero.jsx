import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { BlurReveal } from './ui/BlurReveal'
import { RevealItem, RevealStagger, RevealChild } from './ui/ScrollReveal'
import { SITE_CONFIG, buildWhatsAppUrl } from '../config/site'

const TOPICS = [
  {
    code: '01',
    tag: ' ',
    title: 'Landing pages e sistemas sob medida',
    description: 'Aplicações desenvolvidas em React com tempo de resposta imediato, convertendo visitantes em contatos diretos.',
  },
  {
    code: '02',
    tag: ' ',
    title: 'Presença e liderança no Google Maps',
    description: 'Otimização avançada de relevância local para capturar clientes que buscam soluções na sua cidade todos os dias.',
  },
  {
    code: '03',
    tag: ' ',
    title: 'Design autoral e autoridade de marca',
    description: 'Comunicação estética refinada que transmite solidez corporativa e justifica cobranças de tickets maiores.',
  },
]

export function Hero({ isReady = true, on3DReady: _on3DReady }) {
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.contact.whatsAppNumber,
    SITE_CONFIG.contact.defaultMessages.hero
  )

  return (
    <section className="relative w-full border-b border-rule proof pt-5 pb-14 sm:pt-6 sm:pb-16 md:pt-8 md:pb-24">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        {/* Navigation Header */}
        <RevealItem trigger={isReady} delay={0.05} y={20} duration={0.9}>
          <header className="flex items-center justify-between gap-3 border-b border-rule pb-4">
            <a href="#" className="flex items-center gap-2 sm:gap-2.5 text-ink hover:text-accent transition-colors duration-200 shrink-0">
              <img src="/favicon.svg" alt="Connecting" className="h-5 w-5 sm:h-6 sm:w-6 rounded-xs shrink-0" width="24" height="24" />
              <span className="font-display text-lg sm:text-xl font-normal tracking-[-0.02em]">Connecting</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-xs text-ink-2">
              <a href="#servicos" className="hover:text-ink transition-colors duration-200">
                Serviços
              </a>
              <a href="#comparativo" className="hover:text-ink transition-colors duration-200">
                Comparativo
              </a>
              <a href="#processo" className="hover:text-ink transition-colors duration-200">
                Como Funciona
              </a>
              <a href="#contato" className="hover:text-ink transition-colors duration-200">
                Contato
              </a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-sm bg-accent text-accent-ink hover:opacity-95 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-focus cursor-pointer shrink-0"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </header>
        </RevealItem>

        {/* Hero Main Ledge Posture */}
        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Headline & Core Action Block */}
          <div className="lg:col-span-7 flex flex-col items-start w-full">
            <BlurReveal
              as="h1"
              inView={false}
              trigger={isReady}
              delay={0.15}
              speedReveal={1.1}
              className="font-display text-3xl sm:text-5xl lg:text-6xl text-ink font-normal leading-[1.1] sm:leading-[1.05] tracking-[-0.022em]"
            >
              Domínio digital para negócios locais.
            </BlurReveal>

            <BlurReveal
              as="p"
              inView={false}
              trigger={isReady}
              delay={0.35}
              speedReveal={1.2}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-ink-2 leading-relaxed max-w-xl font-normal"
            >
              Desenvolvemos aplicações de alta conversão e estruturamos sua presença regional para transformar buscas locais em clientes fidelizados.
            </BlurReveal>

            <RevealItem trigger={isReady} delay={0.5} y={24} duration={0.9} className="w-full sm:w-auto">
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-accent text-accent-ink px-6 py-3.5 text-sm font-medium rounded-sm border border-ink/20 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-focus cursor-pointer"
                >
                  <span>Solicitar análise gratuita</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#servicos"
                  className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-paper-2 text-ink px-6 py-3.5 text-sm font-medium rounded-sm border border-rule transition-colors duration-200 hover:bg-paper-3 focus-visible:outline-2 focus-visible:outline-focus cursor-pointer"
                >
                  <span>Conhecer as soluções</span>
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </RevealItem>
          </div>

          {/* Proof Sheet Card: The 3 Core Pillars */}
          <div className="lg:col-span-5 w-full mt-2 lg:mt-0">
            <RevealItem trigger={isReady} delay={0.25} y={35} duration={1.1}>
              <div className="crop bg-paper-2 border border-rule p-5 sm:p-8">
                <div className="flex items-center justify-between border-b border-rule pb-3 text-xs text-muted mb-6">
                  <span className="font-medium text-ink">Pilares de entrega</span>
                  <span className="num">3 soluções</span>
                </div>

                <RevealStagger trigger={isReady} stagger={0.1} delay={0.35} className="space-y-6">
                  {TOPICS.map((topic) => (
                    <RevealChild key={topic.code} y={20} duration={0.9} className="border-b border-rule/60 pb-5 last:border-b-0 last:pb-0">
                      <div className="flex items-baseline justify-between gap-2 mb-1.5">
                        <span className="text-xs font-medium text-accent num">{topic.code}</span>
                        <span className="text-xs text-muted">{topic.tag}</span>
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-normal text-ink mb-1">
                        {topic.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                        {topic.description}
                      </p>
                    </RevealChild>
                  ))}
                </RevealStagger>

                <div className="mt-6 pt-4 border-t border-rule flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-muted">
                  <span>Engenharia sob medida</span>
                  <span className="text-ink font-medium">Arquitetura React nativa</span>
                </div>
              </div>
            </RevealItem>
          </div>
        </div>

        {/* Hero Bottom Strip */}
        <RevealItem trigger={isReady} delay={0.65} y={15} duration={0.8}>
          <div className="mt-12 sm:mt-16 pt-6 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs text-muted">
            <div>
              <span>Fundada em 2026</span>
              <span className="mx-2 text-rule">/</span>
              <span>São Paulo, Brasil</span>
            </div>
            <div className="flex items-center gap-2 text-ink-2">
              <span>Role para conferir o comparativo</span>
              <ArrowDown className="h-3.5 w-3.5 text-accent" />
            </div>
          </div>
        </RevealItem>
      </div>
    </section>
  )
}

export default Hero
