/*
    Object
    - Dig Deeper
    - Dot Notation vs Bracket Notation
    - Dynamic Property Name
*/

let test = "country"

let code = {
    name : "Ahmad",
    country: "Egypt"
}

console.log(code.name)
console.log(code.country) // Egypt
console.log(code.test) // Undefined 
console.log(code[test]) // Undefined 