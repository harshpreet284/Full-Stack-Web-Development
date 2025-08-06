// class Human{

//     // Properties
//      age; // public
//      #wt=37; // private
//      ht= 189;

//      constructor (newAge, newWeight, newHeight){
//         this.age = newAge;
//         this.#wt = newWeight;
//         this.ht = newHeight;
//      }
//      // Behaviour
//      walking(){
//         console.log("I am walking", this.#wt);
//      }
//      running(){
//         console.log("I am running");
//      }
//      get fetchWeight(){
//         return this.#wt;
//      }
//      set updateWeight(val){
//         this.#wt=val;
//      }
// }

// let obj= new Human(43,65,178);
// console.log(obj.age);
// console.log(obj.fetchWeight);
// console.log(obj.ht);
// obj.walking();
// obj.running();

// Default Parameters

// function sayName(myName = "Harsh"){
//     console.log("My Name is :", myName);
// }

// sayName("Harshpreet Singh");

// function sayName(fName="Harsh", lName=fName.toUpperCase()){
//     console.log("My Name is :", fName," ",lName);
// }

// sayName();

// function solve(value={age:24,wt:64,ht:180}){
//     console.log(value);
// }

// solve();

// function solve(value=["You","are","fine"]){
//     console.log(value);
// }

// solve();

// function solve(value="Harsh"){
//     console.log(value);
// }

// solve(null);

// function solve(value="Harsh"){
//     console.log(value);
// }

// solve(undefined);

function getAge(){
    return 23;
}

function utility(name="Harsh",age=getAge()){
    console.log(name," ",age);
}

utility();