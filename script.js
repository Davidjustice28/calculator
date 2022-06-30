//currently has 3 issues
//1. Won't contine adding inputs to inputTwo. Only 1 and then goes to InputOne
//So you have to keep pressing add to add more digits to iinputTwo
//2. Multiplication function not working properly
//3. Empty function not clearing out anything. 
//* Use alert("working") to test if any errors also add borders to input divs


//Declaring main variables

let inputOne = document.querySelector(".inputone").innerText;
let inputTwo = document.querySelector(".inputtwo").innerText;
let operator = document.querySelector(".symbol");
let result = " ";
let initialValue = document.querySelector(".results");
initialValue.innerText = result;
let totalValue = undefined;
let symbol = undefined;
let lowerScreen = document.querySelector(".calculationscreen");
let choice = undefined;

//Declaring functions

function addValue(n) {
	let num = n;
	if(choice == inputTwo){
		inputTwo = " " + inputTwo + num;
		document.querySelector(".inputtwo").innerText = inputTwo;
	}
	
	else {	
		inputOne = " " + inputOne + num;
		document.querySelector(".inputone").innerText = inputOne;
	}
}

function oneButton() {
	addValue(1);
}

function twoButton() {
	addValue(2);	
}

function threeButton() {
	addValue(3);	
}

function fourButton() {
	addValue(4);	
}

function fiveButton() {
	addValue(5);
}

function sixButton() {
	addValue(6);	
}	

function sevenButton() {
	addValue(7);
}	

function eightButton() {
	addValue(8);
}
function nineButton() {
	addValue(9);	
}	

function zeroButton() {
	addValue(0);	
}	

function Add() {
	symbol = "addition";
	choice = inputTwo;
	operator.innerText = "+";
}

function subtract() {
	symbol = "subtraction";
	choice = inputTwo;
	operator.innerText = "-";
}


function multiply() {
	symbol = "multiplication";
	choice = inputTwo;
	operator.innerText = "x";
}

function divide() {
	symbol = "division";
	choice = inputTwo;
	operator.innerText = "/";
}

//empty function currently doesn't do anything
function Empty() {
	alert("hello");
	let inputOne = document.querySelector(".inputone")
	result = 0;
	initalValue = " ";
	operator.innerText = " ";
	inputOne.innerText = " ";
	let inputTwo = document.querySelector(".inputtwo")
	inputTwo.innerText = " ";
	
}

 	
function total() {
	inputOne = +inputOne;
	inputTwo = +inputTwo;
	
	switch (symbol){
		case "addition": 
			result = inputOne + inputTwo
			document.querySelector(".results").innerText = result
			break
		case "subtraction": 
			result = inputOne - inputTwo
			document.querySelector(".results").innerText = result;
			break
			
		//multiplication is currently not working
		case "multiplicaton": 
			result = inputOne*inputTwo
			document.querySelector(".results").innerText = result;
			break
		case "division": 
			result = inputOne / inputTwo
			document.querySelector(".results").innerText = result;
			break
		default: 
			result = inputOne;
			document.querySelector(".results").innerText = result
			break
	}
}

	
//Declaring buttons and the functions each will call
	
const one = document.getElementById("one");
one.addEventListener("click", oneButton);

const two = document.getElementById("two");
two.addEventListener("click", twoButton);

const three = document.getElementById("three");
three.addEventListener("click", threeButton);

const four = document.getElementById("four");
four.addEventListener("click", fourButton);

const five = document.getElementById("five");
five.addEventListener("click", fiveButton);

const six = document.getElementById("six");
six.addEventListener("click", sixButton);

const seven = document.getElementById("seven");
seven.addEventListener("click", sevenButton);

const eight = document.getElementById("eight");
eight.addEventListener("click", eightButton);

const nine = document.getElementById("nine");
nine.addEventListener("click", nineButton);

const zero = document.getElementById("zero");
zero.addEventListener("click", zeroButton);

const add = document.getElementById("plus");
add.addEventListener("click", Add);

const minus = document.getElementById("minus");
minus.addEventListener("click", subtract);

const times = document.getElementById("multiply");
times.addEventListener("click", multiply);

const divid = document.getElementById("divide");
divid.addEventListener("click", divide);

const equal = document.getElementById("equal");
equal.addEventListener("click", total);

const erase = document.getElementById("clear");
erase.addEventListener("click", Empty);

