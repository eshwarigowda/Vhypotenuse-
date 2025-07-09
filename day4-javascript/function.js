//function declaration
function greet(){
    console.log("Good Morning");
}
greet();

//function expression
let greeting=function(){
    console.log("How are you!!");
}
greeting();

let msg=()=>{
    console.log("Had Coffe");
}
msg();

let a=5;
let b=4;
let sum=(a,b)=>a+b;
console.log("sum is:"+sum(a,b));