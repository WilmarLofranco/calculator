
let a = "";
let b = "";
let operator = "";
let displayValue = "";

let display = document.querySelector("#display");
let numbers = document.querySelectorAll("[id^='number']");
let operators = document.querySelectorAll("[id^='operator']");
let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");

 function handleNumberClick(event) {
    if (operator === "") {
        if (a.length < 16) {
        a += event.target.value;
        displayValue = a;
        display.textContent = displayValue;
        }
    } else {
        if (b.length < 16) {
        b += event.target.value;
        displayValue = b;
        display.textContent = displayValue;
        }
    }
    if (a.length === 16 && b.length === 16) {
        numbers.forEach(function (button) {
            button.removeEventListener('click', handleNumberClick)
        })
    }
}

 function handleOperatorClick(event) {
    operator = event.target.value;
}

function operate () {
    let result;
    let numA = parseFloat(a);
    let numB = parseFloat(b);
    
    switch (operator) {
        case '+':
            result = numA + numB;
            break;
        case '-':
            result = numA - numB;
            break;
        case '*':
            result = numA * numB;
            break;
        case '/':
            if (numA === 0 || numB ===0) {
                result = "Error";
            } else {
            result = numA / numB;
            }
            break;
        default:
            result = "Error";
}
    displayValue = result;
    display.textContent = displayValue;
    a = result.toString();
    b = "",
    operator = "";
}

function erase () {
    a = "";
    b = "";
    displayValue = "";
    display.textContent = "";
    operator = ""; 
}

numbers.forEach(function(button) {
    button.addEventListener('click', handleNumberClick);
})

operators.forEach(function(button) {
    button.addEventListener('click', handleOperatorClick);
})

equals.addEventListener('click', operate);
clear.addEventListener('click', erase);
