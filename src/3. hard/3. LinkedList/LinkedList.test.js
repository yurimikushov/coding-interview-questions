const LinkedList = require('./LinkedList')

describe('check LinkedList', () => {
  let list = new LinkedList(1, 2, 3)
  list.add(4)
  list.add(5)

  test('should have value that was added by constructor', () => {
    expect(list.has(1)).toBeTruthy()
  })

  test('should have value that was added by add() method', () => {
    expect(list.has(4)).toBeTruthy()
  })

  test(`should haven't value that wasn't added`, () => {
    expect(list.has(6)).toBeFalsy()
  })
})
