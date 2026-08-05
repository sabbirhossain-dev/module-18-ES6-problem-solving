const extractObj = (obj) => {
  const {
    user: { name: userName, age = 18 },
  } = obj;
  console.log(`Name: ${userName}   Age: ${age}`);
};

extractObj({ user: { name: "Sabu", age: 22 } });
extractObj({ user: { name: "Nusu", age: 21 } });
extractObj({ user: { name: "Busu" } });
