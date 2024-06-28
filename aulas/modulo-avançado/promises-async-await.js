/*

O que é uma Promise:
Uma Promise é um objeto que representa o resultado de uma operação assíncrona.
Uma Promise pode ter três estados: pendente, resolvida ou rejeitada.
- Pendente: inicialmente, a Promise está pendente, ou seja, não foi resolvida nem rejeitada.
- Resolvida: quando a operação assíncrona é concluída com sucesso
- Rejeitada: quando a operação assíncrona falha

async - await:
- async: é uma palavra-chave que indica que uma função retorna uma Promise.
- await: é uma palavra-chave que faz com que o código aguarde a resolução da Promise antes de continuar a execução.

*/

// Função assíncrona que retorna uma promessa
async function exemploAsync() {
  // Simula uma operação assíncrona, como uma requisição HTTP
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operação concluída!");
    }, 2000); // Tempo de espera de 2 segundos
  });
}

// Função que utiliza async/await para lidar com operação assíncrona
async function main() {
  try {
    console.log("Iniciando operação assíncrona...");
    const resultado = await exemploAsync(); // Aguarda a resolução da promessa
    console.log(resultado);
    console.log("Operação assíncrona concluída com sucesso!");
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

// Chamada da função principal
main();

/* RESULTADO
Iniciando operação assíncrona...
Operação concluída!
Operação assíncrona concluída com sucesso!
*/

// cd javascript/aulas/modulo-avançado
// node --watch promises-async-await.js
