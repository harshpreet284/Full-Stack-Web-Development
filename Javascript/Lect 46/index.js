// global scope using var or let or const

// var age= 23;

// console.log(age);

// {
//     console.log(age);
// }

// if(true){
//     console.log(age);
// }
// for(let i=1;i<=2;i++){
//     console.log(age);
// }
// function check(){
//     console.log("hello", age);
// }

// check();


// function scope using var or let or const

// function sayHello(){
//     let fullName= "Harshpreet Singh";
//     console.log("Hello", fullName);
// }

// sayHello();
// console.log(fullName);



// Blocked scope using let and const (var is not block scope)

// {
//     let age=23;
// }
//     console.log(age)

// Temporal Dead Zone

console.log(age)
console.log("hello")  // Lines 45 to 47 are temporal dead zone 
let age = 2;
console.log(age)