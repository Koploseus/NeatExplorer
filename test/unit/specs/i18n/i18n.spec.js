import i18n from '@/i18n'

describe('i18n', () => {
  it('should return a translation for a given phrase', () => {
    expect(i18n.t('No Results')).toBe('No Results')
    expect(i18n.t('Reward (token)', { token: 'ARK' })).toBe('Reward (ARK)')
  })

  it('should be possible to switch languages', () => {
    expect(i18n.t('No Results', 'nl')).toBe('Geen Resultaten')
    expect(i18n.t('No Results', 'pt')).toBe('Sem resultados')
    expect(i18n.t('No Results', 'pl')).toBe('Brak wyników')
  })
})
