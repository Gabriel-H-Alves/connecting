import { describe, it, expect } from 'vitest'
import { buildWhatsAppUrl, SITE_CONFIG } from './site'

describe('SITE_CONFIG e WhatsApp Helper', () => {
  it('deve possuir configurações essenciais da agência definidas', () => {
    expect(SITE_CONFIG.name).toBe('Connecting')
    expect(SITE_CONFIG.contact.whatsAppNumber).toBeDefined()
    expect(SITE_CONFIG.contact.defaultMessages.hero).toContain('Connecting')
    expect(SITE_CONFIG.contact.defaultMessages.cta).toContain('Connecting')
  })

  it('deve gerar a URL do WhatsApp padrão devidamente formatada e escapada', () => {
    const url = buildWhatsAppUrl()
    expect(url).toMatch(/^https:\/\/wa\.me\/\d+\?text=.+/)
    expect(url).toContain(encodeURIComponent(SITE_CONFIG.contact.defaultMessages.hero))
  })

  it('deve sanitizar números com caracteres especiais, parênteses e traços', () => {
    const rawNumber = '+55 (11) 98765-4321'
    const url = buildWhatsAppUrl(rawNumber, 'Teste de mensagem')
    expect(url).toBe('https://wa.me/5511987654321?text=Teste%20de%20mensagem')
  })

  it('deve codificar caracteres em português (acentos, cedilha, pontuação)', () => {
    const customMessage = 'Olá! Quero transformar a presença digital e a conversão do meu negócio.'
    const url = buildWhatsAppUrl('5511988887777', customMessage)
    expect(url).toContain(encodeURIComponent(customMessage))
    expect(url).not.toContain(' ')
  })
})

