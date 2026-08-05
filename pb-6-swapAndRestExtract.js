// let a = 20;
// let b = 90;

//normal
// let temp = a;
// a = b;
// b = temp;

//use destructuring
// [b, a] = [a, b];

// console.log(a, b);

let numbers = [1, 2, 4, 5, 6, 5, 7, 8, 6, 4, 8, 9];

let [first, second, ...nums] = numbers;
console.log(
  "first number is:",
  first,
  "second num:",
  second,
  "and rest of the array is : ",
  nums,
  "length is: ",
  nums.length,
);
