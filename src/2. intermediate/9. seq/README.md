# seq

Implement `seq` in terms of `reduceAsync`. `seq` takes an array of functions that return promises, and resolves them one after the other.

```JS
let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => Promise.resolve('c')

await seq([a, b, c]) // ['a', 'b', 'c']
await seq([a, c, b]) // ['a', 'c', 'b']
```
