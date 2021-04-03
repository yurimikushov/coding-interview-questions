const isBalanced = require('./isBalanced')

describe('check missing()', () => {
  test(`should return false for '}{'`, () => {
    expect(isBalanced('}{')).toBeFalsy()
  })

  test(`should return false for '{{}'`, () => {
    expect(isBalanced('{{}')).toBeFalsy()
  })

  test(`should return true for '{}{}'`, () => {
    expect(isBalanced('{}{}')).toBeTruthy()
  })

  test(`should return true for 'foo { bar { baz } boo }'`, () => {
    expect(isBalanced('foo { bar { baz } boo }')).toBeTruthy()
  })

  test(`should return false for 'foo { bar { baz }'`, () => {
    expect(isBalanced('foo { bar { baz }')).toBeFalsy()
  })

  test(`should return false for 'foo { bar } }'`, () => {
    expect(isBalanced('foo { bar } }')).toBeFalsy()
  })
})
