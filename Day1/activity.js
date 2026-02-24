// Problem 1: Apply Discount to Expensive Products

// Problem Statement:

// You are building a pricing module for an online store.

// Given the following array:



// Requirements:

// 1. Use `map()`.
// 2. Use an arrow function.
// 3. Use the spread operator.
// 4. If `price > 500`, add a new property `discountedPrice` with a 20% discount applied.
// 5. If `price <= 500`, return the product unchanged.
// 6. Do not mutate the original array or objects.

// ---

const products = [
  { id: 1, name: "Phone", price: 800 },
  { id: 2, name: "Mouse", price: 40 },
  { id: 3, name: "Laptop", price: 1200 }
];

const updatedProducts = products.map(product =>
  product.price > 500
    ? {
        ...product,
        discountedPrice: product.price * 0.8
      }
    : product
);

console.log(updatedProducts);


const users = [
  { firstName: "Ali", lastName: "Khan" },
  { firstName: "Sara", lastName: "Ahmed" }
];

const updatedUsers = users.map(user => ({
  ...user,
  fullName: `${user.firstName} ${user.lastName}`
}));

console.log(updatedUsers);

const inventory = [
  { item: "Pen", quantity: 10 },
  { item: "Notebook", quantity: 5 },
  { item: "Pencil", quantity: 8 }
];

const updatedInventory = inventory.map(product => ({
  ...product,
  quantity: product.quantity + 2
}));

console.log(updatedInventory);

const orders = [
  { id: 1, total: 250 },
  { id: 2, total: 80 },
  { id: 3, total: 150 }
];

const updatedOrders = orders.map(order => ({
  ...order,
  priority: order.total >= 200
}));

console.log(updatedOrders);