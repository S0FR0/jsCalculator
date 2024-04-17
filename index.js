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

let num1

let operation

let num2

let operate = (num1, operation, num2,) => {
    return operation(num1, num2);
}

const display = document.getElementById('display');

const btns = document.querySelectorAll('button');

btns.forEach((btn)=> {
    btn.addEventListener('click', () => {
        
        lastValue = 0
        if (btn.id === 'C')
        {value = 0;
        display.innerText = ``;}
        
        else if (Number(btn.id) >= 0 && Number(btn.id) <= 9)
        {   display.innerText += `${btn.id}`;
        }
        
        else if (btn.id === '='){
            display.innerText = `${lastValue}`;
            }

        else
        {value = Number(display.innerText);
            if (oper === null)
                oper = btn.id;}
    })
})



// {if (oper === null){
//     numOne = Number(display.innerText);
//     oper = btn.id;
//     }
//     display.innerText += ``;
//     display.innerText += `${btn.id}`;
//     numTwo = Number(display.innerText);
//     switch(oper) {
//         case 'x':
//             numOne = multiply(numOne, numTwo);
//         case '/':
//             numOne = divide(numOne, numTwo);
//         case '+':
//             numOne = add(numOne, numTwo);
//         case '-':
//             numOne = subtract(numOne, numTwo);
//     oper = btn.id;
// }
// }