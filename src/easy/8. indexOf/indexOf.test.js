const indexOf = require('./indexOf')

describe('check indexOf()', () => {
  test('should find element and return element index', () => {
    expect(indexOf([1, 2, 3], 1)).toBe(0)
  })

  test(`should don't find element and return -1`, () => {
    expect(indexOf([1, 2, 3], 4)).toBe(-1)
  })
})
