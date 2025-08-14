// function changeText(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Harshpreet"
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click',changeText);

// fpara.removeEventListener('click',changeText);

// let anchorElement = document.getElementById('fanchor');

// function changeBehavior (event){
//     event.preventDefault();
//     anchorElement.textContent = "Click Done";
// }

// anchorElement.addEventListener('click', changeBehavior);

// let paras = document.querySelectorAll('p');

function alertPara (event){
    if(event.target.nodeName === 'SPAN'){
        alert("You have clicked on para: "+event.target.textContent);
    }
}

// for(let i= 0; i<paras.length;i++ ){
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }


let mydiv = document.getElementById('wrapper');
document.addEventListener('click', alertPara);