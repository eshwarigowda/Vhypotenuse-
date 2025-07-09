//Object creation

//1.Object literal
let student={
    name:"Eshwari",
    age:24,
    mno:9876543210,
    section:"A",
    marks:[100,90]
}
console.log(student);

//2.Constructor function
function Teacher(name,subject){
    this.name=name;
    this.subject=subject;
}
let teacher = new Teacher("Jonathan", "Java");
console.log(teacher);

//3.ES6 class
class library{
    constructor(name,bookby){
        this.name=name;
        this.bookby=bookby;
    }
}
let libs=new library("think and grow rich","Eshwari");
console.log(libs);

//4.Object.create
let exp = {
  greet: function() {
    console.log("Hello Team!.............");
  }
};
let greets = Object.create(exp);
greets.greet();

//Accessing Object
//dot notation
console.log("Accessing Object");
console.log(student.age);
//[] notation
console.log(student["marks"]);

//Deleting object
console.log("Delete")
console.log(delete student["mno"]);
//console.log(delete student.mno);

//Check
console.log("check")
console.log("address" in student);  
console.log("marks" in student);  