const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

form.addEventListener('submit', runEvent);

// Keydown
taskInput.addEventListener('keydown', runEvent);
// Keyup
taskInput.addEventListener('keyup', runEvent);
// Keypress
taskInput.addEventListener('keypress', runEvent);
// Focus (mouse event)
taskInput.addEventListener('focus', runEvent);
// Blur (mouse event)
taskInput.addEventListener('blur', runEvent);
// Cut (mouse and keyboard event on cut)
taskInput.addEventListener('cut', runEvent);
// Paste  (mouse and keyboard event on paste)
taskInput.addEventListener('paste', runEvent);
// Input (type, cut or paste will triger this event)
taskInput.addEventListener('input', runEvent);
// Change (on select lists)
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);

  heading.innerText = e.target.value;

  // Get input value
  console.log(taskInput.value);

  e.preventDefault();
}