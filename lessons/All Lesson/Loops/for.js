let names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"]

for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}`)
}

let names_2 = [2,3,4,3,5,4,56,43,3,3,"Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"]
let only = []

for (let x = 0; x < names_2.length; x++) {
    if (typeof names_2[x] == "string") {
        only.push(names_2[x])
    }
}

console.log(only)