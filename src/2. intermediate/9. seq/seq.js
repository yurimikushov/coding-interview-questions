const seq = async (arr) => {
  const result = []

  for (let func of arr) {
    result.push(await func())
  }

  return result
}

module.exports = seq
