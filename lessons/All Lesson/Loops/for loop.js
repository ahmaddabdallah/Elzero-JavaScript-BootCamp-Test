// for loop
/* for (condition){
    code here
}
*/

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let friends = [1 , 2 ,3, 5 ,4,"Ahmad" , "Mohamed" ,"Osama" , "Ali"]

for (i in friends){
    console.log(`Hello ${friends[i]}`)
}
console.log("------------------------------------")
for (let i = 0; i < friends.length; i++) {
    console.log(`Hello ${friends[i]}`)
}
console.log("------------------------------------")

let only = []

for (i = 0; i < friends.length; i++) {
    if (typeof friends[i] == "string") {
        only.push(friends[i])
    }
}

console.log(only)
console.log("----------------------------------")

let friend = [1,2,3,4,5,3,5,3,"computer" , "IT" , "CS" , "Ali" , "front-end"]
let awa = []

for (let i = 0; i < friend.length; i++) {
    if (typeof friend[i] =="string" ) {
        awa.push(friend[i])
    }
}

console.log(awa)