// Select input elements
const nameInputElement = document.querySelector('.nameInput');
const emailInputElement = document.querySelector('.emailInput');
const numberInputElement = document.querySelector('.numberInput');
const countryInputElement = document.querySelector('.countryInput');
const businessInputElement = document.querySelector('.businessInput');

// Function to change display and store values in localStorage
function change(classes) {
    let nameValue = nameInputElement.value;
    let emailValue = emailInputElement.value;
    let numberValue = numberInputElement.value;
    let countryValue = countryInputElement.value;
    let businessValue = businessInputElement.value;

    // Save updated values to localStorage
    localStorage.setItem('name', nameValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('number', numberValue);
    localStorage.setItem('country', countryValue);
    localStorage.setItem('business', businessValue);

    // Update the corresponding display elements based on the class
    if(classes == 'name') {
        document.querySelector('.js-name').textContent = nameValue;
        document.querySelector('.js-name-small').textContent = nameValue;
    }
    else if(classes == 'email') {
        document.querySelector('.js-email').textContent = emailValue;
    }
    else if(classes == 'number') {
        document.querySelector('.js-number').textContent = numberValue;
    }
    else if(classes == 'country') {
        document.querySelector('.js-country').textContent = countryValue;
    }
    else if(classes == 'business') {
        document.querySelector('.js-business').textContent = businessValue;
    }
}

// Load values from localStorage on page load
function loadValuesFromLocalStorage() {
    let storedName = localStorage.getItem('name');
    let storedEmail = localStorage.getItem('email');
    let storedNumber = localStorage.getItem('number');
    let storedCountry = localStorage.getItem('country');
    let storedBusiness = localStorage.getItem('business');

    // Populate input fields if values exist in localStorage
    if(storedName) {
        nameInputElement.value = storedName;
        document.querySelector('.js-name').textContent = storedName;
        document.querySelector('.js-name-small').textContent = storedName;
    }
    if(storedEmail) {
        emailInputElement.value = storedEmail;
        document.querySelector('.js-email').textContent = storedEmail;
    }
    if(storedNumber) {
        numberInputElement.value = storedNumber;
        document.querySelector('.js-number').textContent = storedNumber;
    }
    if(storedCountry) {
        countryInputElement.value = storedCountry;
        document.querySelector('.js-country').textContent = storedCountry;
    }
    if(storedBusiness) {
        businessInputElement.value = storedBusiness;
        document.querySelector('.js-business').textContent = storedBusiness;
    }
}

// Event listeners to detect changes and call the change function
nameInputElement.addEventListener('input', () => change('name'));
emailInputElement.addEventListener('input', () => change('email'));
numberInputElement.addEventListener('input', () => change('number'));
countryInputElement.addEventListener('input', () => change('country'));
businessInputElement.addEventListener('input', () => change('business'));

// Load stored values from localStorage when the page loads
window.onload = loadValuesFromLocalStorage;