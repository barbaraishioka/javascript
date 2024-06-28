/* 

DELETE -> Deleta um item do array

*/

const array = ["limão", "abóbora", "caqui"];
delete array[1];
console.log(array); // [ 'limão', <1 empty item>, 'caqui' ]

// Deleta o item, porém não muda a posição, apenas fica vazio
