import './style.css';



let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;


window.appendNumber = function (number) {
    currentInput += number;
    display.value = currentInput;
};

window.appendOperator = function (op) {
    if (currentInput === '') return;
    if (firstOperand !== null) {
        calculate();
    }
    firstOperand = parseFloat(currentInput);
    operator = op;
    currentInput = '';
};

window.clearDisplay = function () {
    currentInput = '';
    operator = null;
    firstOperand = null;
    display.value = '';
};

window.calculate = function () {
    if (operator === null || firstOperand === null || currentInput === '') return;
    const secondOperand = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
       
            result = firstOperand * secondOperand;
            break;
        case '/':
        
            if (secondOperand === 0) {
                display.value = 'Error';
                return;
            }
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    currentInput = String(result);
    operator = null;
    firstOperand = null;
    display.value = currentInput;
};

window.deleteLast = function () {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
};
