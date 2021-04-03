const assignDeep = require('./assignDeep')

describe('check assignDeep()', () => {
  test('should return target object', () => {
    expect(assignDeep({ a: 1 }, {})).toEqual({ a: 1 })
  })

  test('should replace primitive to primitive', () => {
    expect(assignDeep({ a: 1 }, { a: 2 })).toEqual({ a: 2 })
  })

  test('should replace primitive to object', () => {
    expect(assignDeep({ a: 1 }, { a: { b: 2 } })).toEqual({ a: { b: 2 } })
  })

  test('should assign deep nested objects', () => {
    expect(
      assignDeep({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } }, e: 3 })
    ).toEqual({ a: { b: { c: 1, d: 2 } }, e: 3 })
  })
})
