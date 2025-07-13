/*
    - Map Data Type
        Methods
            --- set
            --- get
            --- delete
            --- clear
            --- has

        Properties
            --- size
*/

let myMap = new Map([
  [10, 'Number'],
  ['Name', 'String'],
  [false, 'Boolean'],
  [true, 'Boolean'],
  ['Age', 17],
]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

// NOTE: Output
console.log(myMap);

// TODO: GET Method
console.log(myMap.get(10));
console.log(myMap.get('Name'));
console.log(myMap.get(false));
console.log(myMap.get(true));
console.log('Age : ' + myMap.get('Age'));

console.log('####');

// TODO: Has Method -- (True _ False)
console.log(myMap.has('Name'));

console.log('####');

// NOTE: Get the length of Map -- Properties
console.log(myMap.size);

console.log('####');
// NOTE: Delete the Key - Value
console.log(myMap.delete('Name'));

console.log(myMap.size);

// NOTE: Clear All Data From the Object
myMap.clear();

console.log(myMap.size);
