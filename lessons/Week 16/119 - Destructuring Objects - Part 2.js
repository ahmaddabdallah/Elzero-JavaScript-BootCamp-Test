/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user = {
  theName: 'Osama',
  theAge: 39,
  theTitle: 'Developer',
  theCountry: 'Egypt',
  theColor: 'Black',
  skills: {
    html: 70,
    css: 80,
  },
};

const {
  theName: a,
  theAge: n,
  theCountry,
  theColor: co,
  skills: { html: h, css },
} = user;

console.log(n);
console.log(a);
console.log(theCountry);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html: skillOne, css: skillTwo } = user.skills;

console.log(`Skill One (HTML): ${skillOne}`);
console.log(`Skill Two (CSS): ${skillTwo}`);
