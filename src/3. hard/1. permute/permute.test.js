const permute = require('./permute')

describe('check permute()', () => {
  test('should return empty array', () => {
    expect(permute('')).toEqual([])
  })

  test('should return permutations array', () => {
    expect(permute('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
  })
})
