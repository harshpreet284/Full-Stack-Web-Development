 
//  let firstPromise = new Promise ( (resolve,reject)=>{
    
//     setTimeout (function sayMyName (){
//         console.log("My Name is Harshpreet Singh");
//     }, 15000);
//     return 1;

//  });


let promise1 = new Promise ( (resolve,reject) =>{
    let success = false;
    if(success){
        resolve("Promise Fulfilled");
    }
    else{
        reject("Promise Rejected");
    }
});

promise1.then((message) =>{
    console.log("Message of then is " + message);
}).catch((error) => {
    console.log("Error : " + error)
})

