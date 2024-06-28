/*

JOIN -> Junta os elementos do array

- Porém deixam de ser um array e se tornam strings, e pode ser inserido algo para separar os elementos na string

*/

const elements = ["Fire", "Air", "Water"];

const newElements1 = elements.join();
console.log(newElements1); // Fire,Air,Water

const newElements2 = elements.join(" - ");
console.log(newElements2); // Fire - Air - Water

const newElements3 = elements.join(" ");
console.log(newElements3); // Fire Air Water

const newElements4 = elements.join(" | ");
console.log(newElements4); // Fire | Air | Water
