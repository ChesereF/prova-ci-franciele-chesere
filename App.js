// Funções utilitárias para demonstração do CI/CD

/**
 * Soma dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} Resultado da soma
 */
function somar(a, b) {
  return a + b;
}

/**
 * Subtrai dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} Resultado da subtração
 */
function subtrair(a, b) {
  return a - b;
}

/**
 * Multiplica dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} Resultado da multiplicação
 */
function multiplicar(a, b) {
  return a * b;
}

/**
 * Divide dois números
 * @param {number} a - Dividendo
 * @param {number} b - Divisor
 * @returns {number} Resultado da divisão
 * @throws {Error} Se o divisor for zero
 */
function dividir(a, b) {
  if (b === 0) {
    throw new Error('Não é possível dividir por zero');
  }
  return a / b;
}

/**
 * Verifica se um número é par
 * @param {number} num - Número a ser verificado
 * @returns {boolean} True se for par, false caso contrário
 */
function ehPar(num) {
  return num % 2 === 0;
}

/**
 * Valida se um email é válido
 * @param {string} email - Email a ser validado
 * @returns {boolean} True se válido, false caso contrário
 */
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
  validarEmail,
};
