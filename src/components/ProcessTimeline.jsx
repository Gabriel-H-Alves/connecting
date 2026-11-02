import {
  CalendarClock,
  Code2,
  Rocket,
  ShieldCheck,
  Check,
  ArrowUpRight,
  Clock,
  Sparkles,
} from 'lucide-react'
import { BlurReveal } from './ui/BlurReveal'
import { RevealItem, RevealStagger, RevealChild } from './ui/ScrollReveal'
import { SITE_CONFIG, buildWhatsAppUrl } from '../config/site'

const STEPS = [
  {
    step: '01',
    timeframe: '24 a 48 horas',
    title: 'Diagnóstico & Alinhamento Estratégico',
    description:
      'Analisamos sua presença atual, velocidade do site, perfil no Google e os três principais concorrentes da sua região. Definimos o escopo exato do que seu negócio precisa, sem tentar empurrar serviços desnecessários.',
    icon: CalendarClock,
    badge: 'Sem Custo Inicial',
    highlights: [
      'Análise de velocidade e nota no Google',
      'Diagnóstico de palavras-chave na sua cidade',
      'Proposta transparente com prazo fechado',
    ],
  },
  {
    step: '02',
    timeframe: '7 a 14 dias úteis',
    title: 'Engenharia, Copywriting & Design Editorial',
    description:
      'Construímos a aplicação sob medida em React com design autoral, textos persuasivos focados em vendas e otimização cirúrgica para celular. Nada de templates pré-fabricados ou código pesado.',
    icon: Code2,
    badge: 'Desenvolvimento Ágil',
    highlights: [
      'Carregamento instantâneo no celular',
      'Layout exclusivo alinhado ao seu posicionamento',
      'Links inteligentes de conversão para WhatsApp',
    ],
  },
  {
    step: '03',
    timeframe: 'No ar e operando',
    title: 'Publicação, Google Maps & Suporte Contínuo',
    description:
      'Publicamos seu site em servidores de alta velocidade, configuramos seu domínio próprio com SSL, integramos o Google Meu Negócio e entregamos tudo pronto para você começar a receber contatos no mesmo dia.',
    icon: Rocket,
    badge: 'Pronto para Vender',
    highlights: [
      'Configuração de domínio próprio e segurança SSL',
      'Estruturação de perfil territorial no Google',
      'Código-fonte 100% de sua propriedade',
    ],
  },
]

export function ProcessTimeline() {
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.contact.whatsAppNumber,
    SITE_CONFIG.contact.defaultMessages.process
  )

  return (
    <section id="processo" className="relative w-full bg-paper-2 py-14 sm:py-20 md:py-24 border-b border-rule proof">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        {/* Header */}
        <RevealItem y={28} duration={0.9} className="flex flex-col items-start mb-12 sm:mb-16 border-b border-rule pb-8 sm:pb-10">
          <BlurReveal
            as="h2"
            inView={true}
            delay={0.1}
            speedReveal={1.2}
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight tracking-[-0.022em] max-w-3xl mb-3 sm:mb-4"
          >
            Do primeiro contato ao site no ar em até 14 dias.
          </BlurReveal>

          <BlurReveal
            as="p"
            inView={true}
            delay={0.25}
            speedReveal={1.3}
            className="text-sm sm:text-base text-ink-2 font-normal max-w-2xl leading-relaxed"
          >
            Sem reuniões cansativas, sem atrasos e sem jargões complicados. Um fluxo linear planejado para colocar sua empresa na liderança com clareza total em cada etapa.
          </BlurReveal>
        </RevealItem>

        {/* 3 Step Process Grid */}
        <RevealStagger stagger={0.14} delay={0.05} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {STEPS.map((s) => {
            const Icon = s.icon
            return (
              <RevealChild key={s.step} y={34} duration={1.05} scale={0.985} className="h-full">
                <div className="crop bg-paper border border-rule p-5 sm:p-7 flex flex-col justify-between h-full shadow-xs">
                  <div>
                    {/* Top step info */}
                    <div className="flex items-center justify-between pb-3 mb-5 border-b border-rule/60 text-xs">
                      <span className="text-xs font-semibold text-accent num">Etapa {s.step}</span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-ink-2">
                        <Clock className="h-3 w-3 text-accent" />
                        <span className="num">{s.timeframe}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-xs bg-accent/10 text-accent">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-[11px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-xs">
                        {s.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-normal text-ink mb-2 sm:mb-3 leading-snug">
                      {s.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6 font-normal">
                      {s.description}
                    </p>

                    {/* Highlights list */}
                    <ul className="space-y-2 mb-4 pt-3 border-t border-rule/50">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-ink-2">
                          <Check className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-rule text-[11px] text-muted flex items-center justify-between">
                    <span>Etapa validada</span>
                    <span className="text-accent font-medium">100% transparente</span>
                  </div>
                </div>
              </RevealChild>
            )
          })}
        </RevealStagger>

        {/* Confidence Commitments Strip */}
        <RevealItem y={24} duration={0.9} delay={0.15}>
          <div className="crop bg-paper border border-rule p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-ink mb-0.5">Prazo Fechado</h4>
                  <p className="text-xs text-ink-2">
                    Cronograma acordado em contrato. Entregamos seu projeto pronto em até 14 dias úteis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-ink mb-0.5">Propriedade Total</h4>
                  <p className="text-xs text-ink-2">
                    O código, o domínio e os acessos são 100% seus. Sem amarras nem cobranças surpresa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-ink mb-0.5">Atendimento Direto</h4>
                  <p className="text-xs text-ink-2">
                    Você fala diretamente com quem programa e desenha o seu projeto via WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-rule flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-xs text-muted text-center sm:text-left">
                Quer saber o que podemos fazer pelo seu negócio? O diagnóstico inicial é gratuito.
              </span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-accent text-accent-ink px-5 py-2.5 text-xs font-medium rounded-sm border border-ink/20 shadow-xs transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <span>Iniciar diagnóstico em 24h</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </RevealItem>
      </div>
    </section>
  )
}

export default ProcessTimeline
