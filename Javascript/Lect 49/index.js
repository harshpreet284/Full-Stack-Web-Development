// Object Dynamic in nature

// let obj= {
//     age: 23,
//     wt: 67,
//     ht: 178
// };

// console.log(obj);

// obj.color = "White";

// console.log(obj);

// Object copying (creating many sources for one object)

// let src= {
//     age: 23,
//     wt: 67,
//     ht: 178
// };

// let dest = src;

// console.log(src);
// console.log(dest);

// src.age = 43;

// console.log(src);
// console.log(dest);


// Object cloning (using spread operator)
// let src= {
//     age: 23,
//     wt: 67,
//     ht: 178
// };

// let dest = {...src};

// console.log(src);
// console.log(dest);

// src.age = 43;

// console.log(src);
// console.log(dest);


// Object cloning (using assign method)
// let src= {
//     age: 23,
//     wt: 67,
//     ht: 178
// };

// let dest = Object.assign({},src);

// console.log(src);
// console.log(dest);

// src.age = 43;

// console.log(src);
// console.log(dest);




// Object cloning (using iteration method)
let src= {
    age: 23,
    wt: 67,
    ht: 178
};

let dest = {};

for( let key in src){

    let newKey = key;
    let newValue = src[key];
    dest[newKey]= newValue;

}

console.log(src);
console.log(dest);

src.age = 43;

console.log(src);
console.log(dest);