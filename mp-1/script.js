function addition() {
    const num1 = parseFloat(document.getElementById('first-number').value);
    const num2 = parseFloat(document.getElementById('second-number').value);
    const result = num1 + num2;
    displayResult(result);
}

function subtraction() {
    const num1 = parseFloat(document.getElementById('first-number').value);
    const num2 = parseFloat(document.getElementById('second-number').value);
    const result = num1 - num2;
    displayResult(result);
}

function multiplication() {
    const num1 = parseFloat(document.getElementById('first-number').value);
    const num2 = parseFloat(document.getElementById('second-number').value);
    const result = num1 * num2;
    displayResult(result);
}

function division() {
    const num1 = parseFloat(document.getElementById('first-number').value);
    const num2 = parseFloat(document.getElementById('second-number').value);
    const result = num1 / num2;
    displayResult(result);
}

function power() {
    const base = parseFloat(document.getElementById('first-number').value);
    const exponent = parseFloat(document.getElementById('second-number').value);
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    displayResult(result);
}

function clearFields() {
    document.getElementById('first-number').value = "";
    document.getElementById('second-number').value = "";
    document.getElementById('output').innerHTML = "";
}

function displayResult(result) {
    const output = document.getElementById('output');
    output.innerHTML = result;
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}
