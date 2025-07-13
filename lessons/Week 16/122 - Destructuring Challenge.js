/*
    Destructuring
        - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: 'Osama', age: 39, available: true, skills: ['HTML', 'CSS'] },
  { title: 'Ahmed', age: 25, available: false, skills: ['Python', 'Django'] },
  { title: 'Sayed', age: 33, available: true, skills: ['PHP', 'Laravel'] },
];

// NOTE: Ternary Operator

const {
  title: n,
  age: a,
  available: av,
  skills: [, skillTwo],
} = myFriends[chosen - 1];

let availableOne = av === true ? 'Available' : 'Not Available';

console.log(
  `Your Name Is : ${n} , Your Age Is : ${a} , ${availableOne} , Skills : ${skillTwo}`
);

// BUG: Error here that use [] inside the Object
// const [
//   {
//     title: n,
//     age: a,
//     available: av,
//     skills: [, skillTwo],
//   },
// ] = myFriends[chosen];
