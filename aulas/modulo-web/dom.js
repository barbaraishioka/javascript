// document -> HTML

document.getElementById("id"); //  É único
document.getElementsByClassName("class"); // Todos elementos com essa classe
document.getElementsByTagName("tag"); // Todos elementos com essa tag
document.getElementsByName("name"); // Todos elementos com esse name

document.querySelector(""); // Primeiro elemento
document.querySelectorAll(""); // Todos elementos
// querySelector pode capturar id, class, tag e pode até mesclar.
// Exemplo: "button.enviar" captura a tag Button que tem a classe "enviar"
// Para capturar id usa-se #id e classe .class

const element = document.querySelector("element");

// Todas servem para alterar o conteúdo do texto.
element.textContent; // Retorna somente HTML
element.innerText; // Retorna HTML e CSS, se houver alguma configuração no CSS será considerada.
element.innerHTML; // Trás tudo, pode inserir código HTML

// Alterar estilo CSS utilizando JS
element.style.color = "#000000";
element.style.backgroundColor = "#ffffff";
element.style.fontSize = "16px";

// Outras alterações utilizando JS
element.src = "./caminho/imagem.png"; // tags img, script, iframe, audio e video
element.href = "www.site.com.br ou #id ou .class"; // tag "a" e tag "link"
