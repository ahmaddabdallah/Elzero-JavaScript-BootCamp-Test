// Assignment Four

const eleOne = document.getElementsByClassName('one')[0];
const eleTwo = document.getElementsByClassName('two')[0];

// Element One
[eleOne.title, eleOne.innerHTML] = [eleTwo.innerHTML, eleTwo.innerHTML];

// Element Two
[eleTwo.innerHTML, eleTwo.title] = [
  `${eleTwo.className} ${eleTwo.attributes.length}`,
  eleTwo.className,
];
