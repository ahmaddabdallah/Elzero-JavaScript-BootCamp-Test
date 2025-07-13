// Assignment Two

// Example One

function itsMe() {
  return `Iam A Normal Function`;
}

console.log(itsMe()); // Iam A Normal Function

let arrowFunctionOne = () => 'I am A Arrow Function';

console.log(arrowFunctionOne());

// Example Two

// Regular Function
function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate('https', 'elzero', 'org')); // https://www.elzero.org

// Arrow Function
let urlCreator = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};

console.log(urlCreator('https://', 'google', 'com'));
