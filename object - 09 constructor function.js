// we are creating a constructor, also capital User =  its not a Class but a Function

function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;

  // add a method to the constructor function
  this.login = function () {
    console.log(this.email, "has logged in");
  };
}

var UserOne = new User("ryu@gmail.com", "Ryu");
var UserTwo = new User("yoshi@gmail.com", "yoshi");

console.log(UserOne);
UserTwo.login();
