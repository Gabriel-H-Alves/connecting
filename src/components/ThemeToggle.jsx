import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle({ className = '' }) {
  const [mode, setMode] = useState(() => {
    if (typeof document !== 'undefined') {
      if (document.documentElement.dataset.mode) {
        return document.documentElement.dataset.mode
      }
      if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    return 'light'
  })

  const toggleMode = () => {
    const nextMode = mode === 'dark' ? 'light' : 'dark'
    setMode(nextMode)
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.mode = nextMode
    }
    try {
      localStorage.setItem('theme', nextMode)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={mode === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={mode === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className={`inline-flex items-center justify-center h-8 w-8 rounded-sm border border-rule/70 bg-paper-2/60 text-muted hover:text-ink hover:border-rule transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-focus ${className}`}
    >
      {mode === 'dark' ? (
        <Sun className="h-3.5 w-3.5 text-accent" />
      ) : (
        <Moon className="h-3.5 w-3.5 text-muted hover:text-ink" />
      )}
    </button>
  )
}

export default ThemeToggle
