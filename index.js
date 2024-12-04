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


