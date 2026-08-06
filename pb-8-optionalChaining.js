let user1 = {
  name: "sabbir",
  address: {
    city: "Tangail",
    thana: "Basail",
    phone: {
      personal: "01981441578",
      official: "01570253806",
    },
  },
};
let user2 = {
  name: "sabbir",
  address: {
    city: "Tangail",
    thana: "Basail",
    // phone: {
    //   personal: "01981441578",
    //   official: "01570253806",
    // },
  },
};

const getInformation = (user) => {
  return user?.address?.phone?.personal;
};
console.log(getInformation(user2));
