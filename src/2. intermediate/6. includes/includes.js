const includes = (arr, value) => {
  let startIndex = 0
  let endIndex = arr.length - 1

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2)

    if (arr[midIndex] === value) {
      return true
    }

    if (arr[midIndex] < value) {
      startIndex = midIndex + 1
    } else {
      endIndex = midIndex - 1
    }
  }

  return false
}

module.exports = includes
