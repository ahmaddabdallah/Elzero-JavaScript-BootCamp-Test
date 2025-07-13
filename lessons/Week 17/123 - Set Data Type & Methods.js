/*
    - Set Data Type
        Syntax: new Set(Iterable)
            -- Object To Store Unique Values
            -- Cannot Access Elements By Index

    Properties:
        - size

    Methods:
        - add
        - delete
        - clear
        - has
*/

let myData = [1, 1, 1, 2, 3, 3, 3];
// let uniqueData = new Set([1, 1, 1, 2, 3, 3, 3]);
// let uniqueData = new Set(myData);

let uniqueData = new Set();

// NOTE: Ouput
console.log(myData);
console.log(uniqueData);

// NOTE: TypeOf ==> Object
console.log(typeof uniqueData); // Object

// Get the Size of the SET (Lenght)

console.log(`Size of SET : ${uniqueData.size}`);

// FIXME: Undefined ==> SET do not Support Selcect Element by Index
console.log(uniqueData[0]);

// NOTE: Add
uniqueData.add(1).add(2).add(2).add(3);

// NOTE: Delete Method

uniqueData.delete(1)
console.log(uniqueData);

// NOTE: Claer Method
uniqueData.clear()
