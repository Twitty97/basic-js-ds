const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class Queue {
  constructor() {
    this.queue = null
  }
  
  enqueue(element) {
    let head = this.queue
    let newNode = new Node(element, null)
    
    if (!head) {
      this.queue = newNode
    } else {
      let traverseNode = head
      while (traverseNode.next) {
        traverseNode = traverseNode.next
      }
      traverseNode.next = newNode
    }
  }
  
  dequeue() {
    let head = this.queue
    
    if (!head) return 'Queue is empty!'
    
    this.queue = head.next
    return head.value
  }
  
  getUnderlyingList() {
    if(!this.queue) return 'Queue is empty!'
    return this.queue;
  }
}

module.exports = {
  Queue
};
