const includes = require('./includes')

describe('check includes()', () => {
  test('should find 8 and return true', () => {
    expect(includes([1, 3, 8, 10], 8)).toBeTruthy()
  })

  test('should find 15 and return true', () => {
    expect(includes([1, 3, 8, 8, 15], 15)).toBeTruthy()
  })

  test(`should don't find 15 and return false`, () => {
    expect(includes([1, 3, 8, 10, 15], 9)).toBeFalsy()
  })
})
