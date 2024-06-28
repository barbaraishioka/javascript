/*

Conceito de `this`:
- `this` é uma referência ao objeto que está sendo executado no momento.
- O valor de `this` pode mudar dependendo do contexto em que é chamado.
- `this` é usado para acessar propriedades e métodos do objeto atual.

Tipos de Escopo em JavaScript:
Global: Escopo mais amplo, refere-se ao objeto window no navegador ou global no Node.js.
Função/Local: Escopo dentro de uma função.
Bloco: Escopo dentro de um bloco de código, como if, for, while, etc.

`this` em Diferentes Contextos:
Escopo Global: `this` refere-se ao objeto window ou global.
Escopo de Função: `this` refere-se ao objeto que chamou a função.
Escopo de Bloco: `this` ainda se refere ao objeto que está sendo executado (não muda apenas por estar em um bloco).

// this = module.exports no node (local)
// this = window no navegador (global)

*/

// Escopo Local
function teste() {
  const num = 10;
}

// Escopo Global
const string = "Olá!";

/* ____________________________________________ */

function myFunction() {
  console.log(this); // Global
}
myFunction();

/* ____________________________________________ */

const person = {
  name: "Maria",
  age: 30,
  talk: function () {
    console.log(`Olá, meu nome é ${this.name}`);
    console.log(`Olá, meu nome é ${person.name}`);
  },
};
person.talk(); // Olá, meu nome é Maria

// module.exports = { person };
// this.person = person;

// Olhar no arquivo index.js
