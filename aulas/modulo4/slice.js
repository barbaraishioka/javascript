/* 

SLICE -> Retorna um novo array, apenas com as informações escolhidas

*/

const array = ["João", "Maria", "Pedro", "Michele", "Fernando"];

const newArray1 = array.slice();
console.log(newArray1); // [ 'João', 'Maria', 'Pedro', 'Michele', 'Fernando' ]

const newArray2 = array.slice(1, 3);
console.log(newArray2); // [ 'Maria', 'Pedro' ]

const newArray3 = array.slice(1);
console.log(newArray3); // [ 'Maria', 'Pedro', 'Michele', 'Fernando' ]

const newArray4 = array.slice(3, 4);
console.log(newArray4); // [ 'Michele' ]
