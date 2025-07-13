
/*
    Object
    - Create Object With Assign Method
*/

let obj1 = {
    prop1: 1,
    meth1: function () {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2: function () {
        return this.prop2;
    },
};

let targetObject = {
    prop1: 100,
    prop3: 3,
};  

let final_object = Object.assign(targetObject , obj1)

final_object.prop4 = 100

console.log(final_object)

let new_object = Object.assign({} , obj1 , {prop5: 5, prop6: 6})

console.log(new_object)