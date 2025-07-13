function say(name = "Unknown",age = "Unknown"){
    return `Hello ${name} and your age Is : ${age}`
}

let result = say("Ahmad" , 50)

console.log(result)

function calculate(num1 , num2) {
    return `The sum of ${num1} and ${num2} is : ${num1 + num2}`
}

let result2 = calculate(5, 10)
console.log(result2)

let start = 0
let end = 51
exclude = 20
function calculate_1(start, end , exclude) {
    for (let i = start;i < end;i++) {
        if (i === exclude) continue;
        console.log(i)
    }
}

calculate_1(1, 10 , 20);

function sumNumbersInRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return `the total sum of the numbers Is : ${sum}`;
}

console.log(sumNumbersInRange(1, 10));
// Output: 55

function printOddNumbersInRange(start, end) {
    for (let i = start; i < end; i++) {
        if (i % 2 != 0) {
            console.log(`this number Is odd : ${i}`);
        }
    }
}

printOddNumbersInRange(1, 10);
// Output: 1 3 5 7 9

function printPrimeNumbersInRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(`this number Is prime : ${i}`);
        }
    }
}

printPrimeNumbersInRange(1, 10);
// Output: 2 3 5 7

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solve(num1 , num2) {
    if (num1 > num2) {
        return `the larger number Is : ${num1}`;
    } else if (num1 < num2) {
        return `the larger number Is : ${num2}`;
    } else {
        return `the numbers are equal`;
    }
}


console.log(solve(5, 80));

function log(user = "Unknown",age = "Unknown" , rate = "Unknown", ...skills){
    age = age || "Unknown";
    document.write(`<div>`);
    document.write(`<h2>User Details</h2>`);
    document.write(`<p>Hello ${user}</p>`);
    document.write(`<p>Your age Is: ${age}</p>`);
    document.write(`<p>Hour rate Is: $${rate} in hour</p>`);
    document.write(`</div>`);
}

log("Ahmad", 18, 25, "JavaScript", "React", "Node.js");