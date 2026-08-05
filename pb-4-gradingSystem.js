const gradeCheck = (num) => {
  //   if (typeof num !== "number") {
  //     return "Invalid";
  //   }

  //   if (num >= 90) {
  //     return "A+";
  //   } else if (num >= 80) {
  //     return "A";
  //   } else if (num >= 70) {
  //     return "B";
  //   } else if (num >= 60) {
  //     return "C";
  //   } else if (num >= 50) {
  //     return "D";
  //   } else {
  //     return "Fail";
  //   }

  //
  //
  //with ternary operator

  return typeof num !== "number"
    ? "Invalid"
    : num >= 90
      ? "A+"
      : num >= 80
        ? "A"
        : num >= 70
          ? "B"
          : num >= 60
            ? "C"
            : num >= 50
              ? "D"
              : "Fail";
};

console.log(gradeCheck(20));
console.log(gradeCheck(70));
console.log(gradeCheck(90));
console.log(gradeCheck(79));
console.log(gradeCheck(50));
console.log(gradeCheck(60));
