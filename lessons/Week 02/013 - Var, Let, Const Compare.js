/*
    Var
        - Redeclare (Yes)
        - Access Before Declare (Undefined)
        - Variable Scope Drama [Added To Window] ()
        - Block Or Scope Function

    Let
        - Redeclare (No => Error)
        - Access Before Declare (Error)
        - Variable Scope Drama ()
        - Block Or Scope Function

    Const
        - Redeclare (No => Error)
        - Access Before Declare (Error)
        - Variable Scope Drama ()
        - Block Or Scope Function
*/

// ===== Var Examples =====

// Redeclaration
var name = 'John';
var name = 'Jane'; // Works fine

// Update
var age = 25;
age = 26; // Works fine

// Hoisting (Access Before Declaration)
console.log(city); // Outputs: undefined
var city = 'New York';

// Global Scope
var globalVar = "I'm global";
window.globalVar; // Accessible through window object

// ===== Let Examples =====

// Redeclaration
let color = 'red';
// let color = "blue"; // Error: Cannot redeclare

// Update
let count = 1;
count = 2; // Works fine

// No Hoisting
// console.log(price); // Error: Cannot access before initialization
let price = 99;

// Block Scope
{
  let blockScoped = 'Only available inside block';
  console.log(blockScoped); // Works
}
// console.log(blockScoped); // Error: Not defined

// ===== Const Examples =====

// Must be initialized
const API_KEY = 'abc123';
// const DATABASE; // Error: Must be initialized

// Cannot Update
const PI = 3.14;
// PI = 3.142; // Error: Cannot reassign

// Object/Array values can be modified
const user = { name: 'John' };
user.name = 'Jane'; // Works
user.age = 25; // Works

const numbers = [1, 2, 3];
numbers.push(4); // Works
// numbers = [5, 6, 7]; // Error: Cannot reassign

// Block Scope
{
  const DAYS = ['Mon', 'Tue'];
  console.log(DAYS); // Works
}
// console.log(DAYS); // Error: Not defined
