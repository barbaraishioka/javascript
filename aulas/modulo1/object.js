/*

Object

*/

let pessoa = {
  nome: "Bárbara",
  idade: 30,
  frutas: ["Laranja", "Melão", "Manga"],
  linguagens: {
    frontend: "ReactJS",
    backend: "NodeJS",
  },
};

console.log(pessoa.nome); // Bárbara
console.log(pessoa["nome"]); // Bárbara

// console.log(pessoa.nome); // Bárbara
// console.log(pessoa.idade); // 30
// console.log(pessoa.frutas); // [ 'Laranja', 'Melão', 'Manga' ]
// console.log(pessoa.frutas[0]); // Laranja
// console.log(pessoa.frutas[1]); // Melão
// console.log(pessoa.frutas[2]); // Manga
// console.log(pessoa.linguagens); // { frontend: 'ReactJS', backend: 'NodeJS' }
// console.log(pessoa.linguagens.frontend); // ReactJS
// console.log(pessoa.linguagens.backend); // NodeJS

// Alterar dados de um objeto
pessoa.linguagens.frontend = "Vue.JS";
// console.log(pessoa.linguagens.frontend); // Vue.JS
// Se usar const na variável (ex.: const pessoa) não conseguirá alterar nenhum dado.
