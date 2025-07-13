// Assignment one

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
    if (i === exclude){
        continue;
    }
    console.log(i)
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
console.log("--------------------")
// Assignment two

let Start = 10;
let End = 0;
let stop = 3;

for (let i = Start; i >= stop; i--) {
    if (i < Start) {
        console.log(`0${i}`)
    }
    else{
        console.log(i)
    }
    if (i == stop) {
        break;
    }
}
// Output 10 09 08 07 06 05 04 03
console.log("--------------------")


// Assignment three

let start_ = 1;
let end_ = 6;
let breaker = 2;

for (let i = start_; i < end_; i++) {
    console.log(i)
    for (let j = breaker; j < end_; j += breaker) {
        console.log(j)
    }
}
console.log("------------------------------------")
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// Assignment four

let index = 10;
let jump = 2;
let i = 0;
i = index;

for (;;) {
    console.log(index)
    index -= jump;
    if (index == jump){
        break;
    }
}
console.log("---------------------------")
// Output
// 10
// 8
// 6
// 4

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let newArray = []

console.log("----------------------")
for (i = 0; i < friends.length; i++) {
    if (friends[i][0] != letter.toUpperCase()) {
    newArray.push(friends[i])
    }
    }
    for (j = 0; j < newArray.length; j++) {
    console.log(`"${j + 1} => ${newArray[j]}`)
    }

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
console.log("--------------------------")
// Assignment five
let starts = 0;
let swappedName = "elZerO";
let change = []
for (let i = starts; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase()) {
        change.push(swappedName[i].toUpperCase())
    }
    else {
        change.push(swappedName[i].toLowerCase())
    }
}
console.log(change.join(""))
console.log("----------------------------------")
// Output
// "ELzERo"

// Assignment sex

let star = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = 0; i < mix.length; i++) {
    if (typeof mix[i] === "string") {
        continue;
    }
    if (mix[i] === 1 ){
        continue;
    }
    console.log(mix[i])
}


// Output
// 2
// 3
// 4