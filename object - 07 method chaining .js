class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    // UPDATE SCORE
    this.score = 0;
  }

  // login & logout are methods
  login() {
    console.log(this.email, "just logged in");
    // (!) s time vracamo THAT PERTICUAL USER i sad mozemo Chain
    return this;
  }
  logout() {
    console.log(this.email, "just logged out");
    // (!) s time vracamo THAT PERTICUAL USER i sad mozemo Chain
    return this;
  }

  // UPDATE SCORE
  // we want to increase the score by one
  updateScore() {
    this.score++;
    console.log(this.emaiul, "score is now", this.score);

    // (!) s time vracamo THAT PERTICUAL USER i sad mozemo Chain
    return this;
  }
}

var UserOne = new User("ryu@gmail.com", "Ryu");
var UserTwo = new User("yoshi@gmail.com", "yoshi");

// METHOD CHAINING
// mozes dodati dodatnu methodu samo sa .method
UserOne.login().updateScore().updateScore().logout();
UserTwo.logout();
