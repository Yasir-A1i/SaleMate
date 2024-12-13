// Select input elements
const nameInputElement = document.querySelector('.nameInput');
const emailInputElement = document.querySelector('.emailInput');
const numberInputElement = document.querySelector('.numberInput');
const countryInputElement = document.querySelector('.countryInput');
const businessInputElement = document.querySelector('.businessInput');
const passwordInputElement = document.querySelector('.passwordInput');

// Function to change display and store values in localStorage
function change(classes) {
    let nameValue = nameInputElement.value;
    let emailValue = emailInputElement.value;
    let numberValue = numberInputElement.value;
    let countryValue = countryInputElement.value;
    let businessValue = businessInputElement.value;
    let passwordValue = passwordInputElement.value;
    let passwordHidden = true;

    // Check if fields are empty, and alert the user to input something
    if (classes === 'name' && nameValue === '') {
        document.querySelector('.js-wrong-name').classList.add('visible-anything');
        return;
    } else if (classes === 'email' && emailValue === '') {
        document.querySelector('.js-wrong-email').classList.add('visible-anything');
        return;
    } else if (classes === 'number' && numberValue === '') {
        alert('Please enter a phone number.');
        return;
    } else if (classes === 'country' && countryValue === '') {
        alert('Please enter a country.');
        return;
    } else if (classes === 'business' && businessValue === '') {
        alert('Please enter a business name.');
        return;
    } // In the change function, modify the part for password validation:
    else if (classes == 'password') {
        // Password should have at least 8 characters and contain at least one number
        const passwordPattern = /(?=.*\d).{8,}/; // Regex for at least one number and 8 characters
    
        if (!passwordPattern.test(passwordValue)) {
            alert('Password must be at least 8 characters long and contain at least one number.');
            return;
        }
    
        // If validation passes, update the display with '*' for each character in the password
        document.querySelector('.js-password').textContent = '*'.repeat(passwordValue.length);
    }
    

    // Validate email for correct format (should end with @gmail.com)
    if (classes === 'email' && !emailValue.endsWith('@gmail.com')) {
        document.querySelector('.js-incorrect-email').classList.add('visible-anything');
        return;
    }

    // Save updated values to localStorage
    localStorage.setItem('name', nameValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('number', numberValue);
    localStorage.setItem('country', countryValue);
    localStorage.setItem('business', businessValue);
    localStorage.setItem('password', passwordValue);
    localStorage.setItem('passwordHidden', passwordHidden);

    // Update the corresponding display elements based on the class
    if (classes == 'name') {
        document.querySelector('.js-wrong-name').classList.remove('visible-anything');
        document.querySelector('.js-name').textContent = nameValue;
        document.querySelector('.js-name-small').textContent = nameValue;
    }
    else if (classes == 'email') {
        document.querySelector('.js-wrong-email').classList.remove('visible-anything');
        document.querySelector('.js-incorrect-email').classList.remove('visible-anything');
        document.querySelector('.js-email').textContent = emailValue;
    }
    else if (classes == 'number') {
        document.querySelector('.js-number').textContent = numberValue;
    }
    else if (classes == 'country') {
        document.querySelector('.js-country').textContent = countryValue;
    }
    else if (classes == 'business') {
        document.querySelector('.js-business').textContent = businessValue;
    }
    else if (classes == 'password') {
        document.querySelector('.js-password').textContent = '*'.repeat(passwordValue.length);
    }
    else if(classes = 'passwordHidden'){
    hidepassword(passwordHidden);
}
}

// Load values from localStorage on page load
function loadValuesFromLocalStorage() {
    let storedName = localStorage.getItem('name');
    let storedEmail = localStorage.getItem('email');
    let storedNumber = localStorage.getItem('number');
    let storedCountry = localStorage.getItem('country');
    let storedBusiness = localStorage.getItem('business');
    let storedPassword = localStorage.getItem('password');
    let passwordHidden = localStorage.getItem('passwordHidden');

    // Set default password value if no value is stored
    if (!storedPassword) {
        passwordInputElement.value = "Matric Pass 10";  // Set default value
        document.querySelector('.js-password').textContent = "Matric Pass 10";
    } else {
        passwordInputElement.value = storedPassword;
        document.querySelector('.js-password').textContent = storedPassword;
    }

    // Populate input fields if values exist in localStorage
    if (storedName) {
        document.querySelector('.js-name').textContent = storedName;
        document.querySelector('.js-name-small').textContent = storedName;
    }
    if (storedEmail) {
        document.querySelector('.js-email').textContent = storedEmail;
    }
    if (storedNumber) {
        document.querySelector('.js-number').textContent = storedNumber;
    }
    if (storedCountry) {
        document.querySelector('.js-country').textContent = storedCountry;
    }
    if (storedPassword) {
        document.querySelector('.js-password').textContent = storedPassword;
    }
    hidepassword(passwordHidden);    
}

function hidepassword(passwordHidden){
    let passwordValue = passwordInputElement.value; 
    if (passwordHidden = true) {
        document.querySelector('.js-password').textContent = passwordValue; // Show the actual password
        passwordHidden = false;
        passwordViewBtn.textContent = 'Hide'; // Set button text to 'Hide'
    } else {
        document.querySelector('.js-password').textContent = '*'.repeat(passwordValue.length); // Mask password with '*'
        passwordHidden = true;
        passwordViewBtn.textContent = 'View'; // Set button text to 'View'
    }
}





// Load stored values from localStorage when the page loads
window.onload = loadValuesFromLocalStorage;
