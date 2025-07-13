/*
    Object
        - Intro and What Is Object
        - Testing Window Object
        - Accessing Object
*/

let user = {
  // Propertiese
  theName: 'Ahmad',
  theAge: 20,
  address: 'Cairo',
  //   Methods
  sayHello: () => {
    return 'Hello World';
  },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());
