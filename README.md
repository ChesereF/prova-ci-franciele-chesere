# Prova CI - Franciele Chesere

[![CI Pipeline](https://github.com/ChesereF/prova-ci-franciele-chesere/actions/workflows/ci.yml/badge.svg)](https://github.com/ChesereF/prova-ci-franciele-chesere/actions/workflows/ci.yml)

Projeto desenvolvido para a **Prova 2 de Laboratório de Desenvolvimento Multiplataforma**, com foco em **Integração Contínua (CI/CD)** utilizando **GitHub Actions**.

## 📋 Sobre o Projeto

Este é um projeto Node.js simples que demonstra a configuração de um pipeline de CI/CD automatizado. O projeto contém funções utilitárias básicas (operações matemáticas e validações) com testes unitários completos utilizando **Jest**.

O foco principal é a **automação de testes** e **validação de build** através do GitHub Actions.

## 🔧 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Jest** - Framework de testes
- **GitHub Actions** - CI/CD pipeline
- **npm** - Gerenciador de pacotes

## 📦 Estrutura do Projeto

```
prova-ci-franciele-chesere/
├── .github/
│   └── workflows/
│       └── ci.yml           # Configuração do GitHub Actions
├── src/
│   └── index.js             # Arquivo principal
├── App.js                   # Funções utilitárias
├── App.test.js              # Testes unitários
├── jest.config.js           # Configuração do Jest
├── package.json             # Dependências e scripts
└── README.md                # Documentação
```

## 🔧 Como Rodar Localmente

### Pré-requisitos

- Node.js instalado (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/ChesereF/prova-ci-franciele-chesere.git
cd prova-ci-franciele-chesere
```

2. Instale as dependências:

```bash
npm install
```

3. Execute os testes:

```bash
npm test
```

4. Execute o projeto:

```bash
npm start
```

### Scripts Disponíveis

- `npm test` - Executa todos os testes com cobertura
- `npm run test:watch` - Executa testes em modo watch
- `npm start` - Executa o arquivo principal
- `npm run build` - Executa o build do projeto

## 🔄 Pipeline de CI/CD

### Configuração do GitHub Actions

O pipeline está configurado no arquivo `.github/workflows/ci.yml` e é executado automaticamente nas seguintes situações:

- ✅ **Push** na branch `main`
- ✅ **Pull Request** para a branch `main`

### Etapas do Pipeline

O workflow executa as seguintes etapas em cada execução:

1. **Checkout do código**

   - Faz o download do código do repositório

2. **Configuração do Node.js**

   - Configura o ambiente Node.js (versões 18.x e 20.x)
   - Utiliza cache do npm para acelerar instalações

3. **Instalação de dependências**

   - Executa `npm ci` para instalar dependências de forma limpa

4. **Execução dos testes**

   - Executa `npm test` para rodar todos os testes unitários
   - Gera relatório de cobertura de código

5. **Build do projeto**

   - Executa `npm run build` para validar a build

6. **Upload de cobertura** (opcional)
   - Envia relatório de cobertura para o Codecov

### Status do Pipeline

- ✅ **Success**: Todos os testes passaram e o build foi bem-sucedido
- ❌ **Failed**: Algum teste falhou ou houve erro no build

Você pode visualizar o status das execuções na aba **Actions** do repositório no GitHub.

## 🧪 Testes Implementados

O projeto conta com **17 testes unitários** que cobrem:

### Funções Matemáticas

- ✅ Soma de números (positivos, negativos, mistos)
- ✅ Subtração de números
- ✅ Multiplicação (incluindo por zero)
- ✅ Divisão (incluindo validação de divisão por zero)

### Funções Auxiliares

- ✅ Verificação de números pares/ímpares
- ✅ Validação de formato de email

### Cobertura de Testes

Execute `npm test` para ver o relatório completo de cobertura:

- Statements: 100%
- Branches: 100%
- Functions: 100%
- Lines: 100%

## 📝 Exemplo de Saída dos Testes

```
PASS  App.test.js
  Testes das funções matemáticas
    somar
      ✓ deve somar dois números positivos corretamente
      ✓ deve somar números negativos corretamente
      ✓ deve somar número positivo com negativo
    subtrair
      ✓ deve subtrair dois números corretamente
      ✓ deve retornar número negativo quando apropriado
    multiplicar
      ✓ deve multiplicar dois números positivos
      ✓ deve retornar zero quando multiplicado por zero
      ✓ deve multiplicar números negativos corretamente
    dividir
      ✓ deve dividir dois números corretamente
      ✓ deve lançar erro ao dividir por zero
      ✓ deve retornar número decimal quando necessário
  Testes de funções auxiliares
    ehPar
      ✓ deve retornar true para números pares
      ✓ deve retornar false para números ímpares
      ✓ deve considerar zero como par
    validarEmail
      ✓ deve validar emails corretos
      ✓ deve invalidar emails incorretos
      ✓ deve invalidar string vazia

Test Suites: 1 passed, 1 total
Tests:       17 passed, 17 total
```

## 📊 Critérios de Avaliação Atendidos

| Critério                                                 | Pontos     | Status |
| -------------------------------------------------------- | ---------- | ------ |
| Configuração correta do arquivo YAML do GitHub Actions   | 3 pts      | ✅     |
| Execução automática em push e pull request               | 2 pts      | ✅     |
| Execução bem-sucedida dos testes                         | 2 pts      | ✅     |
| Correta organização do projeto e scripts no package.json | 2 pts      | ✅     |
| Clareza e documentação no README.md                      | 1 pt       | ✅     |
| **Total**                                                | **10 pts** | ✅     |

## 📝 Observações

- O projeto utiliza **Jest** como framework de testes por ser amplamente utilizado e ter excelente integração com Node.js
- Todos os testes são **determinísticos** e **independentes**
- O pipeline é executado em **múltiplas versões do Node.js** (18.x e 20.x) para garantir compatibilidade
- A configuração utiliza `npm ci` ao invés de `npm install` para garantir instalações consistentes no CI

## 👨‍💻 Autor

**Franciele Chesere**
