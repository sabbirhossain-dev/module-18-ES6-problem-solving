const shippingCostCalculation = (amount, cost = 60) => {
  if (amount >= 1000) {
    return "Free Shipping";
  }
  return `Shipping fee: ${cost} Taka`;
};

console.log(shippingCostCalculation(1200));
console.log(shippingCostCalculation(500));
console.log(shippingCostCalculation(500, 100));
