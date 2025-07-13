/*
    Promise Training

        We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
        .then(We Will Choose Two People)
        .then(We Will Test Them Then Get One Of Them)
        .catch(No One Came)

        Then    => Promise Is Successfull Use The Resolved Data
        Catch   => Promise Is Failed, Catch The Error
        Finally => Promise Successfull Or Failed Finally Do Something

        */

// let resolver = (resolvedValue) => console.log(`Good ${resolvedValue}`);
// let rejector = (rejectedValue) => console.log(`Bad ${rejectedValue}`);

const myPromise = new Promise((resolvedFunction, rejectedFunction) => {
  let user = [];

  if (user.length === 4) {
    resolvedFunction(user);
  } else {
    rejectedFunction(Error('The Number of User is not a Four !!!'));
  }
});

myPromise
  .then((resolvedValue) => {
    resolvedValue.length = 2;
    return resolvedValue;
  })
  .then((resolvedValue) => {
    resolvedValue.length = 1;
    return resolvedValue;
  })
  .then((resolvedValue) => {
    resolvedValue.length = 1;
    console.log(`The Chosen User is : ${resolvedValue}`);
  })
  .catch((rejectedValue) => console.log(`Rejected Reason ${rejectedValue}`))
  .finally(console.log('The Operation Is Done.'));
