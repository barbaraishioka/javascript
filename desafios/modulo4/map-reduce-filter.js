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

// Subtrair 10% de valor de mercado a todas as companhias -> map
// Filtrar somente companhias fundadas depois de 1990 -> filter
// Somar o valor de mercado das companhias mapeadas e filtradas -> reduce
