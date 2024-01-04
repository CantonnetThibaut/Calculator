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
