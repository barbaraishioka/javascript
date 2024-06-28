/*

Math

*/

Math.pow(base, expoente);
Math.pow(3, 2); // Potência -> 3² = 9;

Math.sqrt(radicando, índice);
Math.sqrt(25); // Raiz quadrada -> √25 = 5
Math.sqrt(64, 3); // Raiz cúbica -> 3√64 = 4

Math.PI(); // PI -> π = 3,14

Math.ceil(); // Arredonda para cima
Math.ceil(3.14); // 4
Math.floor(); // Arredonda para baixo
Math.ceil(3.14); // 3

Math.random(); // 0 a 1 (inclusive os números quebrados)
Math.random() * 10; // 0 a 10 (inclusive os números quebrados)
Math.round(Math.random() * 10); // 0 a 10 arredondado

// Obter número aleatório entre dois valores (arredondado)
Math.round(Math.random() * (max - min) + min);
