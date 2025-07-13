/*
    Destructuring
        - Destructuring Mixed Content
*/

const user = {
  theName: 'Osama',
  theAge: 39,
  skills: ['HTML', 'CSS', 'JavaScript'],
  addresses: {
    egypt: 'Cairo',
    ksa: 'Riyadh',
  },
};

const {
  theName: n,
  theAge: a,
  skills: [one, , two],
  addresses: { egypt: EG, ksa: KSA },
} = user;

console.log(`Your Name Is : ${n}`);
console.log(`Your Age Is : ${a}`);
console.log(`Your First Skill Is : ${one}`);
console.log(`Your Second Skill Is : ${two}`);
console.log(`Main Addresses Is : ${EG}`);
console.log(`Main Addresses Is : ${KSA}`);
