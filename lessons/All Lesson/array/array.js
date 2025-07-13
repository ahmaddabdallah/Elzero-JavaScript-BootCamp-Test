/*
    Arrays
    - Create Arrays [Two Methods] new Array() + []
    - Access Arrays Elements
    - Nested Arrays
    - Change Arrays Elements
    - Check For Array Array.isArray(arr);
*/

let list = ["Ahmad", "Mohamed" , "Ali" , ["Ali" , "Asmaa"]]

console.log(list[1])
console.log(list[3][1])
list[0] = "Ali"

console.log(list)

console.log(Array.isArray(list))

// for (i in list){
//     console.log(`Hello ${list[i]}`)
// }