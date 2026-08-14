function add(a, b) {
    let result=Number(a)+Number(b);
    updateDisplay(result);
}

function subtract(a, b) {
    let result=Number(a)-Number(b);
    updateDisplay(result);
}

function multiply(a, b) {
   let result=Number(a)*Number(b);
    updateDisplay(result);
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    let result=Number(a)/Number(b);
    updateDisplay(result);
}

function operation(a, b, operator) {
    switch(operator){
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}

function updateDisplay(value) {
    p.textContent = value;
}

let display= document.getElementById('display');
let p=document.createElement("p");
p.textContent="welcome";
    display.appendChild(p);

let buttons = document.querySelectorAll('#buttons button');
let value="";
let firstNumber=[];
let secondNumber=[];
let i=0;
let opereter="";

buttons.forEach(button => {
        button.addEventListener('click', () => {
        value = button.textContent;
        updateDisplay(value);

        if(value!=="+"&&value!=="-"&&value!=="*"&&value!=="/"&&value!=="="){
            i++;
            firstNumber[i]=value;
            let number1=firstNumber.join("");
            updateDisplay(number1);
            return;
        }
        if(value==="+"||value==="-"||value==="*"||value==="/"){
            updateDisplay(value);
            opereter=value;
            if(value!=="="){
            i++;
            secondNumber[i]=value;
            let number2=secondNumber.join("");
            updateDisplay(number2);
            return;
        }
        }
        if(value==="="){
                operation(firstNumber,secondNumber,opereter);
            }
        if(value==="clear"){
            value="0";
            updateDisplay(value);
        }
        });
});




