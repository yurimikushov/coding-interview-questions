// merge sort

const merge = (arr1, arr2) => {
  const arr = []

  let index1 = 0
  let index2 = 0

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      arr.push(arr1[index1])
      index1 += 1
    } else {
      arr.push(arr2[index2])
      index2 += 1
    }
  }

  while (index1 < arr1.length) {
    arr.push(arr1[index1])
    index1 += 1
  }

  while (index2 < arr2.length) {
    arr.push(arr2[index2])
    index2 += 1
  }

  return arr
}

const sort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)

  const arr1 = sort(arr.slice(0, mid))
  const arr2 = sort(arr.slice(mid, arr.length))

  return merge(arr1, arr2)
}

module.exports = sort
