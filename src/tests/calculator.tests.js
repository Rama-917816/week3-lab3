const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate, calculateSquareRoot } = require('../calculator');

/**
 * Calculator Unit Tests
 * Comprehensive tests for all arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (**)
 * - Square Root (sqrt)
 */

describe('Calculator - Addition', () => {
  test('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should add positive and negative numbers', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('should add two negative numbers', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test('should add zero', () => {
    expect(add(5, 0)).toBe(5);
  });

  test('should add decimals', () => {
    expect(add(2.5, 3.5)).toBe(6);
  });
});

describe('Calculator - Subtraction', () => {
  test('should subtract two positive numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('should subtract negative from positive', () => {
    expect(subtract(10, -5)).toBe(15);
  });

  test('should subtract positive from negative', () => {
    expect(subtract(-5, 10)).toBe(-15);
  });

  test('should subtract two negative numbers', () => {
    expect(subtract(-10, -3)).toBe(-7);
  });

  test('should subtract zero', () => {
    expect(subtract(5, 0)).toBe(5);
  });

  test('should subtract decimals', () => {
    expect(subtract(10.5, 3.5)).toBe(7);
  });
});

describe('Calculator - Multiplication', () => {
  test('should multiply two positive numbers', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('should multiply positive and negative numbers', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test('should multiply two negative numbers', () => {
    expect(multiply(-5, -4)).toBe(20);
  });

  test('should multiply by zero', () => {
    expect(multiply(10, 0)).toBe(0);
  });

  test('should multiply decimals', () => {
    expect(multiply(2.5, 4)).toBe(10);
  });

  test('should multiply by one', () => {
    expect(multiply(7, 1)).toBe(7);
  });
});

describe('Calculator - Division', () => {
  test('should divide two positive numbers', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('should divide with remainder', () => {
    expect(divide(10, 3)).toBeCloseTo(3.333, 2);
  });

  test('should divide positive by negative', () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test('should divide two negative numbers', () => {
    expect(divide(-20, -4)).toBe(5);
  });

  test('should divide decimals', () => {
    expect(divide(15.5, 5)).toBe(3.1);
  });

  test('should divide by one', () => {
    expect(divide(42, 1)).toBe(42);
  });

  test('should throw error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

  test('should throw error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Cannot divide by zero');
  });
});

describe('Calculator - Calculate Function', () => {
  test('should handle addition with string inputs', () => {
    expect(calculate('2', '+', '3')).toBe(5);
  });

  test('should handle subtraction with string inputs', () => {
    expect(calculate('10', '-', '4')).toBe(6);
  });

  test('should handle multiplication with string inputs', () => {
    expect(calculate('45', '*', '2')).toBe(90);
  });

  test('should handle division with string inputs', () => {
    expect(calculate('20', '/', '5')).toBe(4);
  });

  test('should throw error for invalid operator', () => {
    expect(() => calculate('5', '^', '2')).toThrow('Invalid operator');
  });

  test('should throw error for non-numeric first operand', () => {
    expect(() => calculate('abc', '+', '5')).toThrow('Invalid input: operands must be numbers');
  });

  test('should throw error for non-numeric second operand', () => {
    expect(() => calculate('5', '+', 'xyz')).toThrow('Invalid input: operands must be numbers');
  });

  test('should throw error for division by zero', () => {
    expect(() => calculate('10', '/', '0')).toThrow('Cannot divide by zero');
  });
});

describe('Calculator - Image Examples', () => {
  test('should correctly calculate 2 + 3 = 5', () => {
    expect(calculate('2', '+', '3')).toBe(5);
  });

  test('should correctly calculate 10 - 4 = 6', () => {
    expect(calculate('10', '-', '4')).toBe(6);
  });

  test('should correctly calculate 45 * 2 = 90', () => {
    expect(calculate('45', '*', '2')).toBe(90);
  });

  test('should correctly calculate 20 / 5 = 4', () => {
    expect(calculate('20', '/', '5')).toBe(4);
  });
});

describe('Calculator - Modulo', () => {
  test('should calculate modulo of two positive numbers', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('should calculate modulo with larger divisor', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('should calculate modulo with exact division', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('should calculate modulo of negative number', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('should calculate modulo with negative divisor', () => {
    expect(modulo(10, -3)).toBe(1);
  });

  test('should throw error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Cannot perform modulo with zero divisor');
  });

  test('should handle decimals in modulo', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5, 5);
  });
});

describe('Calculator - Power (Exponentiation)', () => {
  test('should calculate power with positive exponent', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('should calculate square (exponent 2)', () => {
    expect(power(5, 2)).toBe(25);
  });

  test('should calculate power with zero exponent', () => {
    expect(power(10, 0)).toBe(1);
  });

  test('should calculate power with negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25, 5);
  });

  test('should calculate power of zero', () => {
    expect(power(0, 5)).toBe(0);
  });

  test('should calculate power with decimal base', () => {
    expect(power(2.5, 2)).toBe(6.25);
  });

  test('should calculate power with decimal exponent', () => {
    expect(power(4, 0.5)).toBe(2);
  });
});

describe('Calculator - Square Root', () => {
  test('should calculate square root of perfect square', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('should calculate square root of 25', () => {
    expect(squareRoot(25)).toBe(5);
  });

  test('should calculate square root of 2', () => {
    expect(squareRoot(2)).toBeCloseTo(1.414, 3);
  });

  test('should calculate square root of zero', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('should calculate square root of one', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('should calculate square root of decimal', () => {
    expect(squareRoot(6.25)).toBe(2.5);
  });

  test('should throw error for negative number', () => {
    expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of negative number');
  });

  test('should throw error for negative decimal', () => {
    expect(() => squareRoot(-1.5)).toThrow('Cannot calculate square root of negative number');
  });
});

describe('Calculator - Calculate with Advanced Operators', () => {
  test('should handle modulo with string inputs', () => {
    expect(calculate('5', '%', '2')).toBe(1);
  });

  test('should handle power with string inputs', () => {
    expect(calculate('2', '**', '3')).toBe(8);
  });

  test('should throw error for unsupported operator', () => {
    expect(() => calculate('5', '^', '2')).toThrow('Invalid operator');
  });
});

describe('Calculator - Square Root Function', () => {
  test('should calculate square root with calculateSquareRoot', () => {
    expect(calculateSquareRoot('16')).toBe(4);
  });

  test('should handle string input for square root', () => {
    expect(calculateSquareRoot('25')).toBe(5);
  });

  test('should throw error for non-numeric input', () => {
    expect(() => calculateSquareRoot('abc')).toThrow('Invalid input: operand must be a number');
  });

  test('should throw error for negative number in calculateSquareRoot', () => {
    expect(() => calculateSquareRoot('-9')).toThrow('Cannot calculate square root of negative number');
  });
});

describe('Calculator - Extended Operations Examples', () => {
  test('should correctly calculate 5 % 2 = 1', () => {
    expect(calculate('5', '%', '2')).toBe(1);
  });

  test('should correctly calculate 2 ** 3 = 8', () => {
    expect(calculate('2', '**', '3')).toBe(8);
  });

  test('should correctly calculate √16 = 4', () => {
    expect(calculateSquareRoot('16')).toBe(4);
  });

  test('should correctly calculate complex: (2 ** 8) % 5 = 256 % 5 = 1', () => {
    const powerResult = calculate('2', '**', '8');
    expect(calculate(powerResult.toString(), '%', '5')).toBe(1);
  });
});
