/* 

FIND -> Procura algo dentro de um array

*/

const users = [
  { name: "João", credit: 600 },
  { name: "Maria", credit: 900 },
  { name: "Carlos", credit: 300 },
  { name: "Vanessa", credit: 300 },
];

const findUser1 = users.find((user) => user.name === "Maria");
console.log(findUser1); // { name: 'Maria', credit: 900 }

const findUser2 = users.find((user) => user.name === "Ruan");
console.log(findUser2); // undefined
