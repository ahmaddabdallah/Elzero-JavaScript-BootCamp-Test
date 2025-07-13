/*
    Object
        - Create Object With assign Method
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

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 100;

console.log(finalObject);

let newObject = Object.assign({}, obj1, obj2);

// Another Way to Create use a Assign Method

console.log(newObject);

let person = { name: 'Ahmad' };

let newObjectTwo = { ...person, ...{ name: 'Ali', age: 20 } };

console.log(newObjectTwo);
