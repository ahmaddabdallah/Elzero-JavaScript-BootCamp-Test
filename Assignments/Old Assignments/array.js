// Example one
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0 , 3)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Example two
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.slice(1 , 3)); // ["Eman", "Osama"]
friends.shift()
friends.pop()
console.log(friends); // ["Eman", "Osama"]

// Example two
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne , arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

// Example three

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2 , 6).toUpperCase()); // ZERO

// Example four

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
let contacts = allArrs.concat(arr1 , arr2).sort()
let two = contacts.slice(4 , 7).toString()
let three = two.toLowerCase().replace(/,/g , '')
console.log(three); 
