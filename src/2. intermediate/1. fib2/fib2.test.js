const fib2 = require('./fib2')

describe('check fib2()', () => {
  test('should return 0-th Fibonacci number', () => {
    expect(fib2(0)).toBe(0)
  })

  test('should return 1-th Fibonacci number', () => {
    expect(fib2(1)).toBe(1)
  })

  test('should return 10-th Fibonacci number', () => {
    expect(fib2(10)).toBe(55)
  })

  test('should return 50-th Fibonacci number', () => {
    expect(fib2(50)).toBe(12586269025)
  })
})
