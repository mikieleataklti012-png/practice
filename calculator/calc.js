function add(a, b) {
    let result=a + b;
    updateDisplay(result);
}

function subtract(a, b) {
    let result=a - b;
    updateDisplay(result);
}

function multiply(a, b) {
   let result=a * b;
    updateDisplay(result);
}

function divide(a, b) {
    if (b === 0) {
        let error= "Error: Division by zero is not allowed.";
        updateDisplay(error);
        return;
    }
    let result=a / b;
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

function resetCalculator() {
    firstNumber = "";
    secondNumber = "";
    opereter = "";
    updateDisplay("0");
}

let display= document.getElementById('display');
let p=document.createElement("p");
p.textContent="welcome";
    display.appendChild(p);

let buttons = document.querySelectorAll('#buttons button');
let value="";
let firstNumber="";
let secondNumber="";
let opereter="";
let first="";
let second="";

buttons.forEach(button => {
        button.addEventListener('click', () => {
        value = button.textContent;
        updateDisplay(value);

        if(value==="Clear"){
           resetCalculator();
           return;
        }

        if(value==="+"||value==="-"||value==="*"||value==="/"){
            updateDisplay(value);
            opereter=value;
        }

        if(value!=="+"&&value!=="-"&&value!=="*"&&value!=="/"&&value!=="="){
            
            if(opereter===""){
                firstNumber+=value;
                first=Number(firstNumber);
                updateDisplay(firstNumber);
                value="";
                return;
            }

            else if(opereter!==""){
                secondNumber+=value;
                second= Number(secondNumber);
                updateDisplay(secondNumber);
            }
        }

        if(value==="="){

            if(firstNumber!==""&&secondNumber!==""&&opereter!==""){
                operation(first,second,opereter);
                firstNumber="";
                secondNumber="";
                opereter="";
                return;
            }
            else{
                value="nothing to calculate";
                updateDisplay(value);
            }
               return; 
            }
        });
});




