# reduceAsync

Like the [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) you implemented in the Easy section, but each item must be resolved before continuing onto the next.

```JS
let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))

await reduceAsync([a, b, c], (acc, value) => [...acc, value], []) // ['a', 'b', 'c']
await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']) // ['d', 'a', 'c', 'b']
```
