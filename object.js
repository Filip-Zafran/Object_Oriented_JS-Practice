// when we want to create a new user it will do:
//     !! pocinje IZNUTRA PREMA VAN !!!
// 1. creates an empty object
// 2. sets values 'this' to the nre empty object
// 3. calls the contstructor method

class User {
  //  constructor will be responsible to creating this new user object

  constructor(email, name) {
    // 'email , name' are arguments
    this.email = email;
    this.name = name;

    // when ever we create a new user with different values for the properties (email , name..)
  }
}

//capital U(ser) = classes are with capital (Upper Case start)

var UserOne = new User("ryu@gmail.com", "Ryu");
// 'ryu@gmail.com', 'Ryu' - arguments

var UserTwo = new User("yoshi@gmail.com", "yoshi");
