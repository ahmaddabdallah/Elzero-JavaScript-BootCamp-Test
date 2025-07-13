// Assignment one

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mix_number = mix.map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : ""
}).reduce(function (acc , curr) {
    return acc + curr
}) 

console.log(mix_number) // Elzero

// Assignment two

let myString = "EElllzzzzzzzeroo";

let repeat = myString.split("").filter(function (ele , index , arr) {
    return arr.indexOf(ele) === index
}).reduce(function (a , c) {
    return a + c
})

console.log(repeat) // Elzero

// Assignment three

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let array = myArray.reduce(function(acc , curr , index , arr) {
    return acc + curr 
})

console.log(array)
// Elzero

// Assignment three

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numbers = numsAndStrings.filter(function (ele) {
    return !isNaN(parseInt(ele)) ? ele : ""
}).map(function (negative) {
    return -negative
})

console.log(numbers)

// [-1, -10, 10, 20, -5, -3]

parseInt