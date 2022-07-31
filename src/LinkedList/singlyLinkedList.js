// define the structure of singly linked list node structure

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SLL {
  constructor() {
    this.head = null
    this.size = 0
  }

  getSize() {
    return this.size
  }

  display() {
    if (this.head === null) console.log("Singly Linked List is Empty")
    else {
      let current = this.head
      while (current) {
        console.log(current.value)
        current = current.next
      }
    }
  }

  insertFirst(value) {
    const node = new Node(value)
    node.next = this.head
    this.head = node
    this.size++
  }

  insertLast(value) {
    const node = new Node(value)
    if (this.head === null) {
      node.next = this.head
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }
}

module.exports = SLL
