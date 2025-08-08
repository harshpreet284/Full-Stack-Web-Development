// compile time error

// syntax error

// console.log(1);

// runtime error

// reference error

// console.log(x);

// try{
//     console.log("try block starts here");
//     console.log(x);
//     console.log("try block ends here");

//     //a

//     //b

//     //c
// }   

// catch (e){
//     //retry logic
//     //fallback mechanism
//     // logging
//     // custom error
//     console.log("I AM IN CATCH BLOCK")
//     console.log("Your error is here:",e)

// }       

// finally{
//     console.log("I will always run")
// }

// try{
//     console.log(x);
// }

// // Custom Error

// catch(e){
//     throw new Error("Where is x declared ?");
// }

let errorcode = 100;
if (errorcode == 100){
    throw new Error ("Invalid JSON")
}