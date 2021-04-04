const HashMap = require('./HashMap')

describe('check HashMap', () => {
  let map = new HashMap()
  map.set('abc', 123)
  map.set('foo', 'bar')
  map.set('foo', 'baz')

  test('should contain value that is set earlier', () => {
    expect(map.get('abc')).toBe(123)
  })

  test('should contain value that is re-set', () => {
    expect(map.get('foo')).toBe('baz')
  })

  test(`should not contain value that isn't set earlier`, () => {
    expect(map.get('def')).toBeUndefined()
  })
})
