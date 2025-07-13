/*
    String Methods
    - Access With Index
    - Access With charAt()
    - length
    - trim()
    - toUpperCase()
    - toLowerCase()
    - Chain Methods
*/

let the_name = "Ahmad  "

console.log(the_name)
console.log(the_name[1]) //h
console.log(the_name[50]) //h
console.log(the_name.charAt(50)) //h

console.log(the_name.length) //5

console.log(the_name.toUpperCase()) //AHMAD
console.log(the_name.toLowerCase()) //ahmad

console.log(the_name.trim()) //ahmad
console.log(the_name.trim()) //ahmad

console.log(the_name.trim()) //ahmad

let name_1 = "         Ahmad Abdallah             "

console.log(name_1.trim().charAt(2).toUpperCase()) //["Ahmad", "Abdallah"]
