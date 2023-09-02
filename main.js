// ctrl + j for console
// one monkai

let displayString = "";

const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");

const clearBtn = document.querySelector(".clearBtn");

const screen = document.querySelector(".screen");

clearBtn.addEventListener("click", clearDisplay);

function updateDisplay(str) {
  displayString += str;
  screen.innerHTML = displayString;
}

function clearDisplay() {
  displayString = "";
  updateDisplay(displayString);
}

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayString += e.target.innerHTML;
  });
});

numberBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    updateDisplay(e.target.innerHTML);
  });
});

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}

function operate(numOne, numTwo, operator) {
  let result;
  switch (operator) {
    case "+":
      result = add(numOne, numTwo);
      break;
    case "-":
      result = subtract(numOne, numTwo);
      break;
    case "*":
      result = multiply(numOne, numTwo);
      break;
    case "/":
      result = divide(numOne, numTwo);
      break;
  }

  return result;
}
