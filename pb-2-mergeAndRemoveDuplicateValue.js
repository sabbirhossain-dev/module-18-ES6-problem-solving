let arr1 = [10, 20, 40, 20, 50, 90];
let arr2 = [30, 10, 29, 210, 50, 70];

let mergedArr = [...arr1, ...arr2];

//normal method

// let uniqueArr = [];
// for (let i = 0; i < mergedArr.length; i++) {
//   if (!uniqueArr.includes(mergedArr[i])) {
//     uniqueArr.push(mergedArr[i]);
//   }
// }

//set function
let uniqueArr = [...new Set(mergedArr)];

console.log(mergedArr);
console.log(uniqueArr);
console.log(uniqueArr.length);
