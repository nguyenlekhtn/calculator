import operate from './calculator.js';

const digits = [...document.querySelectorAll('.digit')];
const display = document.querySelector('.display');
const operatorsBtn = [...document.querySelectorAll('.operator')];
const equalBtn = document.querySelector('.equal');
const ACBtn = document.querySelector('[data-value="AC"]');
const btns = document.querySelector('.buttons-grid');

const initValue = '0';
let displayValue = initValue;
// variable to replace display if just done computation
// let isDoneComputation = false;

function updateDisplay() {
  console.log(displayValue);
  display.textContent = displayValue;
}

function handleDigit(number) {
  // if just done computation then
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

let operand1 = null;
let operand2 = null;
let operator = '';

const operatorList = ['add', 'subtract', 'multiply', 'divide'];

function handleOperator(receivedOperator) {
  if (!operatorList.includes(receivedOperator)) {
    throw Error('Invalid operator');
  }

  // if there is querying calculation
  if (operand1 !== null && operator.length !== 0) {
    compute();
  }

  operator = receivedOperator;
  operand1 = Number(display.textContent);
  displayValue = initValue;
}

function undo() {
  const textContent = display.textContent;
  const sliced = textContent.slice(0, -1);
  display.textContent = sliced;
}

function compute() {
  operand2 = Number(display.textContent);
  if (operator.length !== 0) {
    const result = operate(operand1, operand2, operator);
    displayValue = String(result);
    updateDisplay();
    resetOps();
  }
}

function resetOps() {
  operand1 = null;
  operand2 = null;
  operator = '';
  displayValue = initValue;
}

function reset() {
  displayValue = initValue;
  resetOps();
  updateDisplay();
}

function handleDot() {
  if (!displayValue.match(/\./g)) {
    displayValue += '.';
    updateDisplay();
  }
}

function addEventListener() {
  btns.addEventListener('click', (e) => {
    const btnValue = e.target.dataset.value;
    switch (btnValue) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        handleDigit(btnValue);
        break;
      case 'add':
      case 'subtract':
      case 'divide':
      case 'multiply':
        handleOperator(btnValue);
        break;
      case 'equal':
        compute();
        break;
      case 'AC':
        reset();
        break;
      case '.':
        handleDot();
        break;
      case 'C':
        undo();
        break;
    }
  });
}

function initCalculator() {
  console.log(digits);
  console.log(display);
  addEventListener();
  // digits.forEach((digit) =>
  //   digit.addEventListener('click', (e) => {
  //     const number = e.target.dataset.value;
  //     handleDigit(number);
  //   })
  // );

  // operatorsBtn.forEach((operatorBtn) => {
  //   operatorBtn.addEventListener('click', handleOperator);
  // });

  // equalBtn.addEventListener('click', handleEqual);
}

export default initCalculator;
