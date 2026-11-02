import { ArrowUp } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const CURRENT_YEAR = new Date().getFullYear()

export function FooterMinimal() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-paper py-16 border-t border-rule text-xs text-muted">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-rule">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/favicon.svg" alt="Connecting" className="h-6 w-6 rounded-xs" width="24" height="24" />
              <span className="font-display text-2xl font-normal text-ink">
                Connecting
              </span>
            </div>
            <p className="mt-1 text-xs text-ink-2">
              Estratégia digital de alta performance para negócios locais.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <ThemeToggle />
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-ink-2 hover:text-ink transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-focus"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="h-3.5 w-3.5 text-accent" />
            </button>
            <span className="text-muted">
              &copy; {CURRENT_YEAR} Connecting. Todos os direitos reservados.
            </span>
          </div>
        </div>

        {/* Real photo credits as required by Hallmark and CC licenses */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted">
          <p>
            Fotografias reais: {' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Almond_croissant_-_Workshop_Coffee_Lab_2025-06-27.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-focus"
            >
              Andy Li
            </a>{' '}
            (CC0), {' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Vault_Caf%C3%A9_Central_Vienna_Wien.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-focus"
            >
              Jebulon
            </a>{' '}
            (CC0) e {' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Cardamom_buns.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-focus"
            >
              W.carter
            </a>{' '}
            (CC0).
          </p>
          <p className="num">
            Tema Studio / Editorial
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterMinimal
