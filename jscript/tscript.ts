//variablesst sname:string="Eshari";
let ename:string="Eshwari BV";

let numb1: number=5;
let numb2:number =3;

let numb3:number=numb1+numb2;
let numb4:number;
let numb5:number=1;
let numb6:number=5;

let fruitss:string[]=["apple","banan","orange"];

let studentss={
    name:"Eshwari",
    usn:12345,
    mbno:375578494839
}



//Arithmatic operator
console.log("Arithmatic operator");
console.log(numb1+numb2);
console.log(numb1-numb2);
console.log(numb1*numb2);
console.log(numb1/numb2);
console.log(numb1%numb2);
console.log(numb1**numb2);

//Assignment operator
console.log("Assignment operator");
console.log(numb4=numb1);
console.log(numb5+=numb1)


//comparision
console.log("Comparision operator");
console.log(numb1===numb2);
console.log(numb1!=numb2);
console.log(numb1!==numb2);
console.log(numb1<numb2);
console.log(numb1>numb2);
console.log(numb1<=numb2);



//loop 
console.log("for loop")
for(let i=0;i<ename.length;i++){
    console.log(ename[i]);
}

console.log("for of loop");
for(let fruit of fruitss){
    console.log(fruit);
}

console.log("for in loop");
for(let student in studentss){
    console.log(student,studentss[student]);
}

