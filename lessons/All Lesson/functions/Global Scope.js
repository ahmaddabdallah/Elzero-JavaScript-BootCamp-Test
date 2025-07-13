/*
    Global Scope
*/

var a = 1;
let b = 2;

function show_text(){
    var a = 10;
    let b = 20;
    console.log(`From Local Scope: ${a}`)
    console.log(`From Local Scope: ${b}`)
}


console.log(`From Global Scope Is ${a}`)
console.log(`From Global Scope Is ${b}`)

show_text()

let x = 10;

if(10 === 10){
    let x = 50;
}

console.log(x)