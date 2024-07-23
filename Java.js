document.addEventListener('DOMContentLoaded', function() {
  let display = document.getElementById('display');
  let clearButton = document.getElementById('clear'); // Corrected singular form
  let equalsButton = document.getElementById('equals');
  let buttons = Array.from(document.querySelectorAll('.btn'));

  buttons.forEach(button => {
    button.addEventListener('click', function() { // Corrected event listener for click
      if (button.dataset.value) {
        display.value += button.dataset.value;
      }
    });
  });

  clearButton.addEventListener('click', function() {
    display.value = '';
  });

  equalsButton.addEventListener('click', function() {
    try {
      display.value = eval(display.value); // Consider alternative evaluation method (explained below)
    } catch (error) {
      display.value = "Error";
    }
  });
});
