const { somar, subtrair, multiplicar, validarEmail } = require('../App');

console.log('=== Demonstração do Projeto ===\n');

console.log('Operações Matemáticas:');
console.log(`5 + 3 = ${somar(5, 3)}`);
console.log(`10 - 4 = ${subtrair(10, 4)}`);
console.log(`6 * 7 = ${multiplicar(6, 7)}\n`);

console.log('Validação de Email:');
console.log(`teste@email.com é válido? ${validarEmail('teste@email.com')}`);
console.log(`email.invalido é válido? ${validarEmail('email.invalido')}\n`);

console.log('✅ Projeto executado com sucesso!');
console.log('Execute "npm test" para rodar os testes automatizados.');
