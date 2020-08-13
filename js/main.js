'use-strict';
const phoneIcon = document.querySelector('.phone__container');
const contractButton = document.querySelector('.contract__button');
const home = document.querySelector('.main__home');
const contractSection = document.querySelector('.contract__container');

const getContractSection = () =>{

    if(!home.classList.contains('hidden')){
        home.classList.add('hidden')
        contractSection.classList.remove('hidden')
    }
}

contractButton.addEventListener('click',getContractSection);