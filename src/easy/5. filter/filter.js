const filter = (arr, cb) => {
  const filtredArr = []

  arr.forEach((num) => {
    if (cb(num)) {
      filtredArr.push(num)
    }
  })

  return filtredArr
}

module.exports = filter
