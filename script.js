const displayElement = document.getElementById('display')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.getElementById('clear')
const equalsButton = document.getElementById('equals')
 
numberButtons.forEach(function(itemdaLista) {
    itemdaLista.addEventListener('click', function(event) {
        const numeroClicado = event.target.textContent; 
        displayElement.value += numeroClicado;
    });
});