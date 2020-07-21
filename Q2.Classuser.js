// Create a class user with properties as name,age & email.
// He can login and logout.

const user = {
        name:'Gopinathan',
        age:20,
        email:'Gopinathan@gmail.com',
        login(){
           console.log('Gopinathan has logged in');
        },
        logout(){
           console.log('Gopinathan has logged out');
        },
}

console.log(user.name)
console.log(user.age)
console.log(user.email)
user.login()
user.logout()

// create another class moderator which has all the features of user,plus additional functionality to ass coins and remove coins

class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.myCoins = 20;
      this.courses = [];
    }

    static greet(){
        console.log("Hi buddy");
    }

    login(){
       console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
       this.myCoins++;
        console.log(`${this.name} has ${this.myCoins} coins`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }
    removeCoins(){
        this.myCoins--;
        console.log(`${this.name} has ${this.myCoins} coins`);
        return this;
    }

}
let user1 = new User('Gopinathan',20,'gopinathan@gmail.com');
user1.login();
 user1.addCoins();
 user1.addCoins();
 user1.addCoins();
 user1.logout();

 user1.login().addCoins().addCoins().getDetails().logout();

 // Create one more class admin which as all the features of moderator plus additional features like add a course and delete a particular course for a user

 class Admin extends Moderator{
    addCourse(user,course){
       user.courses.push(course);
        console.log(user);
    }
 }
 
 
 let user1 = new User('Gopinathan',20,'gopinathan@gmail.com');
 let user2 = new User('deepan',19,'deepanz@gmail.com');
 let mod = new Moderator('kishore',20,'kishorekumar@gmail.com','Moderator');
 let admin = new Admin('vijay',23,'vijayramesh@gmail.com');
 let users = [user1,user2,mod,admin];
 
 users.forEach(element => {
     console.log(element);
 });
 
 User.greet();
 admin.addCourse(user1,'PHP');
 //admin.addCourse(user1,'Dotnet');

 //mod.deleteUser(user1);
 //console.log(users);

 