/*
  Assignment 2: Remove Duplicate Letters

  This problem asks us to:
  1. Take a string with repeated letters ('EElllzzzzzzzeroo')
  2. Use the filter() function to remove duplicate consecutive letters
  3. Return a string with each letter appearing only once ('Elzero')

  The filter() function allows us to keep only elements that pass a test.
  We need to create a test that keeps only the first occurrence of each letter
  when it appears consecutively in the string.
*/

// Use Filter Function To Remove The Duplicated Letters

let myString = 'EElllzzzzzzzeroo';

let duplicateString = myString
  .split('')
  .filter((ele, index, arr) => ele !== arr[index - 1])
  .join('');

console.log(duplicateString);
// Elzero
