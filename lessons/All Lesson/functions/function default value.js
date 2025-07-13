/*
    Function
    - Default Function Parameters
    - Function Parameters Default [Undefined]
    - Old Strategies [Condition + Logical Or]
    - ES6 Method
*/

function hello(username = "Unknown", age = "Unknown") {
    // if (age === undefined) {
    //     age = "Unknown";
    // }
    // age = age || "Unknown";
    return `Hello ${username} and Your age Is ${age}`;
}

console.log(hello())

function test(user = "Unknown" , age  = "Unknown", year = "Unknown") {
    if (age === undefined) {
        age = "Unknown"
    }
    age = age || "Unknown";
}