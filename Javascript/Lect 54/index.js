

// Code 1

const t1 = performance.now();

for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is Para " + i;
    document.body.appendChild(para);
}

const t2 =  performance.now();

console.log("Total Time by Code 1:"+ (t2-t1));

// Code 2

const t3 =  performance.now();

let mydiv = document.createElement('div');

for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is Para " + i;
    mydiv.appendChild(para);
}

document.body.appendChild(mydiv);

const t4 =  performance.now();

console.log("Total Time by Code 2:"+ (t4-t3));


// Best Code 

let fragment = document.createDocumentFragment();

for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is Para " + i;
    // NO reflow and no repaint for below line
    fragment.appendChild(para);
}
// Below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);