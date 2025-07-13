// Assignment One

// Create a new Set and add the number 10 as initial value
let setOfNumbers = new Set().add(10);

// Add number 20 to the Set
setOfNumbers.add(20);

// Add the current size of the Set (which is 2 at this point) to the Set
setOfNumbers.add(setOfNumbers.size);

// Print the entire Set
console.log(setOfNumbers);

// Print the size of the Set
console.log(setOfNumbers.size);


// Output
// Set(3) {10, 20, 2}
// 2
