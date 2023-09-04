class Calculator {
  constructor(currentDisplayText) {
    
    this.currentDisplayText = currentDisplayText;
    this.clear();
  }

  clear() {
    this.currentDisplayText = "";
    this.operator = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.currentDisplayText = number;
  }

  chooseOperator(operator) {}

  computeFunction() {}

  updateDisplay() {
    this.currentDisplayText.innerText = this.currentDisplayText;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const displayText = document.querySelector(".display");

const calculator = new Calculator(displayText);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerText)
    calculator.appendNumber(button.innerText);
    // displayText.innerText = button.innerText
    calculator.updateDisplay()
  });
});
