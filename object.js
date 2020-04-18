class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }

  // login & logout are methods
  login() {
    console.log(this.email, "just logged in");
  }
  logout() {
    console.log(this.email, "just logged out");
  }
}

var UserOne = new User("ryu@gmail.com", "Ryu");
var UserTwo = new User("yoshi@gmail.com", "yoshi");

UserOne.login();
UserTwo.logout();
