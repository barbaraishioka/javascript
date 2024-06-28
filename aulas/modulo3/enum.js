/* 

ENUM

Serve para utilizar uma variável em vários lugares.

Vantagens:
 - Pode alterar o nome da variável de uma vez, sem precisar editar um por um.
 - Evita ter erro de escrita nas variáveis.

*/

const GAME_OPTIONS = {
  PEDRA: "pedra",
  PAPEL: "papel",
  TESOURA: "tesoura",
};

const choices = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA];

console.log(choices); // [ 'pedra', 'papel', 'tesoura' ]
