/*
    Function
    - Anonymous Function
    - Calling Named Function vs Anonymous Function
    - Argument To Other Function
    - Task Without Name
    - SetTimeout
*/

function calculate(num1 , num2) {
    let result = num1 + num2;
    return result;
}

console.log(calculate(10 , 20))
console.log(calculate(60 , 50))

document.getElementById("show").onclick = function (){
    let result = calculate(30 , 40);
    console.log(`The total result of the two numbers IS : ${result}`);
}