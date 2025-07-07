//variablesst sname:string="Eshari";
var ename = "Eshwari BV";
var numb1 = 5;
var numb2 = 3;
var numb3 = numb1 + numb2;
var numb4;
var numb5 = 1;
var numb6 = 5;
var fruitss = ["apple", "banan", "orange"];
var studentss = {
    name: "Eshwari",
    usn: 12345,
    mbno: 375578494839
};
//Arithmatic operator
console.log("Arithmatic operator");
console.log(numb1 + numb2);
console.log(numb1 - numb2);
console.log(numb1 * numb2);
console.log(numb1 / numb2);
console.log(numb1 % numb2);
console.log(Math.pow(numb1, numb2));
//Assignment operator
console.log("Assignment operator");
console.log(numb4 = numb1);
console.log(numb5 += numb1);
//comparision
console.log("Comparision operator");
console.log(numb1 === numb2);
console.log(numb1 != numb2);
console.log(numb1 !== numb2);
console.log(numb1 < numb2);
console.log(numb1 > numb2);
console.log(numb1 <= numb2);
//loop 
console.log("for loop");
for (var i = 0; i < ename.length; i++) {
    console.log(ename[i]);
}
console.log("for of loop");
for (var _i = 0, fruitss_1 = fruitss; _i < fruitss_1.length; _i++) {
    var fruit = fruitss_1[_i];
    console.log(fruit);
}
console.log("for in loop");
for (var student in studentss) {
    console.log(student, studentss[student]);
}
