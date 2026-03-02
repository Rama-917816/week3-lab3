#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * And advanced arithmetic operations:
 * - Modulo (%)
 * - Exponentiation (**)
 * - Square Root (sqrt)
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

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo with zero divisor');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
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
    case '%':
      return modulo(a, b);
    case '**':
      return power(a, b);
    default:
      throw new Error(`Invalid operator: ${operator}. Use +, -, *, /, %, or **`);
  }
}

function calculateSquareRoot(num) {
  const n = parseFloat(num);

  if (isNaN(n)) {
    throw new Error('Invalid input: operand must be a number');
  }

  return squareRoot(n);
}

function displayMenu() {
  console.log('\n=== CLI Calculator ===');
  console.log('Basic Operations: + (add), - (subtract), * (multiply), / (divide)');
  console.log('Advanced Operations: % (modulo), ** (power)');
  console.log('Format: number operator number (e.g., 5 + 3)');
  console.log('Square Root: sqrt <number> (e.g., sqrt 16)');
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
      
      // Handle sqrt command (single argument)
      if (tokens[0].toLowerCase() === 'sqrt' && tokens.length === 2) {
        const result = calculateSquareRoot(tokens[1]);
        console.log(`Result: ${result}\n`);
      } else if (tokens.length === 3) {
        // Handle binary operators
        const [num1, operator, num2] = tokens;
        const result = calculate(num1, operator, num2);
        console.log(`Result: ${result}\n`);
      } else {
        throw new Error('Invalid format. Use: number operator number OR sqrt <number>');
      }
    } catch (error) {
      console.error(`Error: ${error.message}\n`);
    }

    promptCalculation();
  });
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate, calculateSquareRoot };

// Run CLI only if this is the main module
if (require.main === module) {
  displayMenu();
  promptCalculation();
}
