// # Módulo 2

// 1. Escreva um programa que verifique se um número é par ou ímpar e exiba o resultado no console.

function parOuImpar(number) {
  if (number % 2 === 0) {
    console.log("Número par");
  } else {
    console.log("Número ímpar");
  }
}

// parOuImpar(12); // Número par
// parOuImpar(13); // Número ímpar

// ______________________________________________________

// 2. Escreva um programa que calcule o resto da divisão entre dois números inteiros e exiba o resultado.

function restoDeUmaDivisao(num1, num2) {
  console.log(Math.round(num1) % Math.round(num2));
}

// restoDeUmaDivisao(10.2, 2.4); // 10 % 2 = 0
// restoDeUmaDivisao(10.2, 2.5); // 10 % 3 = 1

// ______________________________________________________

// 3. Escreva um programa que calcule a média de três números reais e exiba o resultado.

function media(num1, num2, num3) {
  console.log(((num1 + num2 + num3) / 3).toFixed(1));
}

// media(10, 8, 5);

// ______________________________________________________

// 4. Escreva um programa que compare duas strings e exiba "As strings são iguais" se as strings forem iguais, ou "As strings são diferentes" se forem diferentes.

function compareString(string1, string2) {
  if (string1 === string2) {
    console.log("As strings são iguais");
  } else {
    console.log("As strings são diferentes");
  }
}

// compareString("aaa", "bbb"); // As strings são diferentes
// compareString("ccc", "ccc"); // As strings são iguais

// ______________________________________________________

// 5. Escreva um programa que compare a idade de duas pessoas e exiba "A primeira pessoa é mais velha" se a idade da primeira pessoa for maior que a idade da segunda pessoa, ou "A segunda pessoa é mais velha" se for menor.

function compareAge(age1, age2) {
  if (age1 > age2) {
    console.log("A primeira pessoa é mais velha");
  } else {
    console.log("A segunda pessoa é mais velha");
  }
}

// compareAge(50, 20); // A primeira pessoa é mais velha
// compareAge(20, 50); // A segunda pessoa é mais velha
