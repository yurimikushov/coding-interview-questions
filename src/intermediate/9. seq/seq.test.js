const seq = require('./seq')

describe('check reduceAsync()', () => {
  let a = () => Promise.resolve('a')
  let b = () => Promise.resolve('b')
  let c = () => Promise.resolve('c')

  test('should return sequential array', async () => {
    expect(await seq([a, b, c])).toEqual(['a', 'b', 'c'])
  })

  test('should return non-sequential array', async () => {
    expect(await seq([a, c, b])).toEqual(['a', 'c', 'b'])
  })
})
