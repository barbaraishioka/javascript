// Para quer serve para um de forma simples
// Fetch: É uma função do JavaScript usada para fazer requisições HTTP para obter dados de um servidor web.
// Then: É usado junto com o fetch para processar a resposta da requisição. Ele permite executar código quando a requisição é bem-sucedida.
// Async/Await: São palavras-chave usadas para lidar com operações assíncronas no JavaScript de forma mais fácil e legível. Async define uma função assíncrona, e await é usado dentro dessa função para esperar que uma operação assíncrona seja concluída antes de prosseguir.
// Try/Catch: São usados para lidar com erros em JavaScript. O bloco try é usado para envolver o código onde você espera que um erro possa ocorrer, enquanto o bloco catch é usado para capturar e lidar com qualquer erro que ocorra dentro do bloco try.

// Fetch e Then:
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Erro ao obter dados:", error));

// Async/Await:
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erro ao obter dados:", error);
  }
}
fetchData();
