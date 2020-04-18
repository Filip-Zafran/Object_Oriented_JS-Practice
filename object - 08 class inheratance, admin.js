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
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

// CLASS INHERITANCE
// this class will inherit all the stuff from the User class
// and add extra stuff ) del account...)
class Admin extends User {
  // if this class doesnt have a constructor it will use the one
  // from Users(email, name i score)
  deleteUser(user) {
    // 1. we pass in USER an argument the user we wish to delete (up in brackets)
    // 2. then we want to update the array down, we filter one user out
    users = users.filter((u) => {
      // filter method in JS alows us to go through the array
      // and filter one of the out of the array
      return u.email != user.email;
      // kaj se tu dogadja sa ovom arrow function:
      // >> znaci sto zelimo je naci user koji je u array
      // >> funkcija kaze: ako user NIJE != user.email onda je TRUE i vrti dalje
      // >> ali ako je jednak, onda je FALSE i onda ce pobrisat/ filtrirat usera
    });
  }
  // 'u' mi nije jasan
}

var UserOne = new User("ryu@gmail.com", "Ryu");
var UserTwo = new User("yoshi@gmail.com", "yoshi");
// 3. create admin class (veliko slovo!)
var admin = new Admin("shaun@gmail.com", "shaun");

// 1. we create an array for users

var users = [UserOne, UserTwo, admin];

// 4. da vidimo dal je pobrisao userOne
admin.deleteUser(UserOne);
console.log(users);
