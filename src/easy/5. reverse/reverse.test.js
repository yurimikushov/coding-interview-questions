const reverse = require('./reverse')

describe('check reverse()', () => {
  test('should return empty string', () => {
    expect(reverse('')).toBe('')
  })

  test('should return reversed string', () => {
    expect(reverse('abcdef')).toBe('fedcba')
  })
})
