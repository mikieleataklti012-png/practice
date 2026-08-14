function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

let display= document.getElementById('display');
let p=document.createElement("p");
p.textContent="welcome";
display.appendChild(p);

function updateDisplay(value) {
    p.textContent = value;
}

let buttons = document.querySelectorAll('#buttons button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;
        updateDisplay(value);
    });
});