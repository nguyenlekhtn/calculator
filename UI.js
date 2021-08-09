import operate from './calculator.js';

const digits = [...document.querySelectorAll('.digit')];
const display = document.querySelector('.display');
const operatorsBtn = [...document.querySelectorAll('.operator')];
const equalBtn = document.querySelector('.equal');

let displayValue = '';

function updateDisplay() {
  console.log(displayValue);
  display.textContent = displayValue;
}

function handleDigit(number) {
  if (displayValue.length !== 0) {
    displayValue += number;
  } else {
    displayValue = number;
  }
  updateDisplay();
}

let operand1 = null;
let operand2 = null;
let operator = '';

function handleOperator(e) {
  operator = e.target.dataset.value;
  operand1 = Number(displayValue);
  displayValue = '';
}

function handleEqual(e) {
  operand2 = Number(displayValue);
  if (operator.length !== 0) {
    const result = operate(operand1, operand2, operator);
    displayValue = result;
    updateDisplay();
  }
}

function initCalculator() {
  console.log(digits);
  console.log(display);

  digits.forEach((digit) =>
    digit.addEventListener('click', (e) => {
      const number = e.target.dataset.value;
      handleDigit(number);
    })
  );

  operatorsBtn.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', handleOperator);
  });

  equalBtn.addEventListener('click', handleEqual);
}

export default initCalculator;
