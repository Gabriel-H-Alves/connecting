import {
  MapPin,
  Gauge,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  Star,
  Smartphone,
  Navigation,
  Phone,
  Check,
  Zap,
  Eye,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { BeforeAfterComparison } from './BeforeAfterComparison'
import { BlurReveal } from './ui/BlurReveal'

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function Services() {
  return (
    <section id="servicos" className="relative w-full bg-paper py-20 border-b border-rule">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        {/* Section Header with BlurReveal */}
        <div className="flex flex-col items-start mb-16 border-b border-rule pb-10">
          <BlurReveal
            as="h2"
            inView={true}
            delay={0.1}
            speedReveal={1.2}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight tracking-[-0.022em] max-w-3xl mb-4"
          >
            Menos ruído, mais clientes na sua porta.
          </BlurReveal>

          <BlurReveal
            as="p"
            inView={true}
            delay={0.25}
            speedReveal={1.3}
            className="text-base text-ink-2 font-normal max-w-2xl leading-relaxed"
          >
            Eliminamos os três maiores gargalos que fazem negócios locais perderem vendas diárias para a concorrência na mesma avenida.
          </BlurReveal>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Card 1: Performance Web e Sistemas */}
          <motion.div
            custom={0}
            variants={CARD_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5% 0px' }}
            className="crop bg-paper-2 border border-rule p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-rule/60">
                <span className="inline-flex items-center gap-2 text-xs text-ink-2 font-medium">
                  <Gauge className="h-4 w-4 text-accent" />
                  Alta Performance e Sistemas
                </span>
                <span className="text-xs font-medium text-accent num">01</span>
              </div>
              <h3 className="font-display text-2xl font-normal text-ink mb-3 leading-snug">
                Landing pages e sites instantâneos
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-6 font-normal">
                Sem templates pesados de WordPress ou lentidão. Páginas e sistemas sob medida desenvolvidos em React, carregando em menos de 1 segundo e focados em converter cliques em WhatsApp.
              </p>
            </div>

            <div className="pt-4 border-t border-rule flex items-center justify-between text-xs text-muted">
              <span>Arquitetura sem CMS genérico</span>
              <span className="text-ink font-medium num">99+ no Google PageSpeed</span>
            </div>
          </motion.div>

          {/* Card 2: Google Maps e SEO Local */}
          <motion.div
            custom={1}
            variants={CARD_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5% 0px' }}
            className="crop bg-paper-2 border border-rule p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-rule/60">
                <span className="inline-flex items-center gap-2 text-xs text-ink-2 font-medium">
                  <MapPin className="h-4 w-4 text-accent" />
                  Local SEO e Google Maps
                </span>
                <span className="text-xs font-medium text-accent num">02</span>
              </div>
              <h3 className="font-display text-2xl font-normal text-ink mb-3 leading-snug">
                Primeiro lugar onde os clientes buscam
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-6 font-normal">
                87% dos consumidores pesquisam no Google Maps antes de visitar um negócio local. Se você não está no Top 3, seu concorrente está levando o seu faturamento.
              </p>
            </div>
            
            <div className="pt-4 border-t border-rule flex items-center justify-between text-xs text-muted">
              <span>Palavras-chave locais e otimização de tags</span>
              <span className="text-ink flex items-center gap-1 font-medium">
                Ver detalhes <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </motion.div>

          {/* Card 3: Credibilidade e Anti-Template */}
          <motion.div
            custom={2}
            variants={CARD_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5% 0px' }}
            className="crop bg-paper-2 border border-rule p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-rule/60">
                <span className="inline-flex items-center gap-2 text-xs text-ink-2 font-medium">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  Estrutura anti-template
                </span>
                <span className="text-xs font-medium text-accent num">03</span>
              </div>
              <h3 className="font-display text-2xl font-normal text-ink mb-3 leading-snug">
                Credibilidade total
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-6 font-normal">
                Design limpo e tipográfico para elevar a percepção de valor e justificar tickets maiores para os seus serviços.
              </p>
            </div>

            <div className="pt-4 border-t border-rule flex items-center justify-between text-xs text-muted">
              <span>Identidade sólida de marca</span>
              <span className="text-ink font-medium">Zero códigos genéricos</span>
            </div>
          </motion.div>

          {/* Card 4: Produção Visual */}
          <motion.div
            custom={3}
            variants={CARD_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5% 0px' }}
            className="crop bg-paper-2 border border-rule p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-rule/60">
                <span className="inline-flex items-center gap-2 text-xs text-ink-2 font-medium">
                  <Sparkles className="h-4 w-4 text-accent" />
                  Produção visual
                </span>
                <span className="text-xs font-medium text-accent num">04</span>
              </div>
              <h3 className="font-display text-2xl font-normal text-ink mb-3 leading-snug">
                Fotografia e imagens em alta resolução
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-6 font-normal">
                Fotos amadoras ou escuras afastam clientes exigentes. Substituímos imagens improvisadas por fotos de estúdio e ambientação de alto impacto.
              </p>
            </div>

            <div className="pt-4 border-t border-rule flex items-center justify-between text-xs text-muted">
              <span>Tratamento de cor e ambientação</span>
              <span className="text-ink flex items-center gap-1 font-medium">
                Alto contraste <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </motion.div>
        </div>

        {/* Digital Deliverables Showcase */}
        <div id="entregaveis" className="mb-24 border-t border-rule pt-12">
          <div className="mb-8">
            <BlurReveal
              as="h3"
              inView={true}
              delay={0.1}
              speedReveal={1.1}
              className="font-display text-2xl sm:text-3xl font-normal text-ink"
            >
              Os três ativos que colocam seu negócio na liderança regional
            </BlurReveal>
            <BlurReveal
              as="p"
              inView={true}
              delay={0.25}
              speedReveal={1.2}
              className="text-sm text-ink-2 mt-2 max-w-xl leading-relaxed"
            >
              Estruturas reais construídas sob medida para capturar a intenção de compra da sua cidade e convertê-la em clientes todos os dias.
            </BlurReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Deliverable 1: Mobile Landing Page & Sistemas */}
            <motion.div
              custom={0}
              variants={CARD_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-5% 0px' }}
              className="crop bg-paper-2 border border-rule p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-rule/60 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                    <Smartphone className="h-3.5 w-3.5 text-accent" />
                    Mobile • Conversão WhatsApp
                  </span>
                  <span className="text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded-xs">
                    <span className="num">0.5s</span> load
                  </span>
                </div>

                {/* Mockup da Landing Page */}
                <div className="bg-paper border border-rule p-4 rounded-xs mb-5 shadow-xs">
                  <div className="flex items-center justify-between text-[10px] text-muted pb-2 mb-2 border-b border-rule/40">
                    <span className="truncate">connecting.com.br/sua-marca</span>
                    <span className="text-accent font-semibold flex items-center gap-1">
                      <Zap className="h-2.5 w-2.5 fill-current" /> <span className="num">99</span> PageSpeed
                    </span>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="h-2 w-3/4 bg-ink/15 rounded-xs" />
                    <div className="h-1.5 w-full bg-ink/10 rounded-xs" />
                    <div className="h-1.5 w-5/6 bg-ink/10 rounded-xs" />
                  </div>

                  <div className="bg-accent text-accent-ink py-2 px-3 rounded-xs text-[11px] font-medium text-center flex items-center justify-center gap-1.5 shadow-xs">
                    <span>Agendar horário pelo WhatsApp</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>

                <p className="text-xs text-ink-2 leading-relaxed">
                  Páginas e sistemas construídos sob medida em React. Sem CMS pesado ou lentidão no celular, reduzindo o abandono e multiplicando contatos diretos.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-rule flex items-center justify-between text-xs">
                <span className="text-muted">Conversão: <span className="num">14.8%</span></span>
                <span className="text-accent font-medium text-[11px]">Zero lentidão</span>
              </div>
            </motion.div>

            {/* Deliverable 2: Google Maps Pack */}
            <motion.div
              custom={1}
              variants={CARD_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-5% 0px' }}
              className="crop bg-paper-2 border border-rule p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-rule/60 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    Google Maps • Top 1 Regional
                  </span>
                  <span className="text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded-xs">
                    Ranqueado
                  </span>
                </div>

                {/* Mockup do Perfil no Google */}
                <div className="bg-paper border border-rule p-4 rounded-xs mb-5 shadow-xs">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="font-display text-base font-semibold text-ink leading-snug">
                        Sua Empresa • Unidade Central
                      </h4>
                      <div className="flex items-center gap-1 mt-1 text-xs text-ink-2">
                        <span className="font-semibold text-accent num">4.9</span>
                        <div className="flex text-accent">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                        <span className="text-muted text-[11px] num">(184 avaliações)</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[11px] text-muted mb-3 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Aberto agora • Atendimento e agendamento
                  </p>

                  {/* Ações de 1 toque */}
                  <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-rule/50 text-[11px] text-ink-2">
                    <div className="flex flex-col items-center justify-center py-1.5 px-2 bg-paper-2 rounded-xs border border-rule/40 text-center">
                      <Phone className="h-3.5 w-3.5 mb-1 text-accent" />
                      <span>Ligar</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-1.5 px-2 bg-paper-2 rounded-xs border border-rule/40 text-center">
                      <Navigation className="h-3.5 w-3.5 mb-1 text-accent" />
                      <span>Rotas</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-1.5 px-2 bg-paper-2 rounded-xs border border-rule/40 text-center">
                      <Eye className="h-3.5 w-3.5 mb-1 text-accent" />
                      <span>Fotos 4K</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-ink-2 leading-relaxed">
                  Estrutura otimizada com palavras-chave territoriais que posiciona o seu endereço entre os três primeiros resultados do mapa quando o cliente pesquisa perto de você.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-rule flex items-center justify-between text-xs">
                <span className="text-muted num">+3.200 visualizações/mês</span>
                <span className="text-accent font-medium text-[11px]"><span className="num">87%</span> de intenção de compra</span>
              </div>
            </motion.div>

            {/* Deliverable 3: Visual Assets & Storefront */}
            <motion.div
              custom={2}
              variants={CARD_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-5% 0px' }}
              className="crop bg-paper-2 border border-rule p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-rule/60 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                    Ativos Visuais • Alta Resolução
                  </span>
                  <span className="text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded-xs">
                    <span className="num">4K</span> HDR
                  </span>
                </div>

                {/* Mockup de Direção de Fotografia */}
                <div className="bg-paper border border-rule p-4 rounded-xs mb-5 shadow-xs relative overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] font-medium text-ink mb-2">
                    <span>Ensaio do Espaço & Equipe</span>
                    <span className="text-muted text-[10px]">Luz Natural</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 my-2">
                    <div className="bg-paper-3 border border-rule/60 p-2.5 rounded-xs text-center">
                      <p className="text-[10px] text-muted mb-1">Amador</p>
                      <p className="text-xs text-muted line-through">Fotos escuras de celular</p>
                    </div>
                    <div className="bg-accent/10 border border-accent/20 p-2.5 rounded-xs text-center">
                      <p className="text-[10px] text-accent mb-1">Connecting</p>
                      <p className="text-xs text-ink font-medium">Ângulo e luz de estúdio</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-rule/40 text-[11px] text-muted flex items-center justify-between">
                    <span className="flex items-center gap-1 text-ink-2">
                      <Check className="h-3 w-3 text-accent" /> Fachada e atendimento
                    </span>
                    <span className="text-[10px] text-accent">Percepção de valor</span>
                  </div>
                </div>

                <p className="text-xs text-ink-2 leading-relaxed">
                  Apresentação estética refinada do seu espaço físico e serviços. Imagens tratadas que transmitem credibilidade imediata e justificam cobranças de tickets maiores.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-rule flex items-center justify-between text-xs">
                <span className="text-muted">Impacto visual imediato</span>
                <span className="text-accent font-medium text-[11px]">Fim do amadorismo</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Before and After Interactive Showcase */}
        <div id="comparativo" className="border-t border-rule pt-16">
          <div className="mb-12">
            <BlurReveal
              as="h3"
              inView={true}
              delay={0.1}
              speedReveal={1.2}
              className="font-display text-3xl sm:text-4xl font-normal text-ink tracking-[-0.022em]"
            >
              A diferença entre ser invisível ou líder territorial.
            </BlurReveal>
          </div>
          <BeforeAfterComparison />
        </div>
      </div>
    </section>
  )
}

export default Services
