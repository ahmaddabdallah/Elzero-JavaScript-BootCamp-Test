// Assignment Six

let arr1 = ['A', 'C', 'X'];
let arr2 = ['D', 'E', 'F', 'Y'];
let allArrays = arr1.concat(arr2).sort();

// Your Code Here
// A C D E F X Y

console.log(
  allArrays
    .slice(allArrays.length - arr1.length)
    .join('')
    .toLowerCase()
); // fxy
