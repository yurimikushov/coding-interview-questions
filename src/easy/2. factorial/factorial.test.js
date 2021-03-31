const factorial = require('./factorial')

describe('check factorial()', () => {
  test('factorial of 0', () => {
    expect(factorial(0)).toBe(1)
  })

  test('factorial of 1', () => {
    expect(factorial(1)).toBe(1)
  })

  test('factorial of 720', () => {
    expect(factorial(6)).toBe(720)
  })
})
