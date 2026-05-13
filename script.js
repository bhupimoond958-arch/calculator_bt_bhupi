// 1. Splash Screen Logic
window.onload = function() {
    setTimeout(function() {
        const splash = document.getElementById('splash-screen');
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
        }, 500);
    }, 2000); // 2 seconds
};

// 2. Calculator Logic
let display = document.getElementById('display');

function appendNumber(num) {
    if (display.value === '0' && num === '0') return;
    if (display.value === '0' && num !== '0') {
        display.value = num;
        return;
    }
    display.value += num;
}

function appendOperator(op) {
    if (display.value === '') return;
    if (['+', '-', '*', '/'].includes(display.value[display.value.length - 1])) return;
    
    if (op === '.') {
        let lastOperatorIndex = Math.max(
            display.value.lastIndexOf('+'),
            display.value.lastIndexOf('-'),
            display.value.lastIndexOf('*'),
            display.value.lastIndexOf('/')
        );
        let currentNumber = display.value.substring(lastOperatorIndex + 1);
        if (currentNumber.includes('.')) return;
    }
    display.value += op;
}

function calculate() {
    try {
        if (display.value.includes('/0')) {
            display.value = 'Error: Division by 0';
            setTimeout(() => { display.value = ''; }, 2000);
            return;
        }
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => { display.value = ''; }, 2000);
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}    display.value = display.value.slice(0, -1);
}
