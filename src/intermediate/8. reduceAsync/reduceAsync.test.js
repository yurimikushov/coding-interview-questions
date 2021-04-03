const reduceAsync = require('./reduceAsync')

describe('check reduceAsync()', () => {
  let a = () => Promise.resolve('a')
  let b = () => Promise.resolve('b')
  let c = () => new Promise((resolve) => setTimeout(() => resolve('c'), 100))

  test('should executed with empty array as initial accumulator', async () => {
    expect(
      await reduceAsync([a, b, c], (acc, value) => [...acc, value], [])
    ).toEqual(['a', 'b', 'c'])
  })

  test('should executed with filled array as initial accumulator', async () => {
    expect(
      await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d'])
    ).toEqual(['d', 'a', 'c', 'b'])
  })
})
