// Use Reduce To Get The Output
// Do NOT Use Array.flat()

let myArray = ['E', 'l', 'z', ['e', 'r'], 'o'];

let newArray = myArray
  .reduce((acc, current) => `${acc}${current}`)
  .replace(',', '');

console.log(newArray);

// Elzero

// Another Solution
let word = myArray
  .reduce((acc, curr) => acc.concat(curr), [])
  .reduce((acc, curr) => `${acc}${curr}`);

console.log(word); // Output => "Elzero"
