let num1; 
let num2;
let operator;
let answer;

num1=+prompt("Enter first number");
num2=+prompt("enter second number");

operator= +prompt(
    `choose operator (numbers only)
    1. Addition
    2. Subtraction
    3.division
    4.multiplication
    5.modulus
    `
);

if(operator === 1){
    answer = num1 + num2;
    } 
    else if(operator === 2){
        answer = num1 - num2;
    }
    else if(operator===3){
        answer= num1 / num2;
    }
    else if (operator === 4){
        answer = num1*num2;
    }
    else{
        answer = num1%num2;
    }

alert("answer =" + answer);
