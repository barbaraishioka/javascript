/* 

delete

*/

const pessoa = {
  nome: "Moana",
  idade: 12,
  animal: "Porco",
};

delete pessoa.animal;

console.log(pessoa); // { nome: 'Moana', idade: 12 }
