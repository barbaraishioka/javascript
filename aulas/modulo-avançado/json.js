/* 

JSON - JavaScript Object Notation

- Padrão de troca e armazenamento de informações
- Padrão lógico simples
- Leve para ser enviado e recebido
- Simples e fácil de entender
- Derivado do JavaScript
- Utiliza o formado chave e valor

*/

const user = {
  name: "Maria",
  age: 25,
  filhos: null,
  hobbies: ["Filmes", "Academia", "Cozinhar"],
  casada: true,
  empresas: {
    devclub: {
      fundada: 2021,
      colaboradores: 40,
    },
    monster_app: {
      fundada: 2019,
      colaboradores: 20,
    },
  },
};

// console.log(user);

const convertendoParaJson = JSON.stringify(user); // Transforma Objeto em JSON
const convertendoParaJavaScript = JSON.parse(convertendoParaJson); // Transforma JSON em Objeto

console.log(convertendoParaJson);
console.log(convertendoParaJavaScript);
