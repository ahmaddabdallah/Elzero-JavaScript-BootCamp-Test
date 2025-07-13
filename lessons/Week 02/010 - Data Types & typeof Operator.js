/* 
    String => Text => Ahmad
    Number => Whole Numbers => 5000
    Number - Float => 500.120
    Array => Object => [1,2,4,5,6,7]
    Object => Dictionary => {name: "Ahmad", age:, country:"Egypt"}
    Boolean => Boolean => True or False
*/

console.log("'Ahmad Abdallah' =>", typeof 'Ahmad Abdallah'); // String
console.log("5000 =>", typeof 5000); // Number
console.log("[1, 23, 4, 5] =>", typeof [1, 23, 4, 5]); // Array (typeof returns 'object')
console.log("{ name: 'Ahmad', age: 18, country: 'Egypt' } =>", typeof 
     { name: 'Ahmad', age: 18, country: 'Egypt' }); // Object => Dictionary
console.log("true =>", typeof true); // Boolean
console.log("false =>", typeof false); // Boolean
console.log("null =>", typeof null); // Object
console.log("undefined =>", typeof undefined); // Undefined

console.log("'Hello world' =>", typeof 'Hello world'); // String

console.log(`Ahmad` === 'Mohamed');

console.log("`Ahmad` === 'Mohamed' =>", `Ahmad` === 'Mohamed', "=>", typeof (`Ahmad` === 'Mohamed')); // Boolean

let myVariable;
console.log("myVariable =>", myVariable, "=>", typeof myVariable); // undefined

// Loosely typed languages (like JavaScript) allow variables to hold any type of data and can change type at runtime.
// Strongly typed languages (like Java, C#, or TypeScript in strict mode) require variables to have a specific type, and type changes are not allowed without explicit conversion.

// Example of loosely typed behavior in JavaScript:
let value = 42; // value is a number
console.log("value (number):", value, "=>", typeof value);

value = "Now I'm a string!"; // value is now a string
console.log("value (string):", value, "=>", typeof value);

// In a strongly typed language, the above reassignment would cause an error unless you explicitly convert types or declare a new variable.
console.log("JavaScript is loosely typed because variables can change type at runtime.");
