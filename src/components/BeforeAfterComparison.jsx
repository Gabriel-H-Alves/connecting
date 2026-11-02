import { useState } from 'react'
import { CheckCircle2, XCircle, Star } from 'lucide-react'

const COMPARISONS = [
  {
    id: 'website',
    tabName: 'Landing pages, sites e sistemas',
    before: {
      tag: 'Antes da Connecting',
      status: 'Perdendo vendas diárias',
      score: 'Carregamento: 4.8s (Lento)',
      views: 'Taxa de conversão: < 0.5%',
      issues: [
        'Sem página própria ou layout travado no celular',
        'Site lento em plataformas genéricas que espanta clientes',
        'Nenhum botão direto ou estratégico para o WhatsApp',
      ],
    },
    after: {
      tag: 'Depois da Connecting',
      status: 'Máquina de conversão e agendamentos',
      score: 'Carregamento: 0.5s (99+ no Google PageSpeed)',
      views: 'Taxa de conversão: 14.8%',
      features: [
        'Landing page e sistemas desenvolvidos sob medida em React',
        '100% otimizada para compras e agendamentos no celular',
        'Botões de WhatsApp estratégicos convertendo em 1 clique',
      ],
    },
  },
  {
    id: 'gmaps',
    tabName: 'Google Meu Negócio e Maps',
    before: {
      tag: 'Antes da Connecting',
      status: 'Invisível e amador',
      score: '3.4 ★ (12 avaliações)',
      views: '~140 visualizações/mês',
      issues: [
        'Fotos escuras tiradas de celular',
        'Horários desatualizados e sem link de contato',
        'Não aparece no Top 3 do mapa da região',
      ],
    },
    after: {
      tag: 'Depois da Connecting',
      status: 'Top 1 e autoridade local',
      score: '4.9 ★ (180+ avaliações reais)',
      views: '+3.200 visualizações/mês',
      features: [
        'Ensaio fotográfico profissional do local e produtos',
        'Otimização completa de palavras-chave locais',
        'Fluxo automatizado de avaliações 5 estrelas',
      ],
    },
  },
]

export function BeforeAfterComparison() {
  const [activeTab, setActiveTab] = useState(0)
  const current = COMPARISONS[activeTab]

  return (
    <div className="w-full">
      {/* Switcher Tabs */}
      <div
        role="tablist"
        aria-label="Comparativo antes e depois da Connecting"
        className="flex items-center gap-2 mb-8 border-b border-rule pb-4"
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
            className={`cursor-pointer px-4 py-2 text-xs font-medium rounded-sm border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-focus ${
              activeTab === idx
                ? 'bg-ink text-paper border-ink'
                : 'bg-paper-2 text-ink-2 border-rule hover:bg-paper-3 hover:text-ink'
            }`}
          >
            {comp.tabName}
          </button>
        ))}
      </div>

      {/* Side-by-side Before and After Cards */}
      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* BEFORE CARD */}
        <div className="crop bg-paper-2 border border-rule p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-rule/60 text-xs">
              <span className="text-muted font-normal">
                {current.before.tag}
              </span>
              <span className="px-2 py-0.5 rounded-sm bg-paper-3 text-muted border border-rule text-xs">
                Sem autoridade
              </span>
            </div>

            <h4 className="font-display text-xl sm:text-2xl font-normal text-ink mb-4">
              {current.before.status}
            </h4>

            <div className="my-6 p-4 rounded-sm border border-dashed border-rule bg-paper-3/50 text-center">
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

        {/* AFTER CARD */}
        <div className="crop bg-paper-hi border border-rule p-6 sm:p-8 flex flex-col justify-between shadow-sheet">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-rule text-xs">
              <span className="text-ink font-medium">
                {current.after.tag}
              </span>
              <span className="px-2 py-0.5 rounded-sm bg-accent text-accent-ink font-medium text-xs">
                Alta conversão
              </span>
            </div>

            <h4 className="font-display text-xl sm:text-2xl font-normal text-ink mb-4">
              {current.after.status}
            </h4>

            <div className="my-6 p-4 rounded-sm border border-rule bg-paper-2 text-center">
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
      </div>
    </div>
  )
}

export default BeforeAfterComparison
