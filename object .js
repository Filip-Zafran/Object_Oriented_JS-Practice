class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

  login() {
    console.log(this.email, "just logged in");

    return this;
  }
  logout() {
    console.log(this.email, "just logged out");

    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.emaiul, "score is now", this.score);

    return this;
  }
}

var UserOne = new User("ryu@gmail.com", "Ryu");
var UserTwo = new User("yoshi@gmail.com", "yoshi");

UserOne.login().updateScore().updateScore().logout();
UserTwo.logout();
