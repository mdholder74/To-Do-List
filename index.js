const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const todoButton = document.querySelector('#todo-button');

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
  inputBox.value = '';
}
});