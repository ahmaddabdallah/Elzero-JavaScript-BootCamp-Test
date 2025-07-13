// Assignment One

function sayHello(theName, theGender) {
  if (theGender === 'Male') {
    return `Hello Mr ${theName}`;
  } else if (theGender === 'Female') {
    return `Hello Ms ${theName}`;
  } else {
    return `Hello ${theName}`;
  }
}

// Needed Output
console.log(sayHello('Osama', 'Male')); // "Hello Mr Osama"
console.log(sayHello('Eman', 'Female')); // "Hello Miss Eman"
console.log(sayHello('Sameh')); // "Hello Sameh"
