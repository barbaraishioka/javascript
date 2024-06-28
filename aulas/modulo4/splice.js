/* 

SPLICE -> Altera algum elemento do array original

- Não cria novo array

.splice(1, 2, 3)
1. Posição do array da qual vamos começar a tirar as informações 
2. Quantos elementos eu quero retirar a partir da posição inicial 
3. Item que você quer adicionar

*/

const months = ["Jan", "Fev", "Mar", "Abr", "Mai"];

// months.splice(1, 0, "Feb");
// console.log(months);
// [ 'Jan', 'Feb', 'Fev', 'Mar', 'Abr', 'Mai' ];

// months.splice(1, 4, "May");
// console.log(months);
// [ 'Jan', 'May' ]
