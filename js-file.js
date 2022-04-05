let operator = null;
let lastOperation;

let operands = [];
let currentOperand = 0;

let isWaiting = false;

const addSymbol = "+";
const subtractSymbol = "-";
const multiplySymbol = "*";
const divisionSymbol = "/";

const operatorKeys = Array.from(document.querySelectorAll(".math"))
const digitKeys = Array.from(document.querySelectorAll(".digit"));
const currentCalc = document.querySelector("#currentCalc");
const previousCalc = document.querySelector("#previousCalc");

const clearKey = document.querySelector(".clear");
const equalsKey = document.querySelector(".equals");



//Event Listeners
digitKeys.forEach(key => key.addEventListener("click", digitSelector));

operatorKeys.forEach(key => key.addEventListener("click", (e) =>{
  removeClasses();
  if (operator != null){
    operands[currentOperand] = parseInt(currentCalc.textContent);
    operate();
  }
  operator = e.target.id;
  operands[currentOperand++] = parseInt(currentCalc.textContent);
  key.classList.add("operatorSelected")
  isWaiting = true;
}));

function removeClasses () {
  operatorKeys.forEach(key => key.classList.remove("operatorSelected"))
}

clearKey.addEventListener("click", () => {
  clearValues();
  removeClasses();
});

equalsKey.addEventListener("click", equals);

function equals() {
  operands[currentOperand] = parseInt(currentCalc.textContent);
  operate();
  operator = null;
  removeClasses();
}

function digitSelector(e) {
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

function clearCurrentCalc() {
  currentCalc.textContent = 0;
  
}

function clearValues() {
  currentCalc.textContent = "";
  previousCalc.textContent = "";
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

function updatePreviousCalc (){
  if(previousCalc == "0"){
    previousCalc.textContent = `${operands[currentOperand]} ${operator} `
  }else {
    previousCalc.textContent += `${operands[currentOperand]} ${operator} `
  }
}

//Logical functions
function add() {
  currentCalc.textContent = operands[currentOperand - 1] + operands[currentOperand];
}

function subtract(numA, numB) {
  currentCalc.textContent = operands[currentOperand - 1] - operands[currentOperand];
}

function multiply(numA, numB) {
  currentCalc.textContent = operands[currentOperand - 1] * operands[currentOperand];
}

function divide(numA, numB) {
  currentCalc.textContent = operands[currentOperand - 1] / operands[currentOperand];
}
