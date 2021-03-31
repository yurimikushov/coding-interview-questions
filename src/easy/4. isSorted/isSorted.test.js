const isSorted = require('./isSorted')

describe('check isSorted()', () => {
  test('should return true for empty array', () => {
    expect(isSorted([])).toBeTruthy()
  })

  test('should return true for sorted array', () => {
    expect(isSorted([-Infinity, -5, 0, 3, 9])).toBeTruthy()
  })

  test('should return true for unsorted array', () => {
    expect(isSorted([3, 9, -3, 10])).toBeFalsy()
  })
})
