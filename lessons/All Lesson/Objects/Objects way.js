/*
    Object
    - Create Object With Create Method
*/ 

let test = {
    age: 18,
    double: function () {
        return this.age * 2
    }
}

console.log(test)
console.log(test.double())


let copyObj = Object.create(test)

copyObj.age = 50

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.double());