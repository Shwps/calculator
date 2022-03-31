let operator = null;
let lastOperation;

let operands = [];
let currentOperand = 0;

let isWaiting = false;

const addSymbol = "+";
const subtractSymbol = "-";
const multiplySymbol = "*";
const divisionSymbol = "/";

const digitKeys = Array.from(document.querySelectorAll(".digit"));
const display = document.querySelector("#display");

const clearKey = document.querySelector(".clear");
const addKey = document.querySelector(".add");
const equalsKey = document.querySelector(".equals");
const subtractKey = document.querySelector(".subtract");
const multiplyKey = document.querySelector(".multiply");
const divisionKey = document.querySelector(".division");

//Event Listeners

for (let i = 0; i < 10; i++) {
  digitKeys[i].addEventListener("click", digitSelector);
}

clearKey.addEventListener("click", clearValues);

addKey.addEventListener("click", () => {
  if (operator != null) {
    operands[currentOperand] = parseInt(display.textContent);
    operate();
  }
  operator = addSymbol;
  operands[currentOperand++] = parseInt(display.textContent);
  isWaiting = true;
});

subtractKey.addEventListener("click", () => {
  if (operator != null) {
    operands[currentOperand] = parseInt(display.textContent);
    operate();
  }
  operator = subtractSymbol;
  operands[currentOperand++] = parseInt(display.textContent);
  isWaiting = true;
});

multiplyKey.addEventListener("click", () => {
  if (operator != null) {
    operands[currentOperand] = parseInt(display.textContent);
    operate();
  }
  operator = multiplySymbol;
  operands[currentOperand++] = parseInt(display.textContent);
  isWaiting = true;
});

divisionKey.addEventListener("click", () => {
  if (operator != null) {
    operands[currentOperand] = parseInt(display.textContent);
    operate();
  }
  operator = divisionSymbol;
  operands[currentOperand++] = parseInt(display.textContent);
  isWaiting = true;
});

equalsKey.addEventListener("click", equals);

function equals() {
  operands[currentOperand] = parseInt(display.textContent);
  operate();
}

function digitSelector(e) {
  if (isWaiting == true) {
    clearDisplay();
    isWaiting = false;
  }
  if (display.textContent == "0") {
    display.textContent = e.target.textContent;
  } else {
    display.textContent += e.target.textContent;
  }
}

function clearDisplay() {
  display.textContent = 0;
}

function clearValues() {
  display.textContent = 0;
  operator = null;
}

function operate() {
  switch (operator) {
    case addSymbol:
      add();
      break;
    case subtractSymbol:
      subtract();
      break;
    case multiplySymbol:
      multiply();
      break;
    case divisionSymbol:
      divide();
      break;
    default:
      break;
  }
}

//Logical functions
function add() {
  display.textContent = operands[currentOperand - 1] + operands[currentOperand];
}

function subtract(numA, numB) {
  display.textContent = operands[currentOperand - 1] - operands[currentOperand];
}

function multiply(numA, numB) {
  display.textContent = operands[currentOperand - 1] * operands[currentOperand];
}

function divide(numA, numB) {
  display.textContent = operands[currentOperand - 1] / operands[currentOperand];
}
