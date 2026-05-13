let display = document.getElementById('display');

function appendNumber(num) {
    // Prevent multiple leading zeros
    if (display.value === '0' && num === '0') {
        return;
    }
    // Replace single 0 with new number
    if (display.value === '0' && num !== '0') {
        display.value = num;
        return;
    }
    display.value += num;
}

function appendOperator(op) {
    // Prevent operator at the beginning
    if (display.value === '') {
        return;
    }
    // Prevent multiple operators in a row
    if (['+', '-', '*', '/'].includes(display.value[display.value.length - 1])) {
        return;
    }
    // Handle decimal point separately
    if (op === '.') {
        // Check if there's already a decimal in the current number
        let lastOperatorIndex = Math.max(
            display.value.lastIndexOf('+'),
            display.value.lastIndexOf('-'),
            display.value.lastIndexOf('*'),
            display.value.lastIndexOf('/')
        );
        let currentNumber = display.value.substring(lastOperatorIndex + 1);
        if (currentNumber.includes('.')) {
            return;
        }
    }
    display.value += op;
}

function calculate() {
    try {
        // Check for division by zero
        if (display.value.includes('/0')) {
            display.value = 'Error: Division by 0';
            setTimeout(() => {
                display.value = '';
            }, 2000);
            return;
        }
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            display.value = '';
        }, 2000);
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}