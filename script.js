let result = document.getElementById('result');

function appendValue(value) {
    result.innerHTML += value;
}

function clearResult() {
    result.innerHTML = '';
}

function calculateResult() {
    try {
        const expression = result.innerHTML;
        const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, ''); // Sanitize expression
        const calculatedResult = Function(`return ${sanitizedExpression}`)();
        result.innerHTML = calculatedResult;
    } catch (error) {
        result.innerHTML = 'Error';
    }
}

function backspace() {
    result.innerHTML = result.innerHTML.slice(0, -1);
}

function handleKeyboardInput(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendValue(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendValue(key);
    } else if (key === '.') {
        appendValue(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearResult();
    } else if (key === 'Backspace') {
        backspace();
    }
}

document.addEventListener('keydown', handleKeyboardInput);
