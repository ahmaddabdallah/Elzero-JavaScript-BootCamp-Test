/*
    - Reduce
    --- method executes a reducer function on each element of the array,
    --- resulting in a single output value.

    Syntax
    reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
    - Accumulator => the accumulated value previously returned in the last invocation
    - Current Val => The current element being processed in the array
    - Index => The index of the current element being processed in the array.
    ------ Starts from index 0 if an initialValue is provided.
    ------ Otherwise, it starts from index 1.
    - Array => The Current Array
*/

let num = [10, 20, 15, 30];

let add = num.reduce(function (acc , current , index , array) {
    console.log(`Accurate => ${acc}`)
    console.log(`Current => ${current}`)
    console.log(`Index => ${index}`)
    console.log(`Array => ${array}`)
    console.log(acc + current)
    console.log(`###################`)
    return acc + current;
})

console.log(add)
