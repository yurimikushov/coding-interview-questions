const isPalindrome = require('./isPalindrome')

describe('check isPalindrome()', () => {
  test('should return true for empty string', () => {
    expect(isPalindrome('')).toBeTruthy()
  })

  test('should return true for palindrome without white spaces', () => {
    expect(isPalindrome('abcdcba')).toBeTruthy()
  })

  test('should return false for not palindrome', () => {
    expect(isPalindrome('abcd')).toBeFalsy()
  })

  test('should return true for with white spaces', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBeTruthy()
  })
})
