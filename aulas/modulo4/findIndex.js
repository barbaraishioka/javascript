/* 

FINDINDEX -> Retorna o index do elemento procurado

- Não retorna o próprio elemento igual o find()

*/

const users = [
  { name: "João", credit: 600 },
  { name: "Maria", credit: 900 },
  { name: "Carlos", credit: 300 },
  { name: "Vanessa", credit: 300 },
];

const findUser1 = users.findIndex((user) => user.name === "Maria");
console.log(findUser1); // 1

const findUser2 = users.findIndex((user) => user.name === "Vanessa");
console.log(findUser2); // 3

const findUser3 = users.findIndex((user) => user.name === "Ruan");
console.log(findUser3); // -1
// -1 significa que não encontrou
