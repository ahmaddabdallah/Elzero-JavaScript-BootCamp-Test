/*
    ====================================================
    ====== Read About Currying Function Technique ======
    ====================================================
*/

function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === 'Available'
        ? `${zName} , My Salary Is ${salary}.`
        : `I am Not Avaialble.`;
    };
  };
}

console.log(checker('Osama')('Available')(4000)); // Osama, My Salary Is 4000
console.log(checker('Ahmed')('Not Available')()); // Iam Not Avaialble


let checkerOne = (zName) => (status) => (salary) => {
  return status === 'Available'
    ? `${zName} , My Salary Is ${salary}.`
    : `I am Not Avaialble.`;
};

console.log(checker('Osama')('Available')(4000)); // Osama, My Salary Is 4000
