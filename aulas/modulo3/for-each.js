/* 

FOR EACH

Serve para arrays
Não aceita break

*/

const users = [
  { name: "Mia", age: 19 },
  { name: "Lua", age: 25 },
  { name: "Bia", age: 30 },
];

// users.forEach((element) => {
//   console.log(element.name); // Mia Lua Bia
//   console.log(element.age); // 19 25 30
//   console.log(element);
//   // { name: 'Mia', age: 19 }
//   // { name: 'Lua', age: 25 }
//   // { name: 'Bia', age: 30 }
// });

//___________________________________________

// users.forEach((element, index) => {
//   console.log(index); // 0 1 2 (posição do array)
// });

//___________________________________________

// users.forEach((element, index, array) => {
//   console.log(array);
// });

/* 

[
  { name: 'Mia', age: 19 },
  { name: 'Lua', age: 25 },
  { name: 'Bia', age: 30 }
]
[
  { name: 'Mia', age: 19 },
  { name: 'Lua', age: 25 },
  { name: 'Bia', age: 30 }
]
[
  { name: 'Mia', age: 19 },
  { name: 'Lua', age: 25 },
  { name: 'Bia', age: 30 }
]

*/
