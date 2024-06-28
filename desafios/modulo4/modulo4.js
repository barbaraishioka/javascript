// # Módulo 4

// 1. Escreva um programa que receba uma lista de números e retorne uma nova lista com o dobro de cada número.

const array1 = [10, 20, 30, 40, 50];
const result1 = array1.map((num) => num * 2);
console.log(result1); // [ 20, 40, 60, 80, 100 ]

// 2. Escreva um programa que receba uma lista de nomes e retorne uma nova lista com o comprimento de cada nome.
const array2 = ["Maria", "João", "José", "Joaquim"];
const result2 = array2.map((name) => name.length);
console.log(result2); // [ 5, 4, 4, 7 ]

// 3. Escreva um programa que receba uma lista de números e retorne uma nova lista contendo apenas os números pares.
const array3 = [10, 21, 30, 41, 50];
const newArray = array3.filter((num) => num % 2 === 0);
console.log(newArray); // [ 10, 30, 50 ]

// 4. Escreva um programa que receba uma lista de números e retorne a soma de todos os números.
const array4 = [10, 20, 30, 40, 50];
const sum = array4.reduce((acumulador, valorAtual) => {
  return (acumulador += valorAtual);
}, 0);
console.log(sum); // 150

// 5. Escreva um programa que receba uma lista de palavras e retorne uma nova lista contendo apenas as palavras com mais de 5 caracteres.
const array5 = ["Python", "Java", "C++", "JavaScript", "PHP"];
const result5 = array5.filter((word) => word.length > 5);
console.log(result5); // [ 'Python', 'JavaScript' ]
