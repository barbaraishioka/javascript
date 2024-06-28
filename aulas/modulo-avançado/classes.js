/*

Classes

*/

// const person = {
//   name: "Maria",
//   age: 30,
//   talk: function () {
//     console.log(`Olá, meu nome é ${this.name}`);
//   },
// };
// person.talk();

// _______________________________________ //

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(
      `Olá, meu nome é ${this.name} e tenho ${this.age} anos de idade.`
    );
  }
}

const newPerson = new Person("Maria", 30);
newPerson.talk();
// Olá, meu nome é Maria e tenho 30 anos de idade.

// _______________________________________ //

// class Person {
//   name;
//   age;

//   talk() {
//     console.log(
//       `Olá, meu nome é ${this.name} e tenho ${this.age} anos de idade.`
//     );
//   }
// }

// const newPerson = new Person();
// newPerson.name = "João";
// newPerson.age = 50;
// newPerson.talk();
// // Olá, meu nome é João e tenho 50 anos de idade.
