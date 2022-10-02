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
    let finalItem = document.querySelector('#final__item');
//////////////////////////
    if (event.target.dataset.action === 'plusAll' || event.target.dataset.action === 'minusAll') {

        const counterWrapper = event.target.closest('.button__calc');

        counter = counterWrapper.querySelector('[data-counter]');

    }


//////////////////////////
    if (event.target.dataset.action === 'plusAll') {

        finalItem.innerText = ++finalItem.innerText;
        calcCartPrice();
        counter.innerText = ++counter.innerText;
    }


///////////////////////////////
    if (event.target.dataset.action === 'minusAll') {

        if(parseInt(counter.innerText) > 0) {
            finalItem.innerText = --finalItem.innerText;
            counter.innerText = --counter.innerText;

        } 
    }

    if (event.target.hasAttribute('data-action')) {
        calcCartPrice();
    }
});



function calcCartPrice() {

    const mainItem =  document.querySelectorAll('.item');

    let finalPrice = document.querySelector('.final__price');

    let totalPrice = 0;

    mainItem.forEach(function (item) {

        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.item__price');

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice = totalPrice + currentPrice;

    });

    finalPrice.innerText = totalPrice;
}
