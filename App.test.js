const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
  validarEmail,
} = require('./App');

describe('Testes das funções matemáticas', () => {
  describe('somar', () => {
    test('deve somar dois números positivos corretamente', () => {
      expect(somar(2, 3)).toBe(5);
    });

    test('deve somar números negativos corretamente', () => {
      expect(somar(-2, -3)).toBe(-5);
    });

    test('deve somar número positivo com negativo', () => {
      expect(somar(10, -5)).toBe(5);
    });
  });

  describe('subtrair', () => {
    test('deve subtrair dois números corretamente', () => {
      expect(subtrair(10, 5)).toBe(5);
    });

    test('deve retornar número negativo quando apropriado', () => {
      expect(subtrair(5, 10)).toBe(-5);
    });
  });

  describe('multiplicar', () => {
    test('deve multiplicar dois números positivos', () => {
      expect(multiplicar(3, 4)).toBe(12);
    });

    test('deve retornar zero quando multiplicado por zero', () => {
      expect(multiplicar(5, 0)).toBe(0);
    });

    test('deve multiplicar números negativos corretamente', () => {
      expect(multiplicar(-2, -3)).toBe(6);
    });
  });

  describe('dividir', () => {
    test('deve dividir dois números corretamente', () => {
      expect(dividir(10, 2)).toBe(5);
    });

    test('deve lançar erro ao dividir por zero', () => {
      expect(() => dividir(10, 0)).toThrow('Não é possível dividir por zero');
    });

    test('deve retornar número decimal quando necessário', () => {
      expect(dividir(10, 4)).toBe(2.5);
    });
  });
});

describe('Testes de funções auxiliares', () => {
  describe('ehPar', () => {
    test('deve retornar true para números pares', () => {
      expect(ehPar(2)).toBe(true);
      expect(ehPar(4)).toBe(true);
      expect(ehPar(100)).toBe(true);
    });

    test('deve retornar false para números ímpares', () => {
      expect(ehPar(1)).toBe(false);
      expect(ehPar(3)).toBe(false);
      expect(ehPar(99)).toBe(false);
    });

    test('deve considerar zero como par', () => {
      expect(ehPar(0)).toBe(true);
    });
  });

  describe('validarEmail', () => {
    test('deve validar emails corretos', () => {
      expect(validarEmail('teste@email.com')).toBe(true);
      expect(validarEmail('usuario@dominio.com.br')).toBe(true);
      expect(validarEmail('nome.sobrenome@empresa.com')).toBe(true);
    });

    test('deve invalidar emails incorretos', () => {
      expect(validarEmail('email.invalido')).toBe(false);
      expect(validarEmail('@dominio.com')).toBe(false);
      expect(validarEmail('usuario@')).toBe(false);
      expect(validarEmail('usuario@dominio')).toBe(false);
    });

    test('deve invalidar string vazia', () => {
      expect(validarEmail('')).toBe(false);
    });
  });
});
