const filter = require('./filter')

describe('check filter()', () => {
  test('should return filtered array', () => {
    expect(filter([1, 2, 3, 4], (n) => n < 3)).toEqual([1, 2])
  })
})
