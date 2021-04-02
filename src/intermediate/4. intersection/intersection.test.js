const intersection = require('./intersection')

describe('check intersection()', () => {
  test('should return array with intersection', () => {
    expect(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])).toEqual([4, 1])
  })

  test('should return empty array', () => {
    expect(intersection([1, 5, 4, 2], [7, 12])).toEqual([])
  })
})
