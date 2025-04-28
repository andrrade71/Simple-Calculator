const displayElement = document.getElementById('display')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.getElementById('clear')
const equalsButton = document.getElementById('equals')

let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;
 
numberButtons.forEach(function(itemdaLista) {
    itemdaLista.addEventListener('click', function(event) { 
        const numeroClicado = event.target.textContent; 
        if (waitingForSecondOperand === true) { 
            displayElement.value = numeroClicado;
            waitingForSecondOperand = false; 
        } else {
            displayElement.value += numeroClicado; 
        }
    }); 
});

clearButton.addEventListener('click', function() {
displayElement.value = '';
});

operatorButtons.forEach(function(itemdaLista) {
    itemdaLista.addEventListener('click', function(event) {
        const operadorClicado = event.target.textContent; 
        firstOperand = displayElement.value;          
        operator = operadorClicado;                   
        waitingForSecondOperand = true;
    });
});

