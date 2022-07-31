const SLL = require("../src/LinkedList/singlyLinkedList")

const runSll = () => {
  const sll = new SLL()
  sll.insertFirst(2)
  sll.insertFirst(1)
  sll.insertLast(3)
  sll.insertFirst(0)
  console.log("Output:-")
  sll.display()
  console.log("Expected Output:-", [0, 1, 2, 3])
  console.log("Size of SLL:-", sll.getSize())
}

module.exports = runSll
