/**
 * Configurações centrais do site e regras de contato.
 */

// Permite configurar via variável de ambiente VITE_WHATSAPP_NUMBER
// Formato esperado: DDI + DDD + Número (apenas dígitos, ex: 5511999999999)
const rawWhatsAppNumber = (import.meta.env?.VITE_WHATSAPP_NUMBER || '5511999999999').replace(/\D/g, '')

export const SITE_CONFIG = {
  name: 'Connecting',
  title: 'Connecting: Presença Digital e Performance para Negócios Locais',
  description: 'Agência especializada em negócios locais: Domínio no Google Maps, Sites de Alta Performance e Atualização Visual Premium.',
  city: 'São Paulo, SP',
  contact: {
    whatsAppNumber: rawWhatsAppNumber,
    defaultMessages: {
      hero: 'Olá! Quero transformar a presença digital e o faturamento do meu negócio com a Connecting.',
      cta: 'Olá! Quero transformar a presença digital e o faturamento do meu negócio com a Connecting.',
      floating: 'Olá! Gostaria de entender como a Connecting pode posicionar meu negócio local no topo.',
    },
  },
}

/**
 * Monta URL segura do WhatsApp com validação e encoding do texto
 * @param {string} [customNumber]
 * @param {string} [customMessage]
 * @returns {string}
 */
export function buildWhatsAppUrl(customNumber, customMessage) {
  const number = (customNumber || SITE_CONFIG.contact.whatsAppNumber || '').replace(/\D/g, '')
  const message = customMessage || SITE_CONFIG.contact.defaultMessages.hero
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

