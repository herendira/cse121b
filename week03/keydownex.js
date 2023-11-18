// Get the input field and output element
//const inputField = document.getElementById('inputField');
//const output = document.getElementById('output');

// Add an event listener for the keydown event
//inputField.addEventListener('keydown', function(event) {
    // Display the key code and the value of the pressed key
   // output.textContent = `Key Pressed: ${event.key} (Key Code: ${event.keyCode || event.which})`;
//});

const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
  // how do we know which key was pressed?
  console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}