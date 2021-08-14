// constant variables  which represent the numbers, operation, clear and delete buttons
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')



// Sum of a, b ...
let add = function (a, b) {
    return a + b
}

// Subtraction of a and b ...
let subtract = function (a, b) {
    return a - b
}

// Multiply a, b ...
let multiply = function (a, b) {
    return a * b
}

// Divide a,b ... 
let divide = function (a, b) {
    return a / b
}

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '−':
        return substract(a, b)
      case '×':
        return multiply(a, b)
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
  }
console.log(operate())
