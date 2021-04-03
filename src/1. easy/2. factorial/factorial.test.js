const factorial = require('./factorial')

describe('check factorial()', () => {
  test('should return factorial of 0', () => {
    expect(factorial(0)).toBe(1)
  })

  test('should return factorial of 1', () => {
    expect(factorial(1)).toBe(1)
  })

  test('should return factorial of 720', () => {
    expect(factorial(6)).toBe(720)
  })
})
