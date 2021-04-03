const permute = (str) => {
  if (str.length === 0) {
    return []
  }

  if (str.length === 1) {
    return [str]
  }

  const result = []

  for (let i = 0; i < str.length; i++) {
    const remainingChars = str.slice(0, i).concat(str.slice(i + 1))
    const permutations = permute(remainingChars).map(
      (permutation) => str[i] + permutation
    )

    result.push(...permutations)
  }

  return result
}

module.exports = permute
