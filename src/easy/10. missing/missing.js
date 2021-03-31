const missing = (arr) => {
  let sum = 0
  let expectedSum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    expectedSum += i + 1
  }

  if (sum !== expectedSum) {
    expectedSum += arr.length + 1
    return expectedSum - sum
  }

  return
}

module.exports = missing
