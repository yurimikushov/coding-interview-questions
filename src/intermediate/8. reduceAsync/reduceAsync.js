const reduceAsync = async (arr, cb, initAcc) => {
  let reducedValue = initAcc

  for (let func of arr) {
    reducedValue = cb(reducedValue, await func())
  }

  return reducedValue
}

module.exports = reduceAsync
