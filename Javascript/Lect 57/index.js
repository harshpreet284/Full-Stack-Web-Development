// async function getData (){
//     setTimeout(function(){
//         console.log("I am inside set Timeout block")
//     }, 3000);
// }

// getData();

// let output = getData();

// Fake API

async function getData(){

    // get request - async
    let response = await fetch('https://jsonplaceholder.typicode.com//comments?postId=1');
    // parse json - async
    let data = await response.json();
    console.log(data);
}
getData();
