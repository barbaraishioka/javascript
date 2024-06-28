// # Módulo 3

// 1. Escreva um programa que exiba a soma dos números de 1 a 10 no console.

let soma = 0;
for (let i = 1; i <= 10; i++) {
  // console.log((soma += i));
}

// 2. Escreva um programa que exiba os números pares de 1 a 20 no console.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

// 3. Escreva um programa que exiba os números de 1 a 100 no console, substituindo os múltiplos de 3 pela palavra "Fizz" e os múltiplos de 5 pela palavra "Buzz". Para números que são múltiplos de ambos (3 e 5), exiba a palavra "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    // console.log("Fizz");
  } else if (i % 5 === 0) {
    // console.log("Buzz");
  } else {
    // console.log(i);
  }
}

// 4. Escreva um programa que verifique se um número é primo e exiba o resultado no console.
// Feito com ajuda do Blackbox AI

let num = 22;
let isPrime = true;
if (num <= 1) isPrime = false;
for (let i = 2; i * i <= num; i++) {
  if (num % i === 0) isPrime = false;
}
// console.log(`${num} is ${isPrime ? "" : "not "}a prime number.`);

// 5. Escreva um programa que encontre o maior número em uma lista de números e exiba o resultado no console.

const array = [19, 1, 50, 77, 99, 41, 5, 3, 15, 33];
let max = Math.max(...array);
// console.log(max);
