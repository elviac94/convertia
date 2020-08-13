'use-strict';
const phoneIcon = document.querySelector('.phone__container');
const home = document.querySelector('.main__home');
const contractSection = document.querySelector('.contract__container');

const getContractSection = () =>{
    
    if(!home.classList.contains('hidden')){
        home.classList.add('hidden')
        contractSection.classList.remove('hidden')
    }
}

phoneIcon.addEventListener('click',getContractSection);