/*
    Object
    -- Nested objects
*/

let code = {
    name: "Ahmad",
    age: 18,
    skills: ["html" , "css" , "js"],
    available: false,
    addresses: {
        KSA: "Riyadh",
        EG : {
            main: "Cairo",
            second: "Alex"
        },
    },
    checkAv: function (ele) {
        if (code.available === true) {
            return `Free for work`;
        }
        else {
            return `Not free`;
        }
    }
}

console.log(code.name)
console.log(code.age)
console.log(code.skills.join(" | ").toUpperCase())
console.log(code.skills[0].toUpperCase())
console.log(code.addresses.KSA)
console.log(code.addresses.EG)
console.log(code.addresses.EG.main) // Egypt
console.log(code["addresses"]["EG"]["main"]) // Egypt
console.log(code.checkAv())