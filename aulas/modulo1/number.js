/*

Number

*/

const number1 = 10;
const number2 = 20;
const numberString = "30";

const soma = number1 + number2;
const divisao = numberString / number1;
const multiplicacao = numberString * number2;
const subtracao = numberString - number1;

console.log(soma); // 30
console.log(divisao); // 3
console.log(multiplicacao); // 600
console.log(subtracao); // 20

const concatenacao = number1 + numberString;
console.log(concatenacao); // 1030
// Somente no caso de soma, pode ocorrer a concatenação
