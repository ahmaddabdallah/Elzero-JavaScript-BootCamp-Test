/*
    Comparison Operators
    - == Equal
    - != Not Equal

    - === Identical
    - !== Not Identical

    - > Larger Than
    - >= Larger Than Or Equal

    - < Smaller Than
    - <= Smaller Than Or Equal
*/

console.log(10 == "10") // Compare Value Only
console.log(-100 == "-100") // Compare Value Only
console.log(-100 != "-100") // Compare Value Only

console.log(10 === "10") // Compare Value + Type => false
console.log(10 !== "10") // Compare Value + Type => true
console.log(10 !== 10) // Compare Value + Type => false

console.log("Osama" === "Ahmad") // false

// Very important Question for interview
console.log(typeof "Osama" === typeof "Ahmad") // true 

console.log("Osama".length === "Ahmad".length) // true 