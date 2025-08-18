const display = document.getElementById('display');
function appendToDisplay(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = ' ';
}
function calculateResult() {
  try {
    // Evaluate the expression in display
    display.value = eval(display.value) || '';
  } catch {
    display.value = 'Error';
  }
}
