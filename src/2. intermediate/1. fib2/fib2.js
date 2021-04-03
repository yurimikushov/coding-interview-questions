const fib2 = (n) => {
  const memo = { 0: 0, 1: 1 }

  const fibMemo = (n) => {
    if (n in memo) {
      return memo[n]
    }

    memo[n] = fibMemo(n - 2) + fibMemo(n - 1)

    return memo[n]
  }

  return fibMemo(n)
}

module.exports = fib2
