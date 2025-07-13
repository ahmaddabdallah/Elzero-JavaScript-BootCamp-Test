// Assignment Seven

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log(numsOne.concat(numsTwo));
console.log([...numsOne, ...numsTwo]);

// NOTE: Old way ==> Fundamentals
// let newArray = [];
// for (let i = 0; i < numsOne.length; i++) {
//   newArray.push(numsOne[i]);
// }
// for (let j = 0; j < numsTwo.length; j++) {
//   newArray.push(numsTwo[j]);
// }
// console.log(newArray);

// console.log(numsOne.concat(numsTwo));
// console.log([...numsOne, ...numsTwo]);
// console.log(Array.from([numsOne, numsTwo]).flat());
// console.log(Array.from(new Set([numsOne, numsTwo].flat())));
// console.log(Array.of(...numsOne, ...numsTwo));
// // Needed Output => [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

console.log(arr4.flat(Infinity));
