class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
    console.log("Enqueued:", item);
    console.log("Current queue:", this.items)
  }

  dequeue() {
    return this.items.shift();
  }
}

const queue = new Queue();

function handleAdd(){
  const randomValue = Math.floor(Math.random() * 100);
  queue.enqueue(randomValue);
}

document.getElementById("addBtn").onclick = handleAdd;