/*
    Constructor Function
*/

function User(id, userName, salary) {
  this.id = id;
  this.userName = userName;
  this.salary = salary + 1000;
}

let userOne = new User(1, 'Ahmad', 6000);
let userTwo = new User(2, 'Ali', 7500);
let userThree = new User(3, 'Osama', 10000);

// Output
console.log(
  `Your id Is : ${userOne.id} , UserName Is : ${userOne.userName} , Your Salary Is : ${userOne.salary}`
);

console.log(
  `Your id Is : ${userTwo.id} , UserName Is : ${userTwo.userName} , Your Salary Is : ${userTwo.salary}`
);

console.log(
  `Your id Is : ${userThree.id} , UserName Is : ${userThree.userName} , Your Salary Is : ${userThree.salary}`
);

// TODO: Example:
// const userOne = {
//   id: 100,
//   username: 'Elzero',
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: 'Hassan',
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: 'Sayed',
//   salary: 7000,
// };

// Output

// console.log(userOne.salary);
// userOne.salary += 1000;

// console.log(userOne.salary);
