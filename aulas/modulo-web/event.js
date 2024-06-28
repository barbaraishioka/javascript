/* 

Event

*/

const element = document.querySelector("element");

function nomeDaFunction(event) {
  console.log(event);
}

element.addEventListener("click", nomeDaFunction);

// Toda vez que usamos addEventListener, chegam várias informações no "event" da function.
// No lugar do "click" tem várias outras opções, listadas no arquivo addEventListener.js
