const nameInputElement = document.querySelector('.nameInput');
let nameValue = nameInputElement.value;
const emailInputElement = document.querySelector('.emailInput');
let emailValue = emailInputElement.value;
const numberInputElement = document.querySelector('.numberInput');
let numberValue = numberInputElement.value;
const countryInputElement = document.querySelector('.countryInput');
let countryValue = countryInputElement.value;
const businessInputElement = document.querySelector('.businessInput');
let businessValue = businessInputElement.value;

function change(classes){
    let nameValue = nameInputElement.value;
    let emailValue = emailInputElement.value;
    let numberValue = numberInputElement.value;
    let countryValue = countryInputElement.value;
    let businessValue = businessInputElement.value;
    console.log(nameValue);
    if(classes == 'name'){
        document.querySelector('.js-name').textContent=nameValue;
        document.querySelector('.js-name-small').textContent=nameValue;
    }
    else if(classes == 'email'){
        document.querySelector('.js-email').innerHTML=emailValue;
        document.querySelector('.js-email').innerHTML=emailValue;
    }
    else if(classes == 'country'){
        document.querySelector('.js-country').innerHTML=countryValue;
    }
    else if(classes == 'number'){
        document.querySelector('.js-number').innerHTML=numberValue;
    }
    else if(classes == 'business'){
        document.querySelector('.js-business').innerHTML=businessValue;
    }
}