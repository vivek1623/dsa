const SLL = require("../src/LinkedList/singlyLinkedList")

const runSllTestCases = () => {
  const sll = new SLL()
  sll.insertFirst(2)
  sll.insertFirst(1)
  sll.insertLast(3)
  sll.insertFirst(0)
  sll.display()
}

module.exports = runSllTestCases
