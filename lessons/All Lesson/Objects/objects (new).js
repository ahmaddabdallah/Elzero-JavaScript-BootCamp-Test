/*
    Object
    - Create With New Keyword new Object();
*/

let user = new Object()

console.log(user)

user.Name = "Ahmad"
user.age = 18
user["country"] = "Egypt"

user.sayHello = function () {
    return `Hello ${this.Name}`
}

console.log(user.Name)
console.log(user.age)
console.log(user.sayHello())