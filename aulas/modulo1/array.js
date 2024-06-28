/*

Array - Listas, Matrizes ou Vetor

*/

const lista = [
  "Bárbara",
  30,
  { frontend: "ReactJS", backend: "NodeJS" },
  ["Manga", "Laranja"],
];

// console.log(lista);
/*
[
  'Bárbara',
  30,
  { frontend: 'ReactJS', backend: 'NodeJS' },
  [ 'Manga', 'Laranja' ]
]
*/

// console.log(lista[0]); // Bárbara
// console.log(lista[1]); // 30
// console.log(lista[2]); // { frontend: 'ReactJS', backend: 'NodeJS' }
// console.log(lista[2].frontend); // ReactJS
// console.log(lista[2].backend); // NodeJS
// console.log(lista[3]); // [ 'Manga', 'Laranja' ]
// console.log(lista[3][0]); // Manga
// console.log(lista[3][1]); // Laranja

const users = [
  {
    nome: "John",
    idade: 44,
  },
  {
    nome: "Mia",
    idade: 27,
  },
  {
    nome: "Lia",
    idade: 18,
  },
];

// console.log(users[0]); // { nome: 'John', idade: 44 }
// console.log(users[1]); // { nome: 'Mia', idade: 27 }
// console.log(users[2]); // { nome: 'Lia', idade: 18 }
// console.log(users[0].nome); // John

users[0].nome = "Morgan";
// console.log(users[0].nome); // Morgan
