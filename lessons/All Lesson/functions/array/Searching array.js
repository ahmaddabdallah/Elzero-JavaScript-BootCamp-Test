/*
    Arrays Methods [Search]
    - indexOf(Search Element, From Index [Opt])
    - lastIndexOf(Search Element, From Index [Opt])
    - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let fruits = ["apple", "banana", "cherry", "apple", "orange"];

console.log(fruits.indexOf("apple")); // Output: 0
console.log(fruits.lastIndexOf("apple")); // Output: 3

if (fruits.indexOf("Apple") == -1){
    console.log("Not found")
}