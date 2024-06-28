/* 

FOR OF

for (const iterator of object) {
  // código a ser executado
}

Usa em Strings e Arrays

*/

const frutas = ["banana", "maçã", "kiwi", "pêra", "morango", "manga"];

for (const fruta of frutas) {
  console.log(fruta);
}

// banana
// maçã
// kiwi
// pêra
// morango
// manga

const nome = "Bárbara";

for (const letra of nome) {
  console.log(letra);
}
