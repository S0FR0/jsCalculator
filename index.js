let add = (a, b) => {
    return a + b;
}

let subtract = (a, b) => {
    return a - b;
}

let multiply = (a, b) => {
    return a * b;
}

let divide = (a, b) => {
    return a / b;
}

let percentage = (a, b) => {
    return a % b;
}

let operate = (num1,  num2, operation) => {
    return operation(num1, num2);
}

let firstNumber = null

let secondNumber

let operand

const display = document.getElementById('display');

const btns = document.querySelectorAll('button');


btns.forEach((btn)=> {
    btn.addEventListener('click', () => {

        if(btn.id ==='C'){
            firstNumber = null;
            display.innerText =``;
        }

        else if(Number(btn.id)  >= 0 && Number(btn.id) <= 9)
            {if(display.innerText === 'x' || display.innerText === '+' || display.innerText === '-' || display.innerText === '/' || display.innerText === '%')
                    display.innerText = ``;
            if(display.innerText.length < 7)
                display.innerText += `${btn.id}`;}
        
        else if(btn.id === '.'){
            if(display.innerText.includes('.') !== true)
                display.innerText += '.'; 
        }

        else if(btn.id === 'change'){
            display.innerText = `${Number(display.innerText) * - 1}`;
        } 
        
        else if(btn.id==='='){
            secondNumber = Number(display.innerText);
            display.innerText = ``;
            switch (operand) {
                case 'add':
                    firstNumber = operate(firstNumber, secondNumber, add)
                    console.log(firstNumber)
                    break;
                case 'subtract':
                    firstNumber = operate(firstNumber, secondNumber, subtract)
                    console.log(firstNumber)
                    break;
                case 'multiply':
                    firstNumber = operate(firstNumber, secondNumber, multiply)
                    console.log(firstNumber)
                    break;
                case 'divide':
                    firstNumber = operate(firstNumber, secondNumber, divide)
                    console.log(firstNumber)
                    break;
                case 'percentage':
                    firstNumber = operate(firstNumber, secondNumber, percentage)
                    console.log(firstNumber)
                    break;}
            display.innerText = `${firstNumber}`;}
        

        else
            {    
            if(firstNumber === null)
                {
                    firstNumber = Number(display.innerText);
                    operand = btn.id;
                    display.innerText = `${btn.innerText}`;
                }
            
            else
                {secondNumber = Number(display.innerText);
            
                display.innerText = `${btn.innerText}`;
            switch (operand) {
                case 'add':
                    firstNumber = operate(firstNumber, secondNumber, add)
                    console.log(firstNumber)
                    break;
                case 'subtract':
                    firstNumber = operate(firstNumber, secondNumber, subtract)
                    console.log(firstNumber)
                    break;
                case 'multiply':
                    firstNumber = operate(firstNumber, secondNumber, multiply)
                    console.log(firstNumber)
                    break;
                case 'divide':
                    firstNumber = operate(firstNumber, secondNumber, divide)
                    console.log(firstNumber)
                    break;
                case 'percentage':
                    firstNumber = operate(firstNumber, secondNumber, percentage)
                    console.log(firstNumber)
                    break;
            }
            operand = btn.id;}}
    })
})