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
      operands[currentOperand] = parseFloat(currentCalc.textContent);
      operate();
      currentOperand++;
      updatePreviousCalc();
      operator = e.target.id;
      operands[currentOperand - 1] = parseFloat(currentCalc.textContent);
      key.classList.add("operatorSelected");
      isWaiting = true;
      onlyOperator = false;
    } else{
      operator = e.target.id;
      operands[currentOperand - 1] = parseFloat(currentCalc.textContent);
      key.classList.add("operatorSelected");
      isWaiting = true;
      updatePreviousCalc();
      onlyOperator = false;

    }
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
    operands[currentOperand] = parseFloat(currentCalc.textContent);
    operate();
    operator = null;
    removeClasses();
    isWaiting = true;
    updatePreviousCalc();
    operands[currentOperand++]
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
  if(operands[currentOperand - 1]  == null && operands[currentOperand] == null){
    return true;
  }
  return false;
}

function clearOperands(){
  operands = [];
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
  operands = [];
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
    previousCalc.textContent += `${(operands[currentOperand]).round(3)}`;
  } else {
    previousCalc.textContent += `${(operands[currentOperand - 1]).round(3)} ${operator}`;
  }
}

//Logical functions
const numFormat = new Intl.NumberFormat({ 
  maximumFractionDigits: 3,
 });

 Number.prototype.round = function(n){
   const decimals = Math.pow(10,n);
   return Math.round((this + Number.EPSILON) * decimals) / decimals;
 }

function add() {
  currentCalc.textContent = `${(operands[currentOperand-1] + operands[currentOperand]).round(3)}`;
}

function subtract(numA, numB) {
  currentCalc.textContent = `${(operands[currentOperand-1] - operands[currentOperand]).round(3)}`;
}

function multiply(numA, numB) {
  currentCalc.textContent = `${(operands[currentOperand-1] * operands[currentOperand]).round(3)}`;
}

function divide(numA, numB) {
  currentCalc.textContent = `${(operands[currentOperand-1] / operands[currentOperand]).round(3)}`;
}
