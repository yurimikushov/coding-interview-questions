const fib = require('./fib')

describe('check fib()', () => {
  test('should return 0-th Fibonacci number', () => {
    expect(fib(0)).toBe(0)
  })

  test('should return 1-th Fibonacci number', () => {
    expect(fib(1)).toBe(1)
  })

  test('should return 10-th Fibonacci number', () => {
    expect(fib(10)).toBe(55)
  })

  test('should return 20-th Fibonacci number', () => {
    expect(fib(20)).toBe(6765)
  })
})
