const highestValue = (products) => {
  let entries = Object.entries(products);

  let highest = 0;
  let expensiveItem = "";

  //using keys
  //   for (let key of keys) {
  //     if (products[key] > highest) {
  //       highest = products[key];
  //       expensiveItem = key;
  //     }
  //   }

  //using entries
  for (let [key, value] of entries) {
    if (value > highest) {
      highest = value;
      expensiveItem = key;
    }
  }
  return `The most expensive item is: ${expensiveItem}
price is: ${highest}`;
};

const obj = { Book: 700, Paper: 500, Pen: 1000 };
console.log(highestValue(obj));
