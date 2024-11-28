const inputBox = document.querySelector('#input-box');
const listContainer = document.getElementById('list-container');
const todoButton = document.querySelector('#todo-button');
todoButton.style.backgroundColor = '#690cec85';


// Add new task
todoButton.addEventListener('click', () => {
  if (inputBox.value === '') {
    alert('Please enter a task before continuing.');
  } else {
    const li = document.createElement('li');
    li.innerHTML = inputBox.value; // Assign the value of the input box to the innerHTML of the li element
    listContainer.appendChild(li);

    const span = document.createElement('span');
    span.innerHTML = '❌'; 
    li.appendChild(span);
  }
  inputBox.value = ''; // Clear the input box after adding the task
  saveData() 
});

// Toggle and remove tasks
listContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked'); // Toggle the checked class on the target element
    saveData() 
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove(); // Remove the parent element of the target element
    saveData() 
  }
},false);

function saveData() {
  localStorage.setItem('todoListData', listContainer.innerHTML);// Save the list container's innerHTML to local storage
}

function showData() {
  listContainer.innerHTML = localStorage.getItem('todoListData');// Display the saved data from local storage
}

showData()


document.getElementById('main-form').addEventListener('submit', function (e) {
  let isValid = true;// This variable tracks whether the form passes all validation checks. If any field is invalid, this value will be set to false

  // Define validation rules
  const fields = [
      { id: 'validationFirstName', errorId: 'error-firstname', message: 'First name is required to submit form.' },
      { id: 'validationLastName', errorId: 'error-lastname', message: 'Last name is required to submit form.' },
      { id: 'validationUsername', errorId: 'error-username', message: 'Username is required to submit form.' },
  ];

  // Get the error template. This template contains the structure for the error message that will be cloned and displayed dynamically.
  const errorTemplate = document.getElementById('error-template');

  // Clear existing errors
  document.querySelectorAll('.error-message').forEach(error => error.remove());

  // Validate fields
  fields.forEach(field => {
      const input = document.getElementById(field.id);
      // Gets the value of the input field and removes any leading/trailing whitespace. 
      if (input.value.trim() === '') {
          // Clone the error message template
          const errorElement = errorTemplate.content.cloneNode(true);
          errorElement.querySelector('.error-message').textContent = field.message;//elects the error message element within the cloned template.  Sets the text content of the error message to the custom message defined for the field.

          // Insert the error message after the input field
          input.insertAdjacentElement('afterend', errorElement.querySelector('.error-message'));//Inserts the error message after the input field. This will display the error message below the input field.

          isValid = false;// Set isValid to false if any field is invalid
      }
  });

  // Prevent form submission to the server if invalid
  if (!isValid) {
      e.preventDefault();
  }
});


