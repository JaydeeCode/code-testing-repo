const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Mouse', price: 25, category: 'Electronics' },
  { name: 'Keyboard', price: 75, category: 'Electronics' },
  { name: 'T-Shirt', price: 20, category: 'Apparel' },
  { name: 'Jeans', price: 60, category: 'Apparel' },
  { name: 'Book', price: 15, category: 'Books' },
  { name: 'Monitor', price: 300, category: 'Electronics' }
];

// 1. Filter: Create a new array containing only products from the 'Electronics' category.
const electronicsProducts = products.filter(function(product) {
  return product.category === 'Electronics';
});
// Or using an arrow function (more common in modern JS):
// const electronicsProducts = products.filter(product => product.category === 'Electronics');

console.log('Electronics Products:', electronicsProducts);
/*
Expected Output for electronicsProducts:
[
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Mouse', price: 25, category: 'Electronics' },
  { name: 'Keyboard', price: 75, category: 'Electronics' },
  { name: 'Monitor', price: 300, category: 'Electronics' }
]
*/

// 2. Map: From the filtered 'Electronics' products, create a new array that contains only their names.
const electronicsNames = electronicsProducts.map(function(product) {
  return product.name;
});
// Or using an arrow function:
// const electronicsNames = electronicsProducts.map(product => product.name);

console.log('Electronics Names:', electronicsNames);
/*
Expected Output for electronicsNames:
[ 'Laptop', 'Mouse', 'Keyboard', 'Monitor' ]
*/

// 3. Reduce: Calculate the total price of all products in the original products array.
const totalPrice = products.reduce(function(accumulator, product) {
  return accumulator + product.price;
}, 0); // The '0' is the initial value of the accumulator

// Or using an arrow function:
// const totalPrice = products.reduce((accumulator, product) => accumulator + product.price, 0);

console.log('Total Price:', totalPrice);
/*
Expected Output for totalPrice:
1700
*/