// we want to create a Admin Class
// > 1. create copnstructor for the Admin Class

function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out");
};

function Admin(...arguments) {
  // ... naprave array od var Admin
  User.apply(this, arguments);
  // arguments = [email, name] / [shaun@gmail.com, Shaun]
  // these are all the old 'this; properties from User
  // and now we can add more properties:
  this.role = "super admin";
}

// we want Admin to inherite the Prototypes as well....
Admin.prototype = Object.create(User.prototype);

// CONSOLE:
// admin.login()

// to add more methods only to ADMINS, not Users:
Admin.prototype.deleteUser = function (u) {
  users = users.filter((users) => {
    return users.email != u.email;
  });
};

var UserOne = new User("ryu@gmail.com", "Ryu");
var UserTwo = new User("yoshi@gmail.com", "yoshi");
// 2. add admin
var admin = new Admin("shaun@gmail.com", "Shaun");

// 4.
var users = [UserOne, UserTwo, admin];

console.log(admin);
