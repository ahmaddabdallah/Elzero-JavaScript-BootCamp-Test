/*
    Arrays Methods [Joining]
        - concat(array, array) => Return A New Array
        - join(Separator) => Convert Array into String
*/

let myFriends = ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer'];
let myNewFriends = ['Samar', 'Sameh'];
let schoolFriends = ['Haytham', 'Shady'];

let allFriends = myFriends.concat(myNewFriends, schoolFriends, [1, 2, 3, 4]);

console.log(allFriends);

let joinArray = myFriends.join(' - ');

console.log(joinArray);
