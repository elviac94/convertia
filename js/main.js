'use-strict';
const phoneIcon = document.querySelector('.phone__container');
const contractButton = document.querySelector('.contract__button');
const home = document.querySelector('.main__home');
const contractSection = document.querySelector('.contract__container');
const smallCircles = document.querySelectorAll('.offer__circle');
const offerBlocks = document.querySelectorAll('.offers__container--element');
const firstPopUp = document.querySelector('.pop-up__container--first');
const closePopUp = document.querySelector('.pop-up__close');

const getContractSection = () =>{

    if(!home.classList.contains('hidden')){
        home.classList.add('hidden')
        contractSection.classList.remove('hidden')
    }
}

const showMoreOptions = (offerBlock)=>{

    if(!offerBlock.classList.contains('open')){
    offerBlock.style.cssText='height:120px';
    offerBlock.classList.add('open')
    addMoreInfo(offerBlock)

    } else if(offerBlock.classList.contains('open')){
        offerBlock.style.cssText='height:80px';
        offerBlock.classList.remove('open')
    }
    
}

const addMoreInfo =(selectedBlock)=>{
 if(selectedBlock.classList.contains('open')){
    const moreTextContainer=document.createElement('p');
    const text= document.createTextNode('TELEFONÍA FIJA: Llamadas ilimitadas MEX / EUA / CAN / Incluye llamadas ilimitadas a celular');
    moreTextContainer.appendChild(text)
    selectedBlock.appendChild(moreTextContainer)
 }
}


offerBlocks.forEach(offerBlock=>{
    const smallCircle= offerBlock.querySelector('.offer__circle');
    smallCircle.addEventListener('click',()=>showMoreOptions(offerBlock));
})

const openPopUp=()=>{
    firstPopUp.classList.remove('hidden');
}

const toClosePopUp=()=>{
    firstPopUp.classList.add('hidden')
}

phoneIcon.addEventListener('click',openPopUp);
closePopUp.addEventListener('click', toClosePopUp);
contractButton.addEventListener('click',getContractSection);