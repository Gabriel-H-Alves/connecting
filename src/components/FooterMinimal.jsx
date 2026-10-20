import { ArrowUpRight } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()

export function FooterMinimal() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full border-t border-white/10 bg-[#09090B] px-6 py-16 text-zinc-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="font-['Clash_Display'] text-2xl font-bold tracking-tight text-white">
            CONNECTING
          </span>
          <p className="mt-1 text-xs text-zinc-500 font-mono">
            Estratégia digital de alta performance para negócios locais.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono">
          <button
            onClick={scrollToTop}
            data-cursor-interactive
            className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Voltar ao topo <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
          <span className="text-zinc-600">&bull;</span>
          <span className="text-zinc-600">
            &copy; {CURRENT_YEAR} Connecting. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}
