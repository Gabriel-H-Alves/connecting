import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

describe('Responsive and Layout Integrity Checks', () => {
  const componentsDir = path.resolve(__dirname, 'components')
  const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'))

  it('ensures no hardcoded wide pixel widths break mobile screens', () => {
    const widePixelRegex = /w-\[\s*(?:4[0-9]{2}|[5-9][0-9]{2}|[0-9]{4,})px\s*\]/g
    const minWidePixelRegex = /min-w-\[\s*(?:3[5-9][0-9]|[4-9][0-9]{2}|[0-9]{4,})px\s*\]/g

    for (const file of files) {
      const content = fs.readFileSync(path.join(componentsDir, file), 'utf8')
      const wideMatches = content.match(widePixelRegex)
      const minWideMatches = content.match(minWidePixelRegex)

      expect(wideMatches, `File ${file} has fixed wide width`).toBeNull()
      expect(minWideMatches, `File ${file} has fixed wide min-width`).toBeNull()
    }
  })

  it('ensures buttons stretch or adapt gracefully on mobile without rigid fixed dimensions', () => {
    for (const file of files) {
      if (file === 'FloatingWhatsApp.jsx') continue
      const content = fs.readFileSync(path.join(componentsDir, file), 'utf8')
      // If a button has full-width CTA intention, check that flex-col sm:flex-row is applied
      if (content.includes('Falar com um estrategista') || content.includes('Solicitar análise gratuita')) {
        expect(content).toContain('w-full sm:w-auto')
      }
    }
  })

  it('ensures tab controls do not cause horizontal overflow on mobile', () => {
    const compContent = fs.readFileSync(path.join(componentsDir, 'BeforeAfterComparison.jsx'), 'utf8')
    expect(compContent).toContain('overflow-x-auto')
    expect(compContent).toContain('shrink-0')
    expect(compContent).toContain('sm:hidden')
  })
})
