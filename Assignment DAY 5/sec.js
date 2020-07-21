console.log("User login and logout");



class User {
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.lucoins=0;
        this.course=[];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
     console.log(`${this.name} has logged out`);
     return this;
    }
    addcoins(){
        this.lucoins++;
        console.log(`${this.name} has ${this.lucoins} coins`)
        return this;
    }
    removecoins(){
        this.lucoins--;
        console.log(`${this.name} has ${this.lucoins} coins`)
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name} and email is ${this.email}`);
        return this;
    }
    course(){
        console.log("Welcome to course.");
    }
 }
 
 class Moderator extends User{
     deleteUser(user){
         users=users.filter(u=>{
             return u.email != user.email;
         })
     }
 
 }
 
 class Admin extends Moderator{
    addcourse(user,course){
        user.course.push(this.course);
        console.log(user);
    }
    removecourse(user,course){
        user.course.pop(this.course);
        console.log(user);
    }

 }
 
 let user= new User('kavya',20,'kavya@gmail.com')
 let user2=new User('deepa',23,'dp@gmail.com')
let mod=new Moderator('brutus',24,'br@gmail.com')
let admin=new Admin('duke',23,'dk@gmail.com');
let users=[user,user2,mod,admin];

users.forEach(elemnt=>{
    console.log(elemnt);
});

User.course();
admin.addcourse(user,'JS');
admin.addcourse(user,'JS','python');
admin.removecourse(user2,'python');





 user.login().addcoins().addcoins().removecoins().getDetails().logout();
 mod.deleteUser(user);
 admin.removecourse(user2);