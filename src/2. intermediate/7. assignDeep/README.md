# includes

Like [Object.assign](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), but merges objects deeply. For the sake of simplicity, you can assume that objects can contain only numbers and other objects (and not arrays, functions, etc.).

```JS
assignDeep({ a: 1 }, {})              // { a: 1 }
assignDeep({ a: 1 }, { a: 2 })        // { a: 2 }
assignDeep({ a: 1 }, { a: { b: 2 } }) // { a: { b: 2 } }
assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }) // { a: { b: { c: 1, d: 2 }}, e: 3 }
```
