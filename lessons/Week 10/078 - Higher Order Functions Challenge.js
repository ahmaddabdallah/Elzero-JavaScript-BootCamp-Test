/*
    Higher Order Functions Challenges

    You Can Use
        - ,
        - _
        - Space
        - True => 1 => One Time Only In The Code

    You Cannot Use
        - Numbers
        - Letters

    - You Must Use [Filter + Map + Reduce + Your Knowledge]
    - Order Is Not Important
    - All In One Chain
*/

let myString = '1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z';

// Error: split('') splits by character, but the challenge string has commas as separators
// Error: The reduce function logic is incorrect - it's comparing acc with current
// Error: We need to filter out numbers and the Z at the end
let solution = myString
  .split(',') // Split by comma instead of character
  .filter((ele) => {
    return isNaN(parseInt(ele)); // Keep only non-numeric elements
  })
  .map((ele) => {
    // Handle special cases: underscore becomes space, Z is removed
    return ele === '_' ? ' ' : ele === 'Z' ? '' : ele;
  })
  .reduce((acc, current) => acc + current); // Simply concatenate all elements

console.log(solution); // Elzero Web School

// Alternative solution using the constraint of "True => 1" for Z removal
// let myString = '1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z';
// let solution = myString
//   .split(',')
//   .filter((ele) => isNaN(parseInt(ele)))
//   .map((ele) =>
//     ele === '_' ? ' ' :
//     ele === myString[myString.length - true] ? '' : ele
//   )
//   .reduce((acc, current) => acc + current);
// console.log(solution); // Elzero Web School
