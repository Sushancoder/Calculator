const display = document.getElementById('display');
const keys = document.querySelectorAll('.key');

let calculation = '';
let result = '';

keys.forEach(key => {
  key.addEventListener('click', () => {
    const value = key.textContent;

    if (value === 'C') {
      calculation = '';
      result = '';
      display.value = '';
    } else if (value === '=') {
      try {
        result = eval(calculation);
        display.value = result;
        calculation = result;
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      calculation += value;
      display.value = calculation;
    }
  });
});