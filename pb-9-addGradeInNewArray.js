const studentGradingSystem = (students) => {
  const getGrade = (marks) => {
    return marks >= 90
      ? "A+"
      : marks >= 80
        ? "A"
        : marks >= 70
          ? "B"
          : marks >= 60
            ? "C"
            : marks >= 50
              ? "D"
              : "Fail";
  };

  //   let studentsCopy = [...students];
  const modifyArr = studentsCopy.map((student) => {
    const { name, marks } = student;
    const newArr = { name, marks, grade: getGrade(marks) };
    return newArr;
  });
  return modifyArr;
};

const arr = [
  {
    name: "Sabbir",
    marks: 70,
  },
  {
    name: "Hossain",
    marks: 37,
  },
  {
    name: "Rasel",
    marks: 91,
  },
];
console.log(studentGradingSystem(arr));
