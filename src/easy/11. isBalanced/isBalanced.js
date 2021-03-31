const isBalanced = (str) => {
  let opened = 0

  for (let ch of str) {
    if (ch === '}' && opened === 0) {
      return false
    }

    if (ch === '{') {
      opened += 1
    } else if (ch === '}') {
      opened -= 1
    }
  }

  return opened === 0
}

module.exports = isBalanced
