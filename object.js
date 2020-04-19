function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function () {
    console.log(this.email, "has logged in");
  };
}

var UserOne = new User("ryu@gmail.com", "Ryu");
var UserTwo = new User("yoshi@gmail.com", "yoshi");

console.log(UserOne);
UserTwo.login();
