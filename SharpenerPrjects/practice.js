// Create a constructor function Person which takes in first name, last name , Sex and age of person
// Inside the constructor function , create a function called printFullName which prints full name (first name + last name) of the student
// Initialize 2 objects with the following values
// "yash", "prasad", 10, "M"
// "vaibhav", "prasad", 20, "M"
// Minimum age to be egligible for going to disco is 18. Write a function outside the constructor function by which it can be checked whether the given person is allowed to enter the disco or not.


// Complete the puzzle. Try it by yourself. It is very easy.

// If stuck for more than 1 hour check the hints


// Expected Output (case sensitive and space sensitive)

// Full name = yash prasad

// 10

// yash not egligible

// Full name = vaibhav prasad

// 20

// vaibhav egligible

// solution:-

// function Student(firstName,lastName,age,sex){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age=age;
//     this.sex=sex;
//     this.printFullName = ()=>{
//         console.log(`person name is = ${this.firstName} ${this.lastName}`);
//     }
// }

// Student.prototype.eligible =function eligible(minAge){
//     if(this.age >= minAge){
//         console.log("ELIGIBLE");
//     }else{
//         console.log("NOT ELIGIBLE");
//     }
// }

// function createObject(){
//     const s1 = new Student("Yash","prased",20,"male");
//     const s2 = new Student("Soni","prased",15,"female");
//     s1.printFullName();
//     s1.eligible(18);
//     s2.printFullName();
//     s2.eligible(18);

// }
// createObject();

//  Q No.2:-


// Convert all the features present in the functional contructor of Student into Student class . Best Design pattern to follow



// Complete the Puzzle


//     Create a constructor function Student which takes in first name, last name , roll number and Student's age to initialize the object
//     Complete the function printFullName() so that it prints the full name of the student object which invokes it.
//     Complete the function minorOrmajor() so that it
//     prints major if the student's age is above or equal to 18
//     prints minor if the student's age is below 18
//     Make 2 students objects.Ram and Yash to test everything
//     Yash's details: ('yash', 'prasad', 12, 27)
//     Ram's details: ('ram', 'prasad', 14, 15)
//     Invoke prinFullName and minorOrmajor to print Yash's and Ram's details.


// If stuck for more than 1 hour check the hints.


// Output should look like the following.(Output is case sensitive )

// yashprasad

// Major

// ramprasad

// Minor


// solution :-


// class Student{
//     constructor(firstName,lastName,age,roll){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//         this.roll=roll;
//     }
//     printFullName(){
//         console.log(`the name is = ${this.firstName} ${this.lastName}`);
//     }
//     minorOrmajor(){
//         if(this.age >= 18){
//             console.log('MAJOR');
//         }else{
//             console.log("MINOR");
//         }
//     }
// }

// function createStudent(){
//     const s1 = new Student("ram","prasad",18,15);
//     const s2 = new Student("shyam","prasad",15,20);

//     s1.printFullName();
//     s1.minorOrmajor();
//     s2.printFullName();
//     s2.minorOrmajor();
// }
// createStudent();


// Q no.:-3

// Every time a new user registers, keep a count of number of registered users.
// At any given point of time if we invoke printNumberOfUsers ,the number of users should get printed .
// Complete the coding puzzle. It is very easy.

// class User{
//     static userCount= 0;
//     constructor(name,email,password){
//         this.name=name;
//         this.email=email;
//         this.password=password;
//         User.userCount++;
//     }
//     printNumberOfUSer(){
//         console.log(`number of user is ${User.userCount}`);
//     }
    
// }
// function createObject(){
//     const user1 = new User("Deepak kumar","abc@gmail.com",123456);
//     user1.printNumberOfUSer();
//     const user2 = new User("Deepa kumari","abcd@gmail.com",1234567);
//     user2.printNumberOfUSer();
//     const user9 = new User("Deepak kumar","abc@gmail.com",123456);
//     const user3 = new User("Deepak kumar","abc@gmail.com",123456);
//     const user4 = new User("Deepak kumar","abc@gmail.com",123456);
//     const user5 = new User("Deepak kumar","abc@gmail.com",123456);
//     const user6 = new User("Deepak kumar","abc@gmail.com",123456);
//     const user7 = new User("Deepak kumar","abc@gmail.com",123456);
//     user7.printNumberOfUSer();
// }
// createObject();


// Q no.:- 4

// Add a new state called membershipactivetilldate : date. Whenever a new member is created keep his membershipactivetilldate fixed to 3rd of March 2023.


// 3) Add a new function called renew Membership which based on membership type (MONTHLYPACKAGE or YEARLYPACKAGE) increase the membershipactivetilldate by 1 month or 1 year respectively.

// this is wrong solution

// class User{
//     static count = 0;
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//         User.count++;
//     }
//     printNumberOfUsers(){
//         console.log(`no. of users are ${User.count}`);
//     }

// }

// class Member extends User{
//     constructor(username,email,password){
//         super(username,email,password);
//         this.membershipTillDate = new Date(2023,2,3);
//         this.package = "";
//     }
//     purchaseTillDate(membership){
//         this.package = membership;
//         if(membership === "YEARLY"){
//             this.membershipTillDate.setFullYear(this.membershipTillDate.getFullYear()+1);
//         }else if(membership === 'MONTHLY'){
//             this.membershipTillDate.setMonth(this.membershipTillDate.getMonth()+1);
//         }else{
//             console.log("INVALID");
//         }
//     }

//     subscriptionTillDate(){
//         console.log(`${this.username} is subscribed to ${this.package} uptill ${this.membershipTillDate.toDateString()}`);
//     }
// }

// function createNewStudents( membership){

//     const mike = new Member("deepak kumar", "abc@gmail.com", "123");  

//     mike.purchaseTillDate(membership === "YAERLY");

//     mike.subscriptionTillDate();



// }
// createNewStudents();