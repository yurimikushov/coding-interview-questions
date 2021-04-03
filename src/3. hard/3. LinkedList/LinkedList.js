class LinkedListNode {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  head = null

  constructor(...values) {
    values.forEach((value) => {
      this.add(value)
    })
  }

  add(value) {
    this.head = new LinkedListNode(value, this.head)
  }

  has(value) {
    if (this.head === null) {
      return false
    }

    let head = this.head

    while (head !== null) {
      if (head.value === value) {
        return true
      }

      head = head.next
    }

    return false
  }
}

module.exports = LinkedList
