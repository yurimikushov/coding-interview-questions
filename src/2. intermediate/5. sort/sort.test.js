const sort = require('./sort')

describe('check sort()', () => {
  test('should return empty array', () => {
    expect(sort([])).toEqual([])
  })

  test('should return empty array', () => {
    expect(sort([-4, 1, Infinity, 3, 3, 0])).toEqual([-4, 0, 1, 3, 3, Infinity])
  })
})
