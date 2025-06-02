class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heap.sort((a, b) => a - b);
  }

  extractMin() {
    return this.heap.shift();
  }
}

const heap = new MinHeap();
heap.insert(5);
heap.insert(2);
heap.insert(8);
console.log(heap.extractMin()); // 2