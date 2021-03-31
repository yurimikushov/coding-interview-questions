const missing = require('./missing')

describe('check missing()', () => {
  test('should return undefined for empty sequence', () => {
    expect(missing([])).toBe(undefined)
  })

  test('should return 2', () => {
    expect(missing([1, 4, 3])).toBe(2)
  })

  test('should return 1', () => {
    expect(missing([2, 3, 4])).toBe(1)
  })

  test('should return 3', () => {
    expect(missing([5, 1, 4, 2])).toBe(3)
  })

  test('should return undefined for sequence without missing numbers', () => {
    expect(missing([1, 2, 3, 4])).toBe(undefined)
  })
})
