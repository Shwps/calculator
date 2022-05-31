let operator = null;
let lastOperation;

let operands = [];
let currentOperand = 0;

let one;
let two;

let isWaiting = false;
let onlyOperator = false;

const addSymbol = "+";
const subtractSymbol = "-";
const multiplySymbol = "*";
const divisionSymbol = "/";

const operatorKeys = Array.from(document.querySelectorAll(".math"));
const digitKeys = Array.from(document.querySelectorAll(".digit"));
const currentCalc = document.querySelector("#currentCalc");
const previousCalc = document.querySelector("#previousCalc");

const clearKey = document.querySelector(".clear");
const equalsKey = document.querySelector(".equals");

//Event Listeners
digitKeys.forEach((key) => key.addEventListener("click", digitSelector));

operatorKeys.forEach((key) =>
  key.addEventListener("click", (e) => {
    removeClasses();
    if (operator != null) {
      two = parseFloat(currentCalc.textContent);
      operate();
    }
      operator = e.target.id;
      one = parseFloat(currentCalc.textContent);
      key.classList.add("operatorSelected");
      isWaiting = true;
      updatePreviousCalc();
      onlyOperator = false;
  }));

function removeClasses() {
  operatorKeys.forEach((key) => key.classList.remove("operatorSelected"));
}

clearKey.addEventListener("click", () => {
  clearValues();
  removeClasses();
});

equalsKey.addEventListener("click", equals);

function equals() {
  if (operator != null) {
    two = parseFloat(currentCalc.textContent);
    operate();
    operator = null;
    removeClasses();
    isWaiting = true;
    updatePreviousCalc();
    clearOperands()
    onlyOperator = true;
  }
}

function digitSelector(e) {
  if(previousCalc.textContent == "" || operator != null){
    if (isWaiting == true) {
    clearCurrentCalc();
    isWaiting = false;
    }
    if (currentCalc.textContent == "0") {
      currentCalc.textContent = e.target.textContent;
    } else {
      currentCalc.textContent += e.target.textContent;
    }
  }
}

function clearCurrentCalc() {
  currentCalc.textContent = "0";
}

function isOperandsNull() {
  if(one == null && two == null){
    return true;
  }
  return false;
}

function clearOperands(){
  one = null;
  two = null;
}

function isOperatorNull(){
  if(operator == null){
    return true;
  } else {
    return false;
  }
}

function clearValues() {
  currentCalc.textContent = "0";
  previousCalc.textContent = "";
  operator = null;
  one = null;
  two = null;
  isWaiting = false;
  onlyOperator = false;
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

function updatePreviousCalc() {
  if(onlyOperator){
    previousCalc.textContent += ` ${operator} `;
  } else if (operator == null) {
    previousCalc.textContent += `${two}`;
  } else {
    previousCalc.textContent += `${two} ${operator} `;
  }
}

//Logical functions
function add() {
  currentCalc.textContent = one + two;
}

function subtract(numA, numB) {
  currentCalc.textContent = one - two;
}

function multiply(numA, numB) {
  currentCalc.textContent = one * two;
}

function divide(numA, numB) {
  currentCalc.textContent = one / two;
}
