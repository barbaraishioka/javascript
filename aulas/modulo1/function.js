/* 

function é um trecho de código que é executado somente quando é chamado.

*/

// função sem parâmetro
function soma1() {
  console.log(1 + 1);
}

soma1(); // 2

// função com parâmetro
function soma2(num1, num2) {
  console.log(num1 + num2);
}

soma2(2, 3); // 5

// função anônima ou arrow function
() => {}; // sem parâmetro
(num1, num2) => {}; // com parâmetro
