// Assignment Five

let theName = 'Elzero';

console.log([...theName]);
console.log(theName.split(''));
console.log(theName.split('').map((e) => e));
console.log(Array.from(theName));
console.log([...new Set(theName)]);
console.log(Object.values(theName));


// Output
// ['E', 'l', 'z', 'e', 'r', 'o'];
