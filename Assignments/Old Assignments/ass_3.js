// Example one

let a = "Elzero";
console.log(a.charAt(0).toLowerCase()); // e
console.log(a.slice(0 , 1).toLowerCase()); // e
console.log(a[0].toLowerCase()); // e
console.log(a.substring(0 , 1).toLowerCase()); // e
console.log(a.substr(0 , 1).toLowerCase()); // e
console.log(a.charAt(0).toLowerCase().repeat(3)); // eee

// Example two

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.startsWith(letterZ , 2)); // True
console.log(word.startsWith(letterE , 3)); // True
console.log(word.toUpperCase().endsWith(letterO ,10)); // True

// Example three

