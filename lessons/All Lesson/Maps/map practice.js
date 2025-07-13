/*
    Map
    - Swap Cases
    - Inverted Numbers
    - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let swap = swappingCases.split("").map(function(ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
}).join("")

console.log(swap)

let invert = invertedNumbers.map(function(inv) {
    return -inv
})

console.log(invert)

let ignore = ignoreNumbers.split("").map(function(ign) {
    return isNaN(parseInt(ign)) ? ign : ""
}).join("")

console.log(ignore)