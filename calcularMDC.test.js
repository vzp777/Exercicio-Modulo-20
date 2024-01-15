const calcularMDC = require('./calcularMDC');

test('Calcula o MDC corretamente', () => {
  expect(calcularMDC(4, 8)).toBe(4);
});

test('Calcula o MDC de números negativos', () => {
  expect(calcularMDC(-4, 8)).toBe(4);
});

test('Calcula o MDC de zero', () => {
  expect(calcularMDC(0, 8)).toBe(8);
});