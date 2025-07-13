/*
    Promise Intro And Syntax
        - Promise In JavaScript Is Like Promise In Real Life
        - Promise Is Something That Will Happen In The Future
        - Promise Avoid Callback Hell
        - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

    - Promise Status
        --- Pending: Initial State
        --- Fulfilled: Completed Successfully
        --- Rejected: Failed

    Story
        - Once A Promise Has Been Called, It Will Start In A Pending State
        - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
        - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

    - Then
        --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromse = new Promise((resolved, rejected) => {
//   let connect = true;
//   if (connect === true) {
//     resolved('Connected Established');
//   } else {
//     rejected(Error('Connection Failded'));
//   }
// }).then(
//   (resolvedValue) => console.log(`Good ${resolvedValue}`),
//   (rejectedValue) => console.log(`Bad ${rejectedValue}`)
// );;

let resolver = (resolvedValue) => console.log(`Good ${resolvedValue}`);
let rejector = (rejectedValue) => console.log(`Bad ${rejectedValue}`);

const myPromise = new Promise((resolved, rejected) => {
  let connect = false;
  if (connect === true) {
    resolved('Connected Established');
  } else {
    rejected(Error('Connection Failded'));
  }
});

console.log(myPromise);

myPromise.then(resolver, rejector);
