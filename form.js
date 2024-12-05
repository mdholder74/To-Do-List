// CODE FOR FORM VALIDATION

const form = document.getElementById('mainForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

// The 'input' event listener triggers every time the user types something into the firstNameInput field.
// Checks if the trimmed value of the input is an empty string.
firstNameInput.addEventListener('input', () => {
  if (firstNameInput.value.trim() === '') {
    firstNameInput.setCustomValidity(`"Don't" ghost us what's your first name?`);
  } else if (firstNameInput.value.length < 2) {
    firstNameInput.setCustomValidity(`First name must be at least 2 characters`);
  } else {
    firstNameInput.setCustomValidity('');// Reset the custom error message
  }
  firstNameInput.reportValidity(); // Trigger browser to show custom message
  
});

lastNameInput.addEventListener ('input', ()=> {
  if (lastNameInput.value.trim() === ''){
    lastNameInput.setCustomValidity(`Unless you're a secret agent, we need your last name`)
  } else if (lastNameInput.value.length < 2) {
    lastNameInput.setCustomValidity(`First name must be at least 2 characters`);
  } else {
    lastNameInput.setCustomValidity('');
  }
  lastNameInput.reportValidity(); // Trigger browser to show custom message

});

mainForm.addEventListener('submit', (e) => {
  let isValid = true;// Used to determine if the form is valid or not

  // This triggers the validation for the first and last name input
  firstNameInput.reportValidity();
  lastNameInput.reportValidity();

  // This checks if the first name input is valid. If it's not valid, set isValid to false
  if (!firstNameInput.checkValidity()) {
    isValid = false; 
  }

  if (!lastNameInput.checkValidity()) {
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  } else {
    alert('Form submitted successfully');
  } 
});
