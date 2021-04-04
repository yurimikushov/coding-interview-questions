// FIXME: should resolve conflicts.
// The task says that sometimes hash() can return the same number for two different strings.
// To resolve conflicts might store values in a linked list (a linked list in an array item).

class HashMap {
  storage = []

  set(key, value) {
    this.storage[this._hash(key)] = value
  }

  get(key) {
    return this.storage[this._hash(key)]
  }

  _hash(str) {
    return str.split('').reduce((a, b) => {
      return (a << 5) + a + b.charCodeAt(0)
    }, 5381)
  }
}

// Note: below is a variant with storage and hash function encapsulation

// function createHashMap() {
//   const storage = []

//   const hash = (str) => {
//     return str.split('').reduce((a, b) => {
//       return (a << 5) + a + b.charCodeAt(0)
//     }, 5381)
//   }

//   return {
//     set(key, value) {
//       storage[hash(key)] = value
//     },
//     get(key) {
//       return storage[hash(key)]
//     },
//   }
// }

module.exports = HashMap
