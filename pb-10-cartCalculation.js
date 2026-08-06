const cartCalculation = (products) => {
  let totalItem = 0;
  let totalPrice = 0;

  for (let product of products) {
    const { name, price, qty } = product;
    totalItem += qty;
    totalPrice = totalPrice + price * qty;
  }
  return `Total: ${totalItem || 0} items, total price: ${totalPrice || 0}`;
};

const arr = [
  { name: "Pen", price: 100, qty: 1 },
  { name: "Nootbook", price: 33.33, qty: 2 },
];

console.log(cartCalculation(arr));
console.log(cartCalculation([]));
