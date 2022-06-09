//validation for the form  
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => { //submit event
    let messages = []; //array to store the error messages
    if (email.value === '' || email.value == null) { //if email is empty
        messages.push('Email is required'); //push the error message into the array
    }
    
    if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {//check if email is valid
        messages.push('Email is not valid');
    }
    if (password.value.length < 6) { //if password is less than 6 characters
        messages.push('Password must be at least 6 characters'); //push the error message into the array
    }
    if (messages.length > 0) { //if the array has error messages
        e.preventDefault(); //prevent default action
        errorElement.innerText = messages.join(', '); //join the error messages into one string
    }    

})