/*
    - Filter
    --- method creates a new array
    --- with all elements that pass the test implemented by the provided function.

    Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
    - Element => The current element being processed in the array.
    - Index => The index of the current element being processed in the array.
    - Array => The Current Array
*/


let addMap = numbers.map(function(element) {
    return element + element
})

console.log(addMap)

let addFilter = numbers.filter(function(element) {
    return element + element
})

console.log(addFilter)

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterFriends = friends.filter(function(element) {
    return element.startsWith("A")
})

console.log(filterFriends)


    // Get Even Numbers Only
    let numbers = [11, 20, 2, 5, 17, 10];

    let even = numbers.filter(function(ev) {
        return ev % 2 === 0 ? true : false;
    })

    console.log(even)