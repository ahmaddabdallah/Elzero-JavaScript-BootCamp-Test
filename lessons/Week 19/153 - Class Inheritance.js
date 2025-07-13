/*
    Class
        - Inheritance
*/

// Parent Class
class User {
  constructor(id, username) {
    this.id = id;
    this.username = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

// Derived Class
class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.permissions = permissions;
  }
}

class superAdmin extends Admin {
  constructor(id, username, permissions, email) {
    super(id, username, permissions);
    this.email = email;
  }
}

let adminOne = new Admin(101, 'Ahmad', 'Full Access');
let superAdminOne = new superAdmin(101, 'Ahmad', 'Full Access', 'pof@zu.bm');

// Output

console.log(
  `ID: ${adminOne.id} , Username: ${adminOne.username} , Permissions: ${adminOne.permissions}`
);

console.log(
  `ID: ${superAdminOne.id} , Username: ${superAdminOne.username} , Permissions: ${superAdminOne.permissions} , Email : ${superAdminOne.email}
  `
);
