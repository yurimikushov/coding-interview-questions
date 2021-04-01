const isBalanced2 = require('./isBalanced2')

describe('check isBalanced2()', () => {
  test(`should return true for '(foo { bar (baz) [boo] })'`, () => {
    expect(isBalanced2('(foo { bar (baz) [boo] })')).toBeTruthy()
  })

  test(`should return false for 'foo { bar { baz }'`, () => {
    expect(isBalanced2('foo { bar { baz }')).toBeFalsy()
  })

  test(`should return true for 'foo { (bar [baz] } )'`, () => {
    expect(isBalanced2('foo { (bar [baz] } )')).toBeFalsy()
  })
})
