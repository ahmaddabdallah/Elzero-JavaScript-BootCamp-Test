// Assignment Five

const myObj = {
  username: 'Elzero',
  id: 100,
  score: 1000,
  country: 'Egypt',
};

// Write Your Code Here

Object.defineProperties(myObj, {
  country: {
    enumerable: false,
  },
  score: { writable: false, value: 1000, id: 100, configurable: true },
  id: {
    enumerable: false,
    writable : true
  },
});

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

// delete myObj.country; // Deleting it so it will not appear in object
delete myObj.country
console.log(myObj);


// Output
// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
