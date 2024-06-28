/*

MAP

// Map percorre um array e passa os valores para um novo array

Mapear um Array
- Cria um novo array, a partir do array original percorrido
- Cria um novo array, com a mesma quantidade de itens do array original
- Aceita 3 parâmetros
    - item do array
    - index
    - array completo

*/

const number = [1, 2, 3, 4, 5];

const double = number.map((item) => {
  return item * 2;
});

console.log(double); // [ 2, 4, 6, 8, 10 ]

/*
const all = number.map((item, index, array) => {
  console.log(item); // 1 2 3 4 5
  console.log(index); // 0 1 2 3 4

  console.log(array);
  // [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]
});
*/
