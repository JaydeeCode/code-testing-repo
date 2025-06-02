class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }
}

const stack = new Stack();
stack.push("X");
stack.push("Y");
console.log(stack.pop()); // "Y"