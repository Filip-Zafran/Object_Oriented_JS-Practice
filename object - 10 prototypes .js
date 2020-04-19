// stvorili smo funkciju i za tu finkciju 2 metode: login i logout,
// koje mozemo sada pozvati sa '.login' tj .logout

function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;

  // we dont need it here anymore as we created the function
  //   this.login = function () {
  //     console.log(this.email, "has logged in")  };;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out");
};

var UserOne = new User("ryu@gmail.com", "Ryu");
var UserTwo = new User("yoshi@gmail.com", "yoshi");

console.log(UserOne);
UserTwo.login();

// u Console mozes otvorit User > prototype i vidit ces obje metode
