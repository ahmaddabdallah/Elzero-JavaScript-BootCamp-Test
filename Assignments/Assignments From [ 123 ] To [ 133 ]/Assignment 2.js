// Assignment Two

// Create an array with friend names, including duplicates
let myFriends = ['Osama', 'Ahmed', 'Sayed', 'Sayed', 'Mahmoud', 'Osama'];

// Sort the array alphabetically and create a Set to remove duplicates
let uniqueNames = new Set(myFriends.sort());

// Output the Set of unique, sorted friend names to the console
console.log(uniqueNames);


// Output
// (4)[('Ahmed', 'Mahmoud', 'Osama', 'Sayed')];



