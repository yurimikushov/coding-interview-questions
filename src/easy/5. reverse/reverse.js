const reverse = (str) => {
  if (str.length <= 1) {
    return str
  }

  const chars = str.split('')

  for (let i = 0; i < chars.length / 2; i++) {
    const temp = chars[i]
    chars[i] = chars[chars.length - 1 - i]
    chars[chars.length - 1 - i] = temp
  }

  return chars.join('')
}

module.exports = reverse
