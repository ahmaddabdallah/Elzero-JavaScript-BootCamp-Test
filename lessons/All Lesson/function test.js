// Function revision on all lesson at function

function say() {
    let friends = ["أحمد", "علي", "حسن", "عمر", "أسامة", "سلمان", "محمد"];
    for (let i = 0; i < friends.length; i++) {	
        console.log(`ازيك يا${friends[i]}`)
    }
}
say()

console.log("--------------------------------------------------------")
function details(user = Unknown , age = "Unknown") {
    console.log(`Hello ${user} and your age Is : ${age}`)
}

details("Ahmad", 20)
details("ALi")

console.log("--------------------------------------------------------")
function say(user , age) {
    if (age >= 18) {
        console.log(`Hello ${user} and your age Is : ${age} and you are an adult.`)
    }
    else if (age < 18){
        console.log(`Hello ${user} and your age Is : ${age} and you are not an adult.`)
    }
}
say("Ahmad", 17)
say("Ali", 32)

console.log("-----------------------------------------")

function years(start , end , exclude) {
    for (let i = start; i <= end; i++) {
        if (i === exclude) {
            continue;
        }
        console.log(i)
    }
    }
    
years(1990, 2025, 2015)
    console.log("-----------------------------------------")

    function calculate(num1 , num2 , operator) {
        switch (operator) {
            case '+':
                console.log(`The result of ${num1} + ${num2} is : ${num1 + num2}`)
                break;
            case '-':
                console.log(`The result of ${num1} - ${num2} is : ${num1 - num2}`)
                break;
            case '*':
                console.log(`The result of ${num1} * ${num2} is : ${num1 * num2}`)
                break;
            case '/':
                if (num2 !== 0) {
                    console.log(`The result of ${num1} / ${num2} is : ${num1 / num2}`)
                } else {
                    console.log("Error: Division by zero is not allowed.")
                }
                break;
            default:
                console.log("Error: Invalid operator. Please use one of the")
        }}

        calculate(5, 3, '+')
        calculate(5, 3, '-')
        calculate(5, 3, '*')
        calculate(5, 0, '/')
        calculate(5, 3, '%')

console.log("-------------------------------------------")

function calc(num1 , num2) {
    return (num1 + num2)
}

let result = calc(10 , 15)
    console.log(result)

    function def(user = "Unknown" , age = "Unknown") {
        age = age || "Unknown"
        if(age == undefined){
            age = "Unknown"
        }
    }

    function say(user = "Unknown" , age = "Unknown") {
        return `Hello ${user} and your age Is : ${age}`
    }

    console.log(say("Ahmad"))

// document.getElementById("show").onclick() = function() {
//     alert("Hello world")
//     console.log("Hello world!")
// }

var a = 1;
let b = 2;

    console.log(`From Global ${a}`)
    console.log(`From Global ${b}`)


    function show_text() {
        var a = 110;
        console.log(`From Local Scope Is : ${a}`)
    }

    show_text()

    function say__(start , end , exclude) {
        for (let i = start; i <= end; i++) {
            if (i === exclude) {
                continue;
            }
            console.log(`Year Is : ${i}`)
        }
    }

    say__(1970 , 2008 , 1999)

    function name(user = "Unknown", age = "Unknown", year = "Unknown") {
        if (age === undefined) {
            age = "Unknown"
        }
        age = age || "Unknown"   

        console.log(`Hello ${user} and your age is : ${age} and your birth year is : ${year}`)
}

name("Ahmad", 20, 1998)


function rest(...skills) {
    console.log(skills)
}

rest("JavaScript", "React", "Node.js")

rest = ["JavaScript", "React", "Node.js"]

console.log(rest.length)

function spread(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]
    }
    return result;
}

console.log(spread(10 , 343 ,343, 4343))