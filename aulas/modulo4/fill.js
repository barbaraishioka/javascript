/* 

FILL -> Preenche posições do array

fill(1, 2, 3)
1. O que vai ser colocado no array
2. Posição inicial
3. Posição final

*/

const array1 = [1, 2, 3, 4];
array1.fill("abacate"); // preenche todas posições
console.log(array1); // [ 'abacate', 'abacate', 'abacate', 'abacate' ]

const array2 = [1, 2, 3, 4];
array2.fill("abacate", 0, 2); // preenche da posição 0 até a posição 2
console.log(array2); // [ 'abacate', 'abacate', 3, 4 ]

const array3 = [1, 2, 3, 4];
array3.fill("abacate", 2); // preence a posição 2 e vai até o final
console.log(array3); // [ 1, 2, 'abacate', 'abacate' ]
