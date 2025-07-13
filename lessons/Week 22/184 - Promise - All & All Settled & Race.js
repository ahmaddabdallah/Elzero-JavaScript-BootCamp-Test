/*
    Promise
        - All
        - All Settled
        - Race
*/

let myFristPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am the firt Promise');
  }, 3000);
});

let mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am the Second Promise');
  }, 1000);
});

let myThirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am the Third Promise');
  }, 2000);
});

// Promise.all([myFristPromise, mySecondPromise, myThirdPromise]).then(
//   (resoleValue) => console.log(resoleValue),
//   (rejectValue) => console.log(`Rejected : ${rejectValue}`)
// );

// Promise.allSettled([myFristPromise, mySecondPromise, myThirdPromise]).then(
//   (resoleValue) => console.log(resoleValue),
//   (rejectValue) => console.log(`Rejected : ${rejectValue}`)
// );

Promise.race([myFristPromise, mySecondPromise, myThirdPromise]).then(
  (resoleValue) => console.log(resoleValue),
  (rejectValue) => console.log(`Rejected : ${rejectValue}`)
);
