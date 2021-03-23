function add(a, b) {
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == 0) return "INVALID";
    return a / b;
}

function operate(a, b, operator){
    switch (operator) {
        case 'add': return add(a, b);
        case 'subtract': return subtract(a, b);
        case 'multiply': return multiply(a, b);
        case 'divide': return divide(a, b);
    }

    
}
let operand1 = 0, operand2 = 0;
let ops;
const numbers = [...document.querySelectorAll('.number')];
let displayValue = '';
const display = document.querySelector('.display');

numbers.forEach(number => {
    number.addEventListener('click', event => {
        displayValue += event.target.textContent;
        changeDisplayValue(displayValue);

    });
})

const operators = [...document.querySelectorAll('.operator')];
operators.forEach(operator => {

    operator.addEventListener('click', e => {
        calculate();
        ops = e.target.id;
    });
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', e => {
    calculate();
    ops = '';
})

function calculate() {
    displayValue = '';
    operand2 = Number(display.textContent);
    if (ops){

      operand1 = operate(operand1, operand2, ops);
    }
        
    else
        operand1 = operand2;
    changeDisplayValue(operand1);
}

const decimal = document.querySelector('#dot');
decimal.addEventListener('click', e => {
    if(!display.textContent.match(/\./g))
    {
        display.textContent = display.textContent + '.';
        displayValue = display.textContent;
    }
    

})

const clear = document.querySelector('#clear');
clear.addEventListener('click', e => {
    display.textContent = '0';
    displayValue = '';
    operand1 = 0;
    operand2 = 0;
    ops = '';x
});

function changeDisplayValue(value)
{
    if(String(value).match(/^[\d\.]{0,7}$/))
    {
        console.log("matched");
        display.textContent = value;
    }
    else if(String(value).match(/^[\d\.]{8,}$/))
    {
      console.log("Bigger");
      value = value.toPrecision(5);
      display.textContent = value;
    }
}