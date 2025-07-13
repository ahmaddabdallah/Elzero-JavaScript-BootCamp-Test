// Assignment Five

let friends = ['Ahmed', 'Sayed', 'Eman', 'Mahmoud', 'Ameer', 'Osama', 'Sameh'];
let letter = 'a';

for (let i = letter.length; i < friends.length; i++) {
  if (friends[i].charAt(letter) == letter.toUpperCase()) {
    continue;
  }
  console.log(`${i} => ${friends[i]}`);
}

// Output
// ('1 => Sayed');
// ('2 => Eman');
// ('3 => Mahmoud');
// ('4 => Osama');
// ('5 => Sameh');
