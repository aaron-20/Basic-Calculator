
//Disable muna lahat ng buttons habang walang lamang ang number value ang dalawang input
let calculate = document.getElementById('calculate');
let clear = document.getElementById('clear');

let addition = document.getElementById('addition');
let subtraction = document.getElementById('subtraction');
let multiplication = document.getElementById('multiplication');
let division = document.getElementById('division');

addition.disabled = true;
subtraction.disabled = true;
multiplication.disabled = true;
division.disabled = true;

calculate.disabled = true;
clear.disabled = true;

//Enable ang operation buttons kapag may number value na ang dalawang input
let num1 = parseFloat(document.getElementById('num1').value);
let num2 = parseFloat(document.getElementById('num2').value);

//hanggang hindi nagkakalaman ng number value and 2 inputs, disable ang operation buttons
function inputDetect() {
    if (num1 == "" && num2 == "") {
        addition.disabled = true;
        subtraction.disabled = true;
        multiplication.disabled = true;
        division.disabled = true;
    } else {
        addition.disabled = false;
        subtraction.disabled = false;
        multiplication.disabled = false;
        division.disabled = false;

        clear.disabled = false;
    }
}

// distinctions of operation buttons
let operation;
let result = document.getElementById('result');

function sum() {
    alert("You chose add operation!");
    calculate.disabled = false;

    operation = 0;
}

function diff() {
    alert("You chose subtract operation!");
    calculate.disabled = false;

    operation = 1;
}

function prod() {
    alert("You chose multiple operation!");
    calculate.disabled = false;

    operation = 2;
}

function quo() {
    alert("You chose divide operation!");
    calculate.disabled = false;

    operation = 3;
}

//calculations
function calc() {
    if (operation === 0) {
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let sum = num1 + num2;

        result.innerText = "The sum is: " + sum;
    } else if (operation === 1) {
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let diff = num1 - num2;

        result.innerText = "The difference is: " + diff;
    } else if (operation === 2) {
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let prod = num1 * num2;

        result.innerText = "The product is: " + prod;
    } else if (operation === 3) {
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let quo = num1 / num2;

        result.innerText = "The quotient is: " + quo;
    }
}

//Clearing input/s and disabling buttons
function clr() {
    let clrNum1 = document.getElementById('num1');
    let clrNum2 = document.getElementById('num2');

    clrNum1.value ="";
    clrNum2.value = "";

    addition.disabled = true;
    subtraction.disabled = true;
    multiplication.disabled = true;
    division.disabled = true;

    clear.disabled = true;
    calculate.disabled = true;

    result.innerText = "";
}








