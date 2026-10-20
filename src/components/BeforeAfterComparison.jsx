import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, Star } from 'lucide-react'
import { TiltedCard } from './ui/TiltedCard'
import { RevealStagger, RevealChild } from './ui/ScrollReveal'

const COMPARISONS = [
  {
    id: 'gmaps',
    tabName: 'Google Meu Negócio',
    before: {
      tag: 'Antes da Connecting',
      status: 'Invisível e Amador',
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
      status: 'Top 1 & Autoridade Local',
      score: '4.9 ★ (180+ avaliações reais)',
      views: '+3.200 visualizações/mês',
      features: [
        'Ensaio fotográfico profissional do local e produtos',
        'Otimização completa de palavras-chave locais',
        'Fluxo automatizado de avaliações 5 estrelas',
      ],
    },
  },
  {
    id: 'website',
    tabName: 'Website & Conversão',
    before: {
      tag: 'Antes da Connecting',
      status: 'Perdendo Vendas Diárias',
      score: 'Carregamento: 4.8s (Lento)',
      views: 'Taxa de conversão: < 0.5%',
      issues: [
        'Sem página própria ou link para PDF confuso',
        'Layout quebrado e ilegível no celular',
        'Nenhum botão direto para o WhatsApp',
      ],
    },
    after: {
      tag: 'Depois da Connecting',
      status: 'Máquina de Agendamentos',
      score: 'Carregamento: 0.6s (Instantâneo)',
      views: 'Taxa de conversão: 14.8%',
      features: [
        'Landing page ultra rápida e persuasiva',
        '100% otimizada para compras pelo celular',
        'Botões de WhatsApp estratégicos com mensagens prontas',
      ],
    },
  },
]

export function BeforeAfterComparison() {
  const [activeTab, setActiveTab] = useState(0)
  const current = COMPARISONS[activeTab]

  return (
    <div className="w-full">
      {/* Switcher Tabs with buttery micro-interaction */}
      <div className="flex justify-center gap-3 mb-10">
        {COMPARISONS.map((comp, idx) => (
          <button
            key={comp.id}
            data-cursor-interactive
            onClick={() => setActiveTab(idx)}
            className={`cursor-pointer rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
              activeTab === idx
                ? 'bg-white text-black font-bold shadow-lg shadow-white/10 scale-105'
                : 'border border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'
            }`}
          >
            {comp.tabName}
          </button>
        ))}
      </div>

      {/* Side-by-side Before & After with React Bits TiltedCard */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* BEFORE CARD WITH TILTED CARD */}
          <TiltedCard rotateAmplitude={10} className="h-full">
            <RevealStagger stagger={0.08}>
              <RevealChild className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                  {current.before.tag}
                </span>
                <span className="rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 font-mono text-[11px] text-zinc-400">
                  Sem autoridade
                </span>
              </RevealChild>

              <RevealChild>
                <h4 className="font-['Clash_Display'] text-xl font-semibold text-zinc-300">
                  {current.before.status}
                </h4>
              </RevealChild>

              <RevealChild className="my-6 flex h-40 w-full flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/40 p-4 text-center">
                <div className="font-mono text-xs text-zinc-500 mb-1">{current.before.score}</div>
                <div className="text-zinc-600 text-xs">{current.before.views}</div>
                <div className="mt-3 text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
                  [Área reservada: Imagem Antes]
                </div>
              </RevealChild>

              <div className="space-y-3">
                {current.before.issues.map((issue, idx) => (
                  <RevealChild key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                    <XCircle className="h-4 w-4 text-zinc-600 shrink-0 mt-0.5" />
                    <span>{issue}</span>
                  </RevealChild>
                ))}
              </div>
            </RevealStagger>
          </TiltedCard>

          {/* AFTER CARD WITH TILTED CARD */}
          <TiltedCard rotateAmplitude={10} className="h-full">
            <RevealStagger stagger={0.08}>
              <RevealChild className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                  {current.after.tag}
                </span>
                <span className="rounded-full bg-white text-black px-3 py-1 font-mono text-[11px] font-bold">
                  Alta Conversão
                </span>
              </RevealChild>

              <RevealChild>
                <h4 className="font-['Clash_Display'] text-xl font-semibold text-white">
                  {current.after.status}
                </h4>
              </RevealChild>

              <RevealChild className="my-6 flex h-40 w-full flex-col items-center justify-center rounded-xl border border-white/20 bg-zinc-950 p-4 text-center shadow-inner">
                <div className="flex items-center gap-1 text-white font-mono text-sm font-semibold mb-1">
                  <Star className="h-4 w-4 fill-white text-white" />
                  {current.after.score}
                </div>
                <div className="text-zinc-300 text-xs font-mono">{current.after.views}</div>
                <div className="mt-3 text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
                  [Área reservada: Imagem Depois - Alta Definição]
                </div>
              </RevealChild>

              <div className="space-y-3">
                {current.after.features.map((feature, idx) => (
                  <RevealChild key={idx} className="flex items-start gap-2.5 text-xs text-zinc-200">
                    <CheckCircle2 className="h-4 w-4 text-white shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </RevealChild>
                ))}
              </div>
            </RevealStagger>
          </TiltedCard>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
