const isBalanced2 = (str) => {
  const bracesMapping = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  const order = []

  for (let ch of str) {
    if (
      !Object.keys(bracesMapping).includes(ch) &&
      !Object.values(bracesMapping).includes(ch)
    ) {
      continue
    }

    if (!bracesMapping[ch]) {
      order.push(ch)
    } else {
      if (order.pop() !== bracesMapping[ch]) {
        return false
      }
    }
  }

  return order.length === 0
}

module.exports = isBalanced2
