// Assignment Three

let myInfo = {
  username: 'Osama',
  role: 'Admin',
  country: 'Egypt',
};

let myMap = new Map(Object.entries(myInfo));
console.log(myMap);

// NOTE: Size of the Map
console.log(myMap.size); // NOTE: 3

// TODO: Check if the role is in the Map
console.log(myMap.get('role') ? true : false); // IDEA: true

// REVIEW Output
/*
    Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
    3
    true
*/
