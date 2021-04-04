# HashMap

Implement a [HashMap](https://en.wikipedia.org/wiki/Hash_table) class without using JavaScript’s built-in objects (`{}`) or `Maps`. You are provided a `hash()` function that takes a string and returns a number (the numbers are mostly unique, *but sometimes two different strings will return the same number*):

```JS
function hash (string) {
  return string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}
```

Your HashMap should support just 2 methods, get, set:

```JS
let map = new HashMap()
map.set('abc', 123)                   // undefined
map.set('foo', 'bar')                 // undefined
map.set('foo', 'baz')                 // undefined
map.get('abc')                        // 123
map.get('foo')                        // 'baz'
map.get('def')                        // undefined
```
