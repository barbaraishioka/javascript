/* 

CONCAT -> Junta dois arrays

- Não altera os arrays originais, e sim, cria um novo array

*/

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const array3 = array1.concat(array2);
console.log(array3); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

const numbers1 = [1, 3, 5];
const numbers2 = [2, 4, 6];

const numbers3 = numbers1.concat(numbers2);
console.log(numbers3); // [ 1, 3, 5, 2, 4, 6 ]
