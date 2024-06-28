/* 

setTimeout -> Executa somente uma vez após o tempo estipulado.
setInterval -> Executa infinitas vezes a cada intervalo.

// interval e timeout são em milissegundos.
// 1000 é igual a 1 segundo.

clearInterval -> Pausa o setInterval
clearTimeout -> Pausa o setTimeout



*/

// // FORMAS DE ESCREVER

// setInterval(() => {
//   // código a ser executado
// }, interval);

// setInterval(function () {
//   // código a ser executado
// }, interval);

// // função separada
// setInterval(nomeDaFuncao, timeout);

// Na prática

let number = 0;
let cronometro;

function start() {
  cronometro = setInterval(() => {
    number++;
    console.log(number);
  }, 1000);
}

function stop() {
  clearInterval(cronometro);
}
