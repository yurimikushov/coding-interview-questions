const isPalindrome = (str) => {
  if (str.length <= 1) {
    return true
  }

  const chars = str.split('').filter((char) => char !== ' ')

  for (let i = 0; i < chars.length / 2; i++) {
    if (chars[i].toLowerCase() !== chars[chars.length - 1 - i].toLowerCase()) {
      return false
    }
  }

  return true
}

module.exports = isPalindrome
