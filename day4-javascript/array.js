
//array
let myArray = ["nature", 10, false, "car"];

let car=["BMW","Bens","Thar"]
console.log(myArray);

//array creation

//array litereal
let fruits=["apple","banana","orange"];
console.log(fruits);

//array constructor
let numbers=new Array(1,2,3,4);
console.log(numbers);

//String.split
let str="red green lavendar";
let colors=str.split(" ");
console.log(colors);


//accesing element by index
console.log(numbers[2]);

//methods

//push
colors.push("black");
console.log(colors);

//pop
numbers.pop();
console.log(numbers);

//shift
fruits.shift();
console.log(fruits);

//unshift
fruits.unshift("mango");
console.log(fruits);

//indexof
console.log(fruits.indexOf("mango"));

//includes
console.log(fruits.includes("jackfruit"));

//sort
console.log(fruits.sort());

//slice
console.log(myArray.slice(0,3));

//splice
console.log(car.splice(2));


//map
let amount=[10,20,30,40];
let maps=amount.map(function(mob){
    return mob/2;
})
console.log(maps);

//filter
let num=[1,2,3,4];
let fill=num.filter((ele)=>{
     return ele%2==0;
})
console.log(fill);


