/* 

EVERY -> Testa se todos os elementos do array passam em uma condição

*/

const array = [1, 30, 39, 29, 10, 13];
console.log(array.every((value) => value < 50)); // true
// Todos os valores do array são menores que 50?

console.log(array.every((value) => value < 30)); // false
// Todos os valores do array são menores que 30?

const users = [
  { name: "Nico", credit: 600 },
  { name: "Maria", credit: 900 },
  { name: "Joana", credit: 300 },
  { name: "Vanessa", credit: 200 },
];

console.log(users.every((user) => user.credit > 100)); // true
// Todos os credits dos users são maiores que 100?

console.log(users.every((user) => user.credit > 300)); // false
// Todos os credits dos users são maiores que 300?
