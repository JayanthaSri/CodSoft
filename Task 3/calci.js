let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let calculator = {
    displayValue: '',
    firstOperand: null,
    secondOperand: null,
    operation: null,
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent; 
        switch (value) {
            case 'C': 
                calculator.displayValue = '';
                calculator.firstOperand = null;
                calculator.secondOperand = null;
                calculator.operation = null;
                break;
            case '=': 
                if (calculator.firstOperand !== null && calculator.operation) {
                    calculator.secondOperand = parseFloat(calculator.displayValue);
                    if (isNaN(calculator.secondOperand)) {
                        alert("Please enter a valid number.");
                        return;
                    }
                    let result = calculate(calculator.firstOperand, calculator.secondOperand, calculator.operation);
                    calculator.displayValue = result.toString();
                    calculator.firstOperand = null;
                    calculator.secondOperand = null;
                    calculator.operation = null;
                }
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                if (calculator.firstOperand === null) {
                    calculator.firstOperand = parseFloat(calculator.displayValue);
                }
                calculator.operation = value;
                calculator.displayValue = ''; 
                break;
            case '.':
                if (!calculator.displayValue.includes('.')) {
                    calculator.displayValue += value;
                }
                break;
            default: 
                if (calculator.displayValue === '0') {
                    calculator.displayValue = value; 
                } else {
                    calculator.displayValue += value; 
                }
        }
        display.value = calculator.displayValue; 
    });
});

function calculate(firstOperand, secondOperand, operation) {
    switch (operation) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand; 
    }
}