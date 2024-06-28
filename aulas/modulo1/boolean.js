/*

Boolean -> True (1) / False (0)

*/

const number0 = 20;
const number1 = 20;
const number2 = 30;
const numberString = "20";

console.log(number0 === number1); // true
console.log(number0 === number2); // false

console.log(numberString === number1); // false (Compara valor e tipo)
console.log(numberString == number1); // true (Compara somente valor)
