/**
 * Represents a simple Queue data structure using an array.
 * 
 * @class Queue
 * @classdesc Implements FIFO (First-In-First-Out) queue operations.
 * 
 * @constructor
 * Initializes the queue with an empty array to store items.
 * 
 * @property {Array} items - Internal array to hold the elements of the queue.
 * 
 * @method enqueue
 * Adds an item to the end of the queue.
 * @param {*} item - The element to be added to the queue.
 * 
 * @method dequeue
 * Removes and returns the item at the front of the queue.
 * @returns {*} The element removed from the front of the queue, or undefined if the queue is empty.
 */
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }
}

const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
console.log(queue.dequeue()); // "A"