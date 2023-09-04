class Calculator {
  constructor(currentDisplayElement) {
    this.currentDisplayElement = currentDisplayElement;
    this.clear();
  }

  clear() {
    this.currentDisplayText = "";
    this.operator = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.currentDisplayText = this.currentDisplayText.toString() + number.toString();
  }

  chooseOperator(operator) {}

  compute() {}

  updateDisplay() {
    this.currentDisplayElement.innerText = this.currentDisplayText;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-all-clear]");
const displayText = document.querySelector(".display");

const calculator = new Calculator(displayText);


clearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
