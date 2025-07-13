/*
    Function this Keyword
    - this Introduction
    - this Inside Object Method
    --- When a function is called as a method of an object,
    --- its this is set to the object the method is called on.
    - Global Object
    - Test Variables With Window And This
    - Global Context
    - Function Context

    Search
    - Strict Mode
*/

console.log(this)
console.log(window)
console.log(window === this) // true

let but_ic = document.getElementById("cl")

let test = but_ic.onclick = function () {
    // window.alert("Are you sure to delete this item ??")
    console.log(this)
}


let user = {
    age: window.prompt("Enter your Age please ??"),
    total: function () {
        return this.age * 365
    }
}

console.log(user.age)
console.log(user.total())