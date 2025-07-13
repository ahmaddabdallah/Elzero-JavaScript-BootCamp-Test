// TODO: Assignment Three

let arr1 = ['Ahmed', 'Sameh', 'Sayed'];
let arr2 = ['Mohamed', 'Gamal', 'Amir'];
let arr3 = ['Haytham', 'Shady', 'Mahmoud'];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

let allNames = [...arr1, ...arr2, ...arr3];

const [c, , , , , , , a, b] = allNames;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// NOTE: Output => My Best Friends: Shady, Mahmoud, Ahmed

// NOTE:
// const [a, b, c] = arr3.concat(arr1).slice(1, 4);

// TODO: -- Another Solution --
// arr3[0] = arr1[0];
// const [c, b, a] = arr3.sort();
