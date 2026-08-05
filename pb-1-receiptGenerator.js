const calculateTotal = (discount, ...prices) => {
  let total = 0;
  total = prices.reduce((sum, item) => {
    return sum + item;
  });
  let discountAmount = (total * discount) / 100;
  let afterDiscount = total - discountAmount;
  return `price is: ${total},
after ${discount}% discount your price is: ${afterDiscount}`;
};

console.log(calculateTotal(10, 20, 30, 40, 50, 80, 50, 90));
