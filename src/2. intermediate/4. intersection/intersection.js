const intersection = (arr1, arr2) => {
  const intersection = []

  const setFromArr1 = new Set(arr1)

  for (let el of arr2) {
    if (setFromArr1.has(el)) {
      intersection.push(el)
    }
  }

  return intersection
}

module.exports = intersection
