/*
    Object
        - Nested Object And Trainings
*/

let available = true;

let user = {
  theName: 'Ahmad',
  theAge: 20,
  skills: ['HTML', 'CSS', 'JS'],
  available: false,
  addresses: {
    ksa: 'Riyad',
    eygpt: {
      one: 'Cairo',
      two: 'Alex',
    },
  },

  checkAvailable: () => {
    return available === true
      ? 'You are Available For Work.'
      : 'You Are not Available For Work.';
  },

  fullDetails: () => {
    return `Hello ${user.theName} , Your Age Is : ${
      user.theAge
    } , Skills : ${user.skills.join(' | ')}`;
  },
};

console.log(user.theName);
console.log(user.theAge);
console.log(`Skills : ${user.skills.join(' | ')}`);

console.log(`KSA Address : ${user.addresses.ksa}`);
console.log(`Egypt Address One : ${user.addresses.eygpt.one}`);
console.log(`Egypt Address Two : ${user.addresses.eygpt.two}`);

console.log(user.checkAvailable());

// console.log(user.skills.map((ele) => `${ele.length} ${ele}`));

console.log(user.fullDetails());
