"use strict";

// const btnMinus = document.querySelector('[data-action="minusAll"]');
// const btnPlus = document.querySelector('[data-action="plusAll"]');
// const counter = document.querySelector('[data-counter]');

// // отслеживаею клик -
// btnMinus.addEventListener('click', function() {
//     if(parseInt(counter.innerText) > 0) {
//         counter.innerText = --counter.innerText;
//     } 
// });

// // отслеживаею клик +
// btnPlus.addEventListener('click', function() {
//     counter.innerText = ++counter.innerText;
// });

window.addEventListener('click', function (event) {


    let counter;

//////////////////////////
    if (event.target.dataset.action === 'plusAll' || event.target.dataset.action === 'minusAll') {

        const counterWrapper = event.target.closest('.button__calc');

        counter = counterWrapper.querySelector('[data-counter]');
    }


//////////////////////////
    if (event.target.dataset.action === 'plusAll') {

        counter.innerText = ++counter.innerText;
    }


///////////////////////////////
    if (event.target.dataset.action === 'minusAll') {

        if(parseInt(counter.innerText) > 0) {
            counter.innerText = --counter.innerText;
        } 
    }
});
