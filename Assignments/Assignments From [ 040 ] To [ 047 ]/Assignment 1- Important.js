// Assignment One "Important"

let myFriends = ['Ahmed', 'Elham', 'Osama', 'Gamal'];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(myFriends.length - (num + true), num)); // ["Ahmed", "Elham", "Osama"];

// Methods 3

myFriends.length = num;
console.log(myFriends);

// Method 4

myFriends = ['Ahmed', 'Elham', 'Osama', 'Gamal'];
myFriends.pop();
console.log(myFriends);

// Method 5

myFriends = ['Ahmed', 'Elham', 'Osama', 'Gamal'];
console.log(myFriends.splice(num - num, num));

// Method 6

myFriends = ['Ahmed', 'Elham', 'Osama', 'Gamal'];
myFriends.reverse().shift();
console.log(myFriends.reverse());
// Output => ["Ahmed", "Elham", "Osama"];
