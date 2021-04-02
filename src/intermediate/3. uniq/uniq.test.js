const uniq = require('./uniq')

describe('check uniq()', () => {
  test(`should return empty array`, () => {
    expect(uniq([])).toEqual([])
  })

  test(`should return array with unique numbers`, () => {
    expect(uniq([1, 4, 2, 2, 3, 4, 8])).toEqual([1, 4, 2, 3, 8])
  })
})
