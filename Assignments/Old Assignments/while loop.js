let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let array = []

for (let i = index; i < friends.length; i++) {
    if(typeof friends[i] == "number" || friends[i][counter] == "A") {
        continue;
        }
        array.push(friends[i])
    }
    for(let i = index; i < array.length; i++) {
        console.log(`"${i + 1} => ${array[i]}	`)
    }

// Output
// "1 => Sayed"
// "2 => Mahmoud"
