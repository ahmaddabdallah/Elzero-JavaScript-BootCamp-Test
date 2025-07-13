/*
    Map
        - Swap Cases
        - Inverted Numbers
        - Ignore Boolean Value
*/

let swappingCases = 'elZERo';
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = 'Elz123er4o';

// Normal Way to Use Swap

// let newArray = [];
// for (let i = 0; i < swappingCases.length; i++) {
//   if (swappingCases[i] === swappingCases[i].toUpperCase()) {
//     newArray.push(swappingCases[i].toLowerCase());
//   } else {
//     newArray.push(swappingCases[i].toUpperCase());
//   }
// }

// console.log(newArray.join(''));

let sw = swappingCases
  .split('')
  .map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join('');

console.log(sw);

// Arrow Function Version

// let sw = swappingCases
//     .split("")
//     .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
//     .join("");

// console.log(sw);

let inv = invertedNumbers.map((ele) => -ele);

console.log(inv);

let ign = ignoreNumbers
  .split('')
  .map((ele) => {
    return isNaN(parseInt(ele)) ? ele : '';
  })
  .join('');

console.log(ign);
