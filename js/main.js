'use-strict';
const phoneIcon = document.querySelector('.phone__container');
const contractButton = document.querySelector('.contract__button');
const home = document.querySelector('.main__home');
const contractSection = document.querySelector('.contract__container');
const smallCircles = document.querySelectorAll('.offer__circle');
const offerBlocks = document.querySelectorAll('.offers__container--element');
const firstPopUp = document.querySelector('.pop-up__container--first');
const closePopUp = document.querySelector('.pop-up__close');
const bodyOver = document.querySelector('body');
const locationIcon = document.querySelector('.location__container');
const variableText = document.querySelector('.variable__text');

const getContractSection = () =>{

    if(!home.classList.contains('hidden')){
        home.classList.add('hidden');
        contractSection.classList.remove('hidden');
        locationIcon.classList.remove('hidden');
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

const openPopUp=(titulo)=>{
    firstPopUp.classList.remove('hidden');
    contractSection.style.cssText='overflow-y: hidden';
    home.style.cssText='overflow-y: hidden';
    bodyOver.style.cssText='overflow-y: hidden';
    if(titulo==='phone'){
        variableText.innerText= 'inigualble'
    }else {
        variableText.innerText= 'consulta tu cobertura'
    }

}

const toClosePopUp=()=>{
    firstPopUp.classList.add('hidden');
    contractSection.style.cssText='overflow-y: none';
    home.style.cssText='overflow-y: none';
    bodyOver.style.cssText='overflow-y: none';
}

phoneIcon.addEventListener('click',() => openPopUp('phone'));
locationIcon.addEventListener('click',()=> openPopUp('location'));
closePopUp.addEventListener('click', toClosePopUp);
contractButton.addEventListener('click',getContractSection);