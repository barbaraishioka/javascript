/* 

FILTER

// Filter percorre um array e escolhe os valores que irá utilizar para o novo array

- Aceita 3 parâmetros
    - valor atual
    - índice
    - array original

const novoArray = arrayOriginal.filter((valorAtual, índice, arrayOriginal) => {
  // código
});    

  1. O filter vai passar por todos os itens do array, e o primeiro parâmetro é cada item, um por vez do array que estamos filtrando. (obrigatório)
  2. O índice é a posição atual que estamos filtrando. (opcional)
  3. Uma cópia do array original. (opcional)

  A cada item, fazemos uma "pergunta" ao código. Se a resposta for verdadeira naquele item, ele guardará o valor atual no novo array. Caso seja false, o valor será descartado.

*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter((item) => {
  return item % 2 === 0; // exemplo com return
});

console.log(pares); // [ 2, 4, 6, 8, 10 ]

// _________________________________

const numbers = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];
const maiorQue100 = numbers.filter((item) => item > 100 && item % 2 === 0); // exemplo sem return

console.log(maiorQue100); // [ 234, 1000 ]

// _________________________________

const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOne: 1938 },
  {
    name: "Microsoft",
    marketValue: 415,
    CEO: "Satya Nadella",
    foundedOne: 1975,
  },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOne: 1968 },
  {
    name: "Facebook",
    marketValue: 383,
    CEO: "Mark Zuckerberg",
    foundedOne: 2004,
  },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOne: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOne: 1976 },
];

const newCompanies = companies.filter((company) => {
  return company.marketValue < 200 && company.foundedOne > 1990;
});

console.log(newCompanies);

// [
//   {
//     name: "Spotify",
//     marketValue: 30,
//     CEO: "Daniel Ek",
//     foundedOne: 2006,
//   },
// ];
