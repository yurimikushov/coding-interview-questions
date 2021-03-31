const isPrime = require('./isPrime')

describe('check isPrime()', () => {
  test(`0 isn't prime`, () => {
    expect(isPrime(0)).toBeFalsy()
  })

  test(`1 isn't prime`, () => {
    expect(isPrime(1)).toBeFalsy()
  })

  test(`17 is prime`, () => {
    expect(isPrime(17)).toBeTruthy()
  })

  test(`10000000000000 isn't prime`, () => {
    expect(isPrime(10000000000000)).toBeFalsy()
  })
})
