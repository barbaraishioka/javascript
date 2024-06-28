/* 

REDUCE

// Reduce percorre um array e reduz para somente um valor

- Aceita 4 parâmetros 
    - acumulador: Na primeira iteração é o valor inicial, após ele terá o valor que iremos acumular nele. (obrigatório)
    - valorAtual: Valor atual do elemento sendo iterado. (obrigatório)
    - índice: Índice do elemento atual. (opcional)
    - arrayOriginal: Array original. (opcional)

*/

const list = [1, 2, 3, 4, 5, 6, 7];

const sum = list.reduce((acumulador, valorAtual) => {
  return (acumulador += valorAtual);
}, 0); // 0 é o valor inicial

// console.log(sum); // 28

// _____________________________________________

const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOne: 1938 },
  {
    name: "Microsoft",
    marketValue: 415,
    CEO: "Satya Nadella",
    foundedOne: 1975,
  },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOne: 1968 },
  {
    name: "Facebook",
    marketValue: 383,
    CEO: "Mark Zuckerberg",
    foundedOne: 2004,
  },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOne: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOne: 1976 },
];

const marketValue = companies.reduce((acc, value) => {
  return (acc += value.marketValue);
}, 0);

// console.log(marketValue); // 1840

// _____________________________________________

const cart = [
  { productName: "Abóbora", pricePerKg: 5, kg: 1 },
  { productName: "Pepino", pricePerKg: 3.55, kg: 1.3 },
  { productName: "Limão", pricePerKg: 1.2, kg: 2 },
  { productName: "Abacate", pricePerKg: 5.4, kg: 1.67 },
  { productName: "Morango", pricePerKg: 11.9, kg: 3 },
];

const finalValue = cart.reduce((acc, value) => {
  const newPrice = value.pricePerKg * value.kg;
  return (acc += newPrice);
}, 0);

// console.log(finalValue.toFixed(2)); // 56.73
