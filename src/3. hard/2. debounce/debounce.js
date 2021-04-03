const debounce = (cb, ms) => {
  let timerID = null

  return function (...args) {
    if (timerID !== null) {
      clearTimeout(timerID)
    }

    timerID = setTimeout(() => {
      cb.apply(this, args)
      timerID = null
    }, ms)
  }
}

// run this script to test

let a = (n) => console.log(n)
let b = debounce(a, 100)

b(1)
b(2)
b(3) // should invoke a()
setTimeout(() => b(4), 100)
setTimeout(() => b(5), 101) // should invoke a()

module.exports = debounce
