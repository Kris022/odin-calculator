const numberBtns = document.querySelectorAll("[data-number]");
const screen = document.querySelector(".screen");

function showOnScreen(str) {
  screen.innerHTML = str;
}

numberBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    showOnScreen(e.target.innerHTML);
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
