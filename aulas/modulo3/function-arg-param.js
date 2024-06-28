/*

Function com argumentos ou parâmetros

*/

function soma(num1, num2) {
  console.log(num1 + num2);
}

// soma(5, 6); // 11

// _______________________________

function mostraNome(nome) {
  console.log(nome);
}

// mostraNome("Lua"); // Lua

// _______________________________

function mostraNomeCompleto(nome, sobrenome) {
  console.log(nome, sobrenome); // Mia Silva
  mostraNome(nome); // Mia
}

// mostraNomeCompleto("Mia", "Silva");

// _______________________________

function mostraNumeros(num1 = 10, num2 = 30) {
  console.log(num1, num2);
}

// Deixa configurado um valor padrão, se não inserir nada quando chamar a função, é usado o valor padrão, e assim evita de aparecer undefined.
// mostraNumeros(); // 10 30

// Usando outros valores, ignorando o valor padrão;
// mostraNumeros(15, 35); // 15 35

// _______________________________

// Dá para usar variável também
const numero = 66;
function mostraNum(num = numero) {
  console.log(num);
}

// mostraNum(); // 66
