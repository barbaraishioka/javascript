// Map percorre um array e passa os valores para um novo array
// Filter percorre um array e escolhe os valores que irá utilizar para o novo array
// Reduce percorre um array e reduz para somente um valor

// Dá para usar todos juntos.

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

// Adicionar 10% de valor de mercado a todas as companhias -> map
// Filtrar somente companhias fundadas antes de 1990 -> filter
// Somar o valor de mercado das companhias que foram mapeados e filtrados -> reduce

// const MarketValueOfOldCompanies = companies
//   .map((company) => {
//     company.marketValue += company.marketValue / 10;
//     return company;
//   })
//   .filter((company) => company.foundedOne < 1990)
//   .reduce((acc, company) => {
//     return acc + company.marketValue;
//   }, 0);

// console.log(MarketValueOfOldCompanies); // 1569.7

// ___________________________________

// FORMA MAIS ORGANIZADA

const add10Percent = (company) => {
  company.marketValue += company.marketValue / 10;
  return company;
};

const filterOldCompanies = (company) => company.foundedOne < 1990;

const calculateTotalMarketValue = (acc, company) => {
  return acc + company.marketValue;
};

const MarketValueOfOldCompaniesPlus = companies
  .map(add10Percent)
  .filter(filterOldCompanies)
  .reduce(calculateTotalMarketValue, 0);

console.log(MarketValueOfOldCompaniesPlus); // 1569.7
