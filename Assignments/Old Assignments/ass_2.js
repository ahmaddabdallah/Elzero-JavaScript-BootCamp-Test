var Number_one = 10;
var Number_two = 20;
var addition = Number_one + "" + Number_two;

console.log(addition); // Normal Concatenate => 1020
console.log(typeof addition); // Normal Concatenate =>

var a = 10;
var b = 20;
add = `${a}${b}`;

console.log(add); // Template Literals Way => 1020
console.log(typeof add); // Template Literals Way => string

//Example 2

var Number_one = 10;
var Number_two = 20;
var addition = Number_two + "\n" + Number_one; 

console.log(addition);

/*
Normal Concatenate
20
10
*/

var a = 10;
var b = 20;
add = `${b} \n${a}`;

console.log(add);

/*
Template Literals Way
20
10
*/

var cont = `I'm In\\Love \\ """ '''++ With ++\"""\""" ""JavaScript""`

console.log(cont);


let t = 21;
let g = 20;
var content = `_${t}_${g}${t}_${g}${t}_${g}`.repeat(4)


console.log(content); // _21_2021_2021_2021_20_

