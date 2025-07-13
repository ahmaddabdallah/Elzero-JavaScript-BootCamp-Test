/*
    Arrays Methods [Slicing]
    - slice(Start [Opt], End [Opt] Not Including End)
    --- slice() => All Array
    --- If Start Is Undefined => 0
    --- Negative Count From End
    --- If End Is Undefined || > Indexes => Slice To The End Array.length
    --- Return New Array
    - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
    --- If Negative => Start From The End
*/

let names = [
    "أحمد",
    "محمد",
    "عبدالله",
    "سارة",
    "ميشال",
    "إميلي",
    "دانيال",
    "أوليا",
    "صفية",
    "آوا"
];

console.log(names.slice())
console.log(names.slice(0, 3))
console.log(names.slice(-3))

names.splice(0 , 2 , "Ahmad" , "Mohamed")

console.log(names)

let a = ["Ahmad" , "Mohamed" , "Ali"]

for (i in a){
    console.log(`Hello ${a[i]}`)
}

a.unshift("osama")
a.push("Aaaa")
console.log(a)

let first = a.shift()
console.log(`the first item is delete is ${first}`)

console.log(a.indexOf(""))

if (a.indexOf() == -1){
    console.log("Not found")
}

else{
    console.log("Yes")
}

// a.sort().reverse()

// console.log(a)

console.log(a.slice())

a.length = 2
console.log(a)