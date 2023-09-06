class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement; // Calculator screen
    this.clear();
  }

  clear() {
    this.numOne = "";
    this.numTwo = "";
    this.operator = null;
    this.equation = "";
  }

  appendNumber(number) {
    if (!this.operator) {
      this.numOne = this.numOne.toString() + number;
    } else {
      this.numTwo = this.numTwo.toString() + number;
    }
    this.equation = this.equation.toString() + number.toString();
  }

  appendOperator(operator) {
    if (this.numOne) {
      this.operator = operator;
      this.equation = this.equation.toString() + this.operator.toString();
    }
  }

  updateDisplay() {
    this.displayElement.innerText = this.equation;
  }

  operate() {
    switch (this.operator) {
      case "+":
        return parseFloat(this.numOne) + parseFloat(this.numTwo);
        break;
      case "-":
        return parseFloat(this.numOne) - parseFloat(this.numTwo);
        break;
      case "*":
        return parseFloat(this.numOne) * parseFloat(this.numTwo);
        break;
      case "/":
        return parseFloat(this.numOne) / parseFloat(this.numTwo);
        break;
    }
  }

  getResult() {
    this.equation = this.operate();
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-all-clear]");
const calcDisplay = document.querySelector(".display");

const calculator = new Calculator(calcDisplay);

clearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.appendNumber(btn.innerText);
    calculator.updateDisplay();
  });
});

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.appendOperator(btn.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.getResult();
  calculator.updateDisplay();
});
