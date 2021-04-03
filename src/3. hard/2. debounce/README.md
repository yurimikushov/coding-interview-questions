# debounce

Implement the [debounce](https://lodash.com/docs/4.17.4#debounce) function.

```JS
let a = () => console.log('foo')
let b = debounce(a, 100)

b()
b()
b() // only this call should invoke a()
```
