let operandA = 0;
let operandB = 0;
let operation;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const digitKeys = Array.from(document.querySelectorAll(".digit"));
const display = document.querySelector("#display");

const clearKey = document.querySelector(".clear");
const addKey = document.querySelector(".add");
const equalsKey = document.querySelector(".equals");
const subtractKey = document.querySelector(".subtract");

function operate(operandA, operandB, operation) {
  switch (operation) {
    case "+":
      add(operandA, operandB);
    case "-":
      subtract(operandA, operandB);
    case "*":
      multiply(operandA, operandB);
    case "/":
      divide(operandA, operandB);
    default:
      "bad input";
  }
}

//Event Listeners

for (let i = 0; i < 10; i++) {
  digitKeys[i].addEventListener("click", digitSelector);
}

clearKey.addEventListener("click", clearValues);

addKey.addEventListener("click", () => {
  operation = "+";
  operandA = parseInt(display.textContent);
  clearDisplay();
});

subtractKey.addEventListener("click", () => {
    operation = "-";
    operandA = parseInt(display.textContent);
    clearDisplay();
  });

equalsKey.addEventListener("click", () => {
  operandB = parseInt(display.textContent);
  operate(operandA, operandB, operation);
});

function digitSelector(e) {
  if (display.textContent == "0") {
    display.textContent = e.target.textContent;
  } else {
    display.textContent += e.target.textContent;
  }
}

function clearDisplay () {
    display.textContent = 0;
}

function clearValues() {
  display.textContent = 0;
  operandA = 0;
  operandB = 0;
}

//Logical functions
function add(numA, numB) {
  display.textContent = numA + numB;
}

function subtract(numA, numB) {
  display.textContent = numA - numB;
}

function multiply(numA, numB) {
  return numA * numB;
}

function divide(numA, numB) {
  return numA / numB;
}
