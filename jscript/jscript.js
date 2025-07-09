//variables
let fname="Eshwari";
let location="Shivamogga";
let age=24;

let num1=5;
let num2=3;

let num3=num1+num2;
let num4;
let num5=1;
let num6=5;

let fruits=["apple","banan","orange"];

let students={
    name:"Eshwari",
    usn:12345,
    mbno:375578494839
}



//Arithmatic operator
console.log("Arithmatic operator");
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);

//Assignment operator
console.log("Assignment operator");
console.log(num4=num1);
console.log(num5+=num1)


//comparision
console.log("Comparision operator");
console.log(num1===num2);
console.log(num1!=num2);
console.log(num1!==num2);
console.log(num1<num2);
console.log(num1>num2);
console.log(num1<=num2);
console.log(location===num1);


//loop 
console.log("for loop")
for(let i=0;i<fname.length;i++){
    console.log(fname[i]);
}

console.log("for of loop");
for(let fruit of fruits){
    console.log(fruit);
}

console.log("for in loop");
for(let student in students){
    console.log(student,students[student]);
}

