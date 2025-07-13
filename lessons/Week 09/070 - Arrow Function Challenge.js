/*
    Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// Regular Function
// let names = function (...userNames) {
//   // Parameter ?
//   return `String [${userNames.join('], [')}] => Done`;
// };

// Arrow Function
let names = (...Names) => {
  return `String [${Names.join('], [')}]`;
};

console.log(names('Osama', 'Mohamed', 'Ali', 'Ibrahim'));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => {
  return one + two + +nums;
};

let calcTwo = (one, two, ...nums) => one + two + +nums;

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80
console.log(calcTwo(10, myNumbers[0], myNumbers[1])); // 80
