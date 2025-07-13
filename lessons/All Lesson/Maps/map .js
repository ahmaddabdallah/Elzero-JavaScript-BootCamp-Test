/*
    Higher Order Functions
    ---> is a function that accepts functions as parameters and/or returns a function.

    - Map
    --- method creates a new array
    --- populated with the results of calling a provided function on every element
    --- in the calling array.

    Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
    - Element => The current element being processed in the array.
    - Index => The index of the current element being processed in the array.
    - Array => The Current Array

    Notes
    - Map Return A New Array

    Examples
    - Anonymous Function
    - Named Function

*/


let Name = [1,2,3,4,5,6,7]

let empty = []

for (let i = 0;i < Name.length;i++) {
    empty.push(Name[i] * Name[i])
}

let add = Name.map(function(element , index , array) {
    return element + element
}, 10)

console.log(add)