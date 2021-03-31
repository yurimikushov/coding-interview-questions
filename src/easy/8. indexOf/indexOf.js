// const indexOf = (arr, value) => {
//   let startIndex = 0
//   let endIndex = arr.length - 1

//   while (startIndex <= endIndex) {
//     const pivot = Math.floor((startIndex + endIndex) / 2)

//     if (arr[pivot] === value) {
//       return pivot
//     }

//     if (arr[pivot] < value) {
//       startIndex = pivot + 1
//     } else {
//       endIndex = pivot - 1
//     }
//   }

//   return -1
// }

const indexOf = (arr, value) => {
  if (arr.length === 0) {
    return -1
  }

  const pivot = Math.floor(arr.length / 2)

  if (arr[pivot] === value) {
    return pivot
  }

  if (arr[pivot] > value) {
    return indexOf(arr.slice(0, pivot), value)
  }

  return indexOf(arr.slice(pivot + 1), value)
}

module.exports = indexOf
