const reduce = require('./reduce')

describe('check reduce()', () => {
  test('should return reduced value', () => {
    expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toBe(10)
  })
})
