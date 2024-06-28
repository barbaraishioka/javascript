/* 

FOR IN

Usa-se em Objetos

*/

const users = {
  name: "Lua",
  age: 30,
  color: "Pink",
};

//  Formas de usar

for (const key in users) {
  console.log(key); // name age color
}

for (const key in users) {
  console.log(users[key]); // Lua 30 Pink
}

for (const key in users) {
  console.log(`${key}: ${users[key]}`);
}
// name: Lua;
// age: 30;
// color: Pink;
