import { useState } from 'react'
import { CheckCircle2, XCircle, Star } from 'lucide-react'
import { RevealStagger, RevealChild } from './ui/ScrollReveal'

const COMPARISONS = [
  {
    id: 'website',
    tabName: 'Landing pages, sites e sistemas',
    shortTabName: 'Sites e Sistemas',
    before: {
      tag: 'Antes da Connecting',
      status: 'Perdendo vendas todos os dias',
      score: 'Carregamento: 4.8s (Lento)',
      views: 'Taxa de conversão: < 0.5%',
      issues: [
        'Sem página própria ou dependente apenas de redes sociais',
        'Navegação travada no celular que faz o visitante desistir',
        'Nenhum canal direto e facilitado para contato via WhatsApp',
      ],
    },
    after: {
      tag: 'Depois da Connecting',
      status: 'Máquina de agendamentos e vendas',
      score: 'Carregamento: 0.5s (Instantâneo)',
      views: 'Taxa de conversão: 14.8%',
      features: [
        'Aplicação desenvolvida em React com foco exclusivo em conversão',
        'Design responsivo impecável em qualquer tamanho de tela',
        'Botões de ação estrategicamente posicionados ao longo do fluxo',
      ],
    },
  },
  {
    id: 'gmaps',
    tabName: 'Google Meu Negócio e Maps',
    shortTabName: 'Google Maps',
    before: {
      tag: 'Antes da Connecting',
      status: 'Invisível na busca do bairro',
      score: 'Nota: 3.4 ★ (Poucas avaliações)',
      views: 'Menos de 150 visualizações/mês',
      issues: [
        'Fotos escuras ou desatualizadas postadas por terceiros',
        'Endereço e horários sem confirmação ou links de contato',
        'Empresa não aparece quando o cliente pesquisa na mesma avenida',
      ],
    },
    after: {
      tag: 'Depois da Connecting',
      status: 'Posição de destaque e autoridade',
      score: 'Nota: 4.9 ★ (Mais de 180 avaliações)',
      views: '+3.200 visualizações e rotas/mês',
      features: [
        'Otimização avançada de categorias e termos de busca local',
        'Fotos profissionais com tratamento de cor e iluminação',
        'Estratégia ativa para coleta contínua de recomendações 5 estrelas',
      ],
    },
  },
]

export function BeforeAfterComparison() {
  const [activeTab, setActiveTab] = useState(0)
  const current = COMPARISONS[activeTab]

  return (
    <div className="w-full">
      {/* Switcher Tabs - fully responsive with horizontal scroll and shrink-0 */}
      <div
        role="tablist"
        aria-label="Comparativo antes e depois da Connecting"
        className="flex items-center gap-2 mb-8 border-b border-rule pb-4 overflow-x-auto"
      >
        {COMPARISONS.map((comp, idx) => (
          <button
            key={comp.id}
            id={`tab-${comp.id}`}
            role="tab"
            aria-selected={activeTab === idx}
            aria-controls={`panel-${comp.id}`}
            type="button"
            onClick={() => setActiveTab(idx)}
            className={`shrink-0 cursor-pointer px-3 sm:px-4 py-2 text-xs font-medium rounded-sm border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-focus ${
              activeTab === idx
                ? 'bg-ink text-paper border-ink'
                : 'bg-paper-2 text-ink-2 border-rule hover:bg-paper-3 hover:text-ink'
            }`}
          >
            <span className="hidden sm:inline">{comp.tabName}</span>
            <span className="sm:hidden">{comp.shortTabName}</span>
          </button>
        ))}
      </div>

      {/* Side-by-side Before and After Cards with Apple-style staggered entrance */}
      <RevealStagger
        key={current.id}
        stagger={0.12}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        {/* BEFORE CARD */}
        <RevealChild y={34} duration={1.05} scale={0.985} className="h-full">
          <div className="crop bg-paper-2 border border-rule p-5 sm:p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-rule/60 text-xs">
                <span className="text-muted font-normal">
                  {current.before.tag}
                </span>
                <span className="px-2 py-0.5 rounded-sm bg-paper-3 text-muted border border-rule text-xs">
                  Sem autoridade
                </span>
              </div>

              <h4 className="font-display text-lg sm:text-2xl font-normal text-ink mb-3 sm:mb-4">
                {current.before.status}
              </h4>

              <div className="my-5 sm:my-6 p-4 rounded-sm border border-dashed border-rule bg-paper-3/50 text-center">
                <div className="text-xs text-ink-2 font-medium mb-1 num">
                  {current.before.score}
                </div>
                <div className="text-xs text-muted num">
                  {current.before.views}
                </div>
                <div className="mt-2 text-xs text-muted">
                  Registro inicial sem calibração
                </div>
              </div>

              <div className="space-y-3">
                {current.before.issues.map((issue, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-ink-2">
                    <XCircle className="h-4 w-4 text-muted shrink-0 mt-0.5" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealChild>

        {/* AFTER CARD */}
        <RevealChild y={34} duration={1.05} scale={0.985} className="h-full">
          <div className="crop bg-paper-hi border border-rule p-5 sm:p-8 flex flex-col justify-between shadow-sheet h-full">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-rule text-xs">
                <span className="text-ink font-medium">
                  {current.after.tag}
                </span>
                <span className="px-2 py-0.5 rounded-sm bg-accent text-accent-ink font-medium text-xs">
                  Alta conversão
                </span>
              </div>

              <h4 className="font-display text-lg sm:text-2xl font-normal text-ink mb-3 sm:mb-4">
                {current.after.status}
              </h4>

              <div className="my-5 sm:my-6 p-4 rounded-sm border border-rule bg-paper-2 text-center">
                <div className="flex items-center justify-center gap-1.5 text-sm font-semibold text-ink mb-1 num">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span>{current.after.score}</span>
                </div>
                <div className="text-xs text-ink-2 font-medium num">
                  {current.after.views}
                </div>
                <div className="mt-2 text-xs text-muted">
                  Padrão de autoridade territorial consolidado
                </div>
              </div>

              <div className="space-y-3">
                {current.after.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-ink">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealChild>
      </RevealStagger>
    </div>
  )
}

export default BeforeAfterComparison
