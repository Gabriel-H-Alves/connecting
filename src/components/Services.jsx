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
import { BeforeAfterComparison } from './BeforeAfterComparison'
import { BlurReveal } from './ui/BlurReveal'
import { RevealItem, RevealStagger, RevealChild } from './ui/ScrollReveal'

export function Services() {
  return (
    <section id="servicos" className="relative w-full bg-paper py-14 sm:py-20 border-b border-rule">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        {/* Section Header with BlurReveal */}
        <RevealItem y={28} duration={0.9} className="flex flex-col items-start mb-12 sm:mb-16 border-b border-rule pb-8 sm:pb-10">
          <BlurReveal
            as="h2"
            inView={true}
            delay={0.1}
            speedReveal={1.2}
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight tracking-[-0.022em] max-w-3xl mb-3 sm:mb-4"
          >
            Menos ruído, mais clientes na sua porta.
          </BlurReveal>

          <BlurReveal
            as="p"
            inView={true}
            delay={0.25}
            speedReveal={1.3}
            className="text-sm sm:text-base text-ink-2 font-normal max-w-2xl leading-relaxed"
          >
            Uma estratégia completa que integra desenvolvimento ágil, posicionamento no mapa e apresentação visual de alto padrão.
          </BlurReveal>
        </RevealItem>

        {/* 4 Core Pillars Grid with Apple-style Cascade Stagger */}
        <RevealStagger stagger={0.12} delay={0.05} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {/* Card 1: Performance Web e Sistemas */}
          <RevealChild y={34} duration={1.05} scale={0.985} className="h-full">
            <div className="crop bg-paper-2 border border-rule p-5 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 border-b border-rule/60">
                  <span className="inline-flex items-center gap-2 text-xs text-ink-2 font-medium">
                    <Gauge className="h-4 w-4 text-accent" />
                    Engenharia Web & Sistemas
                  </span>
                  <span className="text-xs font-medium text-accent num">01</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-normal text-ink mb-2 sm:mb-3 leading-snug">
                  Desenvolvimento sob medida e instantâneo
                </h3>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6 font-normal">
                  Substituímos plataformas engessadas por código limpo em React. Sua página carrega em milissegundos no celular, garantindo retenção máxima e zero desistência de clientes.
                </p>
              </div>

              <div className="pt-4 border-t border-rule flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-muted">
                <span>Arquitetura moderna de frontend</span>
                <span className="text-ink font-medium">Performance máxima no celular</span>
              </div>
            </div>
          </RevealChild>

          {/* Card 2: Google Maps e SEO Local */}
          <RevealChild y={34} duration={1.05} scale={0.985} className="h-full">
            <div className="crop bg-paper-2 border border-rule p-5 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 border-b border-rule/60">
                  <span className="inline-flex items-center gap-2 text-xs text-ink-2 font-medium">
                    <MapPin className="h-4 w-4 text-accent" />
                    Presença Geolocalizada
                  </span>
                  <span className="text-xs font-medium text-accent num">02</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-normal text-ink mb-2 sm:mb-3 leading-snug">
                  Top 3 no Google Maps e busca regional
                </h3>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6 font-normal">
                  Quando um potencial cliente busca por serviços na sua região, ele compra de quem vê primeiro. Calibramos tags, categorias e relevância territorial para colocar sua empresa em evidência.
                </p>
              </div>
              
              <div className="pt-4 border-t border-rule flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-muted">
                <span>Palavras-chave comerciais</span>
                <span className="text-ink flex items-center gap-1 font-medium">
                  Intenção de compra imediata <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </RevealChild>

          {/* Card 3: Credibilidade e Anti-Template */}
          <RevealChild y={34} duration={1.05} scale={0.985} className="h-full">
            <div className="crop bg-paper-2 border border-rule p-5 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 border-b border-rule/60">
                  <span className="inline-flex items-center gap-2 text-xs text-ink-2 font-medium">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    Percepção de Marca
                  </span>
                  <span className="text-xs font-medium text-accent num">03</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-normal text-ink mb-2 sm:mb-3 leading-snug">
                  Design autoral sem templates genéricos
                </h3>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6 font-normal">
                  Negócios que usam modelos prontos passam a impressão de amadorismo. Criamos uma linguagem visual exclusiva que transmite autoridade e atrai clientes que valorizam qualidade.
                </p>
              </div>

              <div className="pt-4 border-t border-rule flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-muted">
                <span>Tipografia e layout calibrados</span>
                <span className="text-ink font-medium">Diferenciação competitiva</span>
              </div>
            </div>
          </RevealChild>

          {/* Card 4: Produção Visual */}
          <RevealChild y={34} duration={1.05} scale={0.985} className="h-full">
            <div className="crop bg-paper-2 border border-rule p-5 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 border-b border-rule/60">
                  <span className="inline-flex items-center gap-2 text-xs text-ink-2 font-medium">
                    <Sparkles className="h-4 w-4 text-accent" />
                    Fotografia Comercial
                  </span>
                  <span className="text-xs font-medium text-accent num">04</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-normal text-ink mb-2 sm:mb-3 leading-snug">
                  Ambientação e ativos visuais em alta resolução
                </h3>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6 font-normal">
                  Apresentamos seu espaço, equipe e produtos com direção de luz e enquadramentos adequados. Imagens que geram desejo de consumo e eliminam a hesitação de quem nunca visitou o local.
                </p>
              </div>

              <div className="pt-4 border-t border-rule flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-muted">
                <span>Direção de arte para negócios físicos</span>
                <span className="text-ink flex items-center gap-1 font-medium">
                  Confiança no primeiro clique <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </RevealChild>
        </RevealStagger>

        {/* Digital Deliverables Showcase */}
        <div id="entregaveis" className="mb-16 sm:mb-24 border-t border-rule pt-10 sm:pt-12">
          <RevealItem y={28} duration={0.9} className="mb-8">
            <BlurReveal
              as="h3"
              inView={true}
              delay={0.1}
              speedReveal={1.1}
              className="font-display text-xl sm:text-3xl font-normal text-ink"
            >
              Os três ativos que colocam seu negócio na liderança regional
            </BlurReveal>
            <BlurReveal
              as="p"
              inView={true}
              delay={0.25}
              speedReveal={1.2}
              className="text-xs sm:text-sm text-ink-2 mt-2 max-w-xl leading-relaxed"
            >
              Estruturas reais construídas sob medida para capturar a intenção de compra da sua cidade e convertê-la em clientes todos os dias.
            </BlurReveal>
          </RevealItem>

          <RevealStagger stagger={0.14} delay={0.05} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Deliverable 1: Mobile Landing Page & Sistemas */}
            <RevealChild y={34} duration={1.05} scale={0.985} className="h-full">
              <div className="crop bg-paper-2 border border-rule p-5 sm:p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-rule/60 text-xs">
                    <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                      <Smartphone className="h-3.5 w-3.5 text-accent" />
                      Interface Web // Alta Conversão
                    </span>
                    <span className="text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded-xs">
                      <span className="num">0.5s</span> load
                    </span>
                  </div>

                  {/* Mockup da Landing Page */}
                  <div className="bg-paper border border-rule p-4 rounded-xs mb-4 shadow-xs">
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

                    <div className="bg-accent text-accent-ink py-2.5 px-3 rounded-xs text-[11px] font-medium text-center flex items-center justify-center gap-1.5 shadow-xs">
                      <span>Agendar horário pelo WhatsApp</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>

                  <p className="text-xs text-ink-2 leading-relaxed">
                    Estrutura desenhada para guiar o visitante pelo celular até a tomada de decisão em poucos segundos, com formulários e links diretos.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-rule flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="text-muted">Conversão média: <span className="num">14.8%</span></span>
                  <span className="text-accent font-medium text-[11px]">Zero barreiras</span>
                </div>
              </div>
            </RevealChild>

            {/* Deliverable 2: Google Maps Pack */}
            <RevealChild y={34} duration={1.05} scale={0.985} className="h-full">
              <div className="crop bg-paper-2 border border-rule p-5 sm:p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-rule/60 text-xs">
                    <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      Perfil Comercial // Destaque Local
                    </span>
                    <span className="text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded-xs">
                      Ranqueado
                    </span>
                  </div>

                  {/* Mockup do Perfil no Google */}
                  <div className="bg-paper border border-rule p-4 rounded-xs mb-4 shadow-xs">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h4 className="font-display text-sm sm:text-base font-semibold text-ink leading-snug">
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
                      <div className="flex flex-col items-center justify-center py-2 px-1 bg-paper-2 rounded-xs border border-rule/40 text-center">
                        <Phone className="h-3.5 w-3.5 mb-1 text-accent" />
                        <span>Ligar</span>
                      </div>
                      <div className="flex flex-col items-center justify-center py-2 px-1 bg-paper-2 rounded-xs border border-rule/40 text-center">
                        <Navigation className="h-3.5 w-3.5 mb-1 text-accent" />
                        <span>Rotas</span>
                      </div>
                      <div className="flex flex-col items-center justify-center py-2 px-1 bg-paper-2 rounded-xs border border-rule/40 text-center">
                        <Eye className="h-3.5 w-3.5 mb-1 text-accent" />
                        <span>Fotos 4K</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-ink-2 leading-relaxed">
                    Perfil totalmente estruturado com rotas facilitadas, fotos catalogadas e fluxo constante de novos depoimentos para liderar a decisão de compra.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-rule flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="text-muted num">+3.200 visualizações/mês</span>
                  <span className="text-accent font-medium text-[11px]"><span className="num">87%</span> de intenção de compra</span>
                </div>
              </div>
            </RevealChild>

            {/* Deliverable 3: Visual Assets & Storefront */}
            <RevealChild y={34} duration={1.05} scale={0.985} className="h-full">
              <div className="crop bg-paper-2 border border-rule p-5 sm:p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-rule/60 text-xs">
                    <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                      <Sparkles className="h-3.5 w-3.5 text-accent" />
                      Acervo Visual // Padrão Editorial
                    </span>
                    <span className="text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded-xs">
                      <span className="num">4K</span> HDR
                    </span>
                  </div>

                  {/* Mockup de Direção de Fotografia */}
                  <div className="bg-paper border border-rule p-4 rounded-xs mb-4 shadow-xs relative overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] font-medium text-ink mb-2">
                      <span>Ensaio do Espaço & Fachada</span>
                      <span className="text-muted text-[10px]">Luz Natural</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 my-2">
                      <div className="bg-paper-3 border border-rule/60 p-2 rounded-xs text-center">
                        <p className="text-[10px] text-muted mb-0.5">Amador</p>
                        <p className="text-[11px] text-muted line-through">Fotos escuras</p>
                      </div>
                      <div className="bg-accent/10 border border-accent/20 p-2 rounded-xs text-center">
                        <p className="text-[10px] text-accent mb-0.5">Connecting</p>
                        <p className="text-[11px] text-ink font-medium">Luz de estúdio</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-rule/40 text-[11px] text-muted flex items-center justify-between">
                      <span className="flex items-center gap-1 text-ink-2">
                        <Check className="h-3 w-3 text-accent" /> Fachada e ambiente
                      </span>
                      <span className="text-[10px] text-accent">Percepção de valor</span>
                    </div>
                  </div>

                  <p className="text-xs text-ink-2 leading-relaxed">
                    Cobertura visual completa do ambiente físico que comprova a qualidade da sua operação antes mesmo do cliente sair de casa.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-rule flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="text-muted">Impacto visual imediato</span>
                  <span className="text-accent font-medium text-[11px]">Fim do improviso</span>
                </div>
              </div>
            </RevealChild>
          </RevealStagger>
        </div>

        {/* Before and After Interactive Showcase */}
        <div id="comparativo" className="border-t border-rule pt-12 sm:pt-16">
          <RevealItem y={28} duration={0.9} className="mb-8 sm:mb-12">
            <BlurReveal
              as="h3"
              inView={true}
              delay={0.1}
              speedReveal={1.2}
              className="font-display text-2xl sm:text-4xl font-normal text-ink tracking-[-0.022em]"
            >
              A diferença entre ser invisível ou líder territorial.
            </BlurReveal>
          </RevealItem>
          <RevealItem y={36} duration={1.1}>
            <BeforeAfterComparison />
          </RevealItem>
        </div>
      </div>
    </section>
  )
}

export default Services
