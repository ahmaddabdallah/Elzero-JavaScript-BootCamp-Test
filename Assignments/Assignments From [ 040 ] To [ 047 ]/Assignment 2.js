// Assignment Two

let friends = ['Ahmed', 'Eman', 'Osama', 'Gamal'];

// Write Your Code Here

friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

friends = ['Ahmed', 'Eman', 'Osama', 'Gamal'];

// Method 2
console.log(friends.slice(friends.indexOf('Eman'), friends.length - true));

// Method 3
console.log(friends.slice(friends.indexOf('Eman'), friends.indexOf('Gamal')));

