import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { SpotlightBackground } from './ui/SpotlightBackground'
import { TextPressure } from './ui/TextPressure'
import { InteractivePillar } from './ui/InteractivePillar'
import { Hero3DObject } from './ui/Hero3DObject'

const APPLE_EASE = [0.16, 1, 0.3, 1]

const TOPICS = [
  {
    code: '01',
    tag: 'LOCAL SEO & MAPS',
    title: 'Domínio no Google Maps',
    description: 'Algoritmos territoriais calibrados para colocar seu negócio no Top 1 das buscas da região.',
    alignment: 'self-start md:ml-6 lg:ml-12',
  },
  {
    code: '02',
    tag: 'ULTRA PERFORMANCE',
    title: 'Sites de Alta Performance',
    description: 'Arquiteturas ultrarrápidas sem CMS genérico, convertendo cliques em mensagens diretas.',
    alignment: 'self-start md:self-end md:mr-8 lg:mr-20',
  },
  {
    code: '03',
    tag: 'VISUAL ASSETS',
    title: 'Atualização Visual Premium',
    description: 'Fotografia e identidade visual de alto padrão para aniquilar qualquer amadorismo.',
    alignment: 'self-start md:ml-16 lg:ml-32',
  },
]

export function Hero({ isReady = true, on3DReady }) {
  return (
    <SpotlightBackground className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between px-4 sm:px-8 py-8 md:py-10">
      {/* 3D Spline Interactive Object (Positioned on the Right / Center-back) */}
      <Hero3DObject
        onReady={on3DReady}
        className="top-1/2 -translate-y-1/2 right-0 md:-right-8 w-full md:w-[58vw] h-[75vh] md:h-[90vh] opacity-65 md:opacity-90"
      />

      {/* 1. Asymmetric Editorial Meta Header (Z-10, Pointer-Events Auto) */}
      <motion.div
        initial={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
        animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : -16, filter: isReady ? 'blur(0px)' : 'blur(8px)' }}
        transition={{ duration: 1.2, ease: APPLE_EASE }}
        className="relative z-10 w-full flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[10px] sm:text-[11px] text-zinc-500 uppercase tracking-widest pointer-events-auto"
      >
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
          <span className="text-zinc-200 font-medium">CONNECTING // PROTOCOL 01</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-zinc-500">
          <span>PRESENÇA TERRITORIAL</span>
          <span className="text-zinc-700">&bull;</span>
          <span>ESTRUTURA ANTI-TEMPLATE</span>
        </div>
      </motion.div>

      {/* 2. Dominant Reactive Typography (Relative Z-10, Pointer-Events Auto) */}
      <div className="relative z-10 my-auto w-full py-6 md:py-12 overflow-hidden pointer-events-auto">
        <div className="w-full max-w-7xl mx-auto px-1 sm:px-2">
          <TextPressure
            text="CONNECTING"
            fontFamily="'Clash Display', -apple-system, sans-serif"
            textColor="#FFFFFF"
            minFontSize={32}
            radius={0.35}
            className="w-full"
          />
        </div>

        {/* Asymmetrical Editorial Sub-label */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 20, filter: isReady ? 'blur(0px)' : 'blur(8px)' }}
          transition={{ duration: 1.2, ease: APPLE_EASE, delay: 0.3 }}
          className="mt-3 flex flex-col md:flex-row items-start md:items-baseline justify-between max-w-6xl mx-auto px-2 sm:px-4 gap-4"
        >
          <span className="font-mono text-xs text-zinc-500 tracking-wider">
            [00 // METRO LOCAL DOMINANCE]
          </span>
          <p className="max-w-md font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            Eliminamos perfis invisíveis, fotos ruins e sites lentos.<br className="hidden md:block" />
            Posicionamento de autoridade para quem lidera o mercado local.
          </p>
        </motion.div>
      </div>

      {/* 3. The 3 Mysterious Asymmetric Interactive Pillars (Relative Z-10) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-5 md:gap-3 my-4 sm:my-6 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isReady ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-600 uppercase mb-1 px-2"
        >
          <span>// PASSE O MOUSE SOBRE OS PILARES PARA FOCO REAL</span>
        </motion.div>

        {TOPICS.map((topic, index) => (
          <motion.div
            key={topic.code}
            initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
            animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 35, filter: isReady ? 'blur(0px)' : 'blur(10px)' }}
            transition={{
              duration: 1.2,
              ease: APPLE_EASE,
              delay: 0.6 + index * 0.14,
            }}
            className={topic.alignment}
          >
            <InteractivePillar
              code={topic.code}
              tag={topic.tag}
              title={topic.title}
              description={topic.description}
            />
          </motion.div>
        ))}
      </div>

      {/* 4. Bottom Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ delay: 1, duration: 1.2, ease: APPLE_EASE }}
        className="relative z-10 w-full flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] text-zinc-500 uppercase tracking-widest pointer-events-auto"
      >
        <span>EST. 2026 &bull; SÃO PAULO &bull; BRASIL</span>
        <div className="flex items-center gap-2 text-zinc-400">
          <span>SCROLL PARA DESCOBRIR</span>
          <ArrowDownRight className="h-3.5 w-3.5 animate-bounce" />
        </div>
      </motion.div>
    </SpotlightBackground>
  )
}

export default Hero
