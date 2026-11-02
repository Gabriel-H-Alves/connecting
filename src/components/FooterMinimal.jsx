import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { RevealItem } from './ui/ScrollReveal'
import { SITE_CONFIG, buildWhatsAppUrl } from '../config/site'

const CURRENT_YEAR = new Date().getFullYear()

export function FooterMinimal() {
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.contact.whatsAppNumber,
    SITE_CONFIG.contact.defaultMessages.hero
  )

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-paper py-12 sm:py-16 border-t border-rule text-xs text-muted">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <RevealItem y={16} duration={0.8}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-rule">
            <div>
              <div className="flex items-center gap-2.5">
                <img src="/favicon.svg" alt="Connecting" className="h-5 w-5 sm:h-6 sm:w-6 rounded-xs shrink-0" width="24" height="24" />
                <span className="font-display text-xl sm:text-2xl font-normal text-ink">
                  Connecting
                </span>
              </div>
              <p className="mt-1 text-xs text-ink-2">
                Engenharia web e presença digital de alta performance para negócios locais.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full md:w-auto justify-between md:justify-end">
              <ThemeToggle />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-2 hover:text-accent transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-focus"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-ink-2 hover:text-ink transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-focus"
              >
                <span>Voltar ao topo</span>
                <ArrowUp className="h-3.5 w-3.5 text-accent" />
              </button>
              <span className="text-muted">
                &copy; {CURRENT_YEAR} Connecting.
              </span>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted">
            <p>
              Tecnologia sob medida para liderança regional e captação de clientes.
            </p>
            <p className="num">
              Tema Studio / Editorial
            </p>
          </div>
        </RevealItem>
      </div>
    </footer>
  )
}

export default FooterMinimal
