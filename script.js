const displayElement = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function clearCalculator() {
    displayElement.value = '';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
}

numberButtons.forEach(function(button) {
    button.addEventListener('click', function(event) { 
        const numeroClicado = event.target.textContent; 

        if (waitingForSecondOperand === true) { 
            displayElement.value = numeroClicado;
            waitingForSecondOperand = false; 
        } else {
            if (displayElement.value === '0') {
                 displayElement.value = numeroClicado;
            } else {
                 displayElement.value += numeroClicado; 
            }
        }
    }); 
});

operatorButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        const currentValue = parseFloat(displayElement.value);
        if (operator && !waitingForSecondOperand) {
            if (firstOperand === null) {
                 firstOperand = currentValue;
            } else {
                const result = calculate(parseFloat(firstOperand), currentValue, operator);
                displayElement.value = String(result);
                firstOperand = result;
            }
        } else {
             firstOperand = currentValue;
        }
        
        operator = event.target.textContent;
        waitingForSecondOperand = true;
    });
});


equalsButton.addEventListener('click', function() {
    if (operator && firstOperand !== null && !waitingForSecondOperand) { 
        const secondOperand = parseFloat(displayElement.value);
        
        const result = calculate(firstOperand, secondOperand, operator);

        if (isNaN(result)) {
            clearCalculator(); 
            displayElement.value = "Erro"; 
        } else {
            displayElement.value = String(result); 
            firstOperand = result; 
            operator = null; 
            waitingForSecondOperand = false;
        }
    }
});

clearButton.addEventListener('click', clearCalculator); 

function calculate(num1, num2, op) {
    switch (op) { 
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': 
            if (num2 === 0) { 
                alert('Erro: Não é possível dividir por zero!'); 
                return NaN; 
            }
            return num1 / num2; 
        default: 
             return NaN; 
    }
}