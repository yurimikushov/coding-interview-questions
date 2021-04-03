const reduce = (arr, cb, initAcc) => {
  let reducedValue = initAcc

  for (let el of arr) {
    reducedValue = cb(reducedValue, el)
  }

  return reducedValue
}

module.exports = reduce
