import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { BlurReveal } from './ui/BlurReveal'

const TOPICS = [
  {
    code: '01',
    tag: 'Web e Sistemas',
    title: 'Landing pages e sistemas sob medida',
    description: 'Arquiteturas ultrarrápidas em React sem CMS genérico, convertendo visitantes em agendamentos diretos.',
  },
  {
    code: '02',
    tag: 'Local SEO e Maps',
    title: 'Domínio no Google Maps',
    description: 'Algoritmos territoriais calibrados para colocar seu negócio no topo das buscas da região.',
  },
  {
    code: '03',
    tag: 'Ativos visuais',
    title: 'Atualização visual premium',
    description: 'Fotografia e identidade visual de alto padrão para aniquilar qualquer amadorismo.',
  },
]

export function Hero({ isReady: _isReady = true, on3DReady: _on3DReady }) {
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Quero transformar a presença digital e o faturamento do meu negócio com a Connecting.')}`

  return (
    <section className="relative w-full border-b border-rule proof pt-6 pb-16 md:pt-8 md:pb-24">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        {/* Navigation Header */}
        <header className="flex items-center justify-between gap-4 border-b border-rule pb-4">
            <a href="#" className="flex items-center gap-2.5 text-ink hover:text-accent transition-colors duration-200">
              <img src="/favicon.svg" alt="Connecting" className="h-6 w-6 rounded-xs" width="24" height="24" />
              <span className="font-display text-xl font-normal tracking-[-0.02em]">Connecting</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-xs text-ink-2">
              <a href="#servicos" className="hover:text-ink transition-colors duration-200">
                Serviços
              </a>
              <a href="#comparativo" className="hover:text-ink transition-colors duration-200">
                Comparativo
              </a>
              <a href="#contato" className="hover:text-ink transition-colors duration-200">
                Contato
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm bg-accent text-accent-ink hover:opacity-95 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-focus cursor-pointer"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
        </header>

        {/* Hero Main Ledge Posture */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Headline & Core Action Block */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <BlurReveal
              as="h1"
              inView={false}
              delay={0.1}
              speedReveal={1.0}
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink font-normal leading-[1.05] tracking-[-0.022em]"
            >
              Domínio digital para negócios locais.
            </BlurReveal>

            <BlurReveal
              as="p"
              inView={false}
              delay={0.35}
              speedReveal={1.2}
              className="mt-6 text-base sm:text-lg text-ink-2 leading-relaxed max-w-xl font-normal"
            >
              Posicionamento de autoridade eliminando perfis invisíveis, fotos ruins e sites lentos.
            </BlurReveal>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-ink px-6 py-3.5 text-sm font-medium rounded-sm border border-ink/20 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-focus cursor-pointer"
              >
                <span>Falar com um estrategista</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 bg-paper-2 text-ink px-6 py-3.5 text-sm font-medium rounded-sm border border-rule transition-colors duration-200 hover:bg-paper-3 focus-visible:outline-2 focus-visible:outline-focus cursor-pointer"
              >
                <span>Conhecer os pilares</span>
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Proof Sheet Card: The 3 Core Pillars */}
          <div className="lg:col-span-5 w-full">
            <div className="crop bg-paper-2 border border-rule p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-rule pb-3 text-xs text-muted mb-6">
                <span className="font-medium text-ink">Pilares de conversão</span>
                <span className="num">3 entregáveis</span>
              </div>

              <div className="space-y-6">
                {TOPICS.map((topic) => (
                  <div key={topic.code} className="border-b border-rule/60 pb-5 last:border-b-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <span className="text-xs font-medium text-accent num">{topic.code}</span>
                      <span className="text-xs text-muted">{topic.tag}</span>
                    </div>
                    <h3 className="font-display text-lg font-normal text-ink mb-1">
                      {topic.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-rule flex items-center justify-between text-xs text-muted">
                <span>Metodologia comprovada</span>
                <span className="text-ink font-medium num">99+ no Google PageSpeed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Strip */}
        <div className="mt-16 pt-6 border-t border-rule flex flex-wrap items-center justify-between gap-4 text-xs text-muted">
          <div>
            <span>Fundada em 2026</span>
            <span className="mx-2 text-rule">/</span>
            <span>São Paulo, Brasil</span>
          </div>
          <div className="flex items-center gap-2 text-ink-2">
            <span>Role para comparar resultados</span>
            <ArrowDown className="h-3.5 w-3.5 text-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
