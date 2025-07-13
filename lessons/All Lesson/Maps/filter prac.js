/*
    Filter
    - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let small = sentence.split(" ").filter(function(ele) {
    return ele.length <= 4;
})

console.log(small)

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let x = mix.split("").filter(function (element) {
    return !isNaN(parseInt(element))
}).map(function (element) {
    return element * element
}).join("")

console.log(x)