#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function calculate(num1, operator, num2) {
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid input: operands must be numbers');
  }

  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error(`Invalid operator: ${operator}. Use +, -, *, or /`);
  }
}

function displayMenu() {
  console.log('\n=== CLI Calculator ===');
  console.log('Operations: + (add), - (subtract), * (multiply), / (divide)');
  console.log('Format: number operator number (e.g., 5 + 3)');
  console.log('Type "exit" to quit\n');
}

function promptCalculation() {
  rl.question('Enter calculation: ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      rl.close();
      return;
    }

    try {
      const tokens = input.trim().split(/\s+/);
      if (tokens.length !== 3) {
        throw new Error('Invalid format. Use: number operator number');
      }

      const [num1, operator, num2] = tokens;
      const result = calculate(num1, operator, num2);
      console.log(`Result: ${result}\n`);
    } catch (error) {
      console.error(`Error: ${error.message}\n`);
    }

    promptCalculation();
  });
}

module.exports = { add, subtract, multiply, divide, calculate };

// Run CLI only if this is the main module
if (require.main === module) {
  displayMenu();
  promptCalculation();
}
