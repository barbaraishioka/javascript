/*

try-catch:
O try-catch é uma estrutura de controle de fluxo que permite lidar com erros ou exceções em um programa. Ele é composto por dois blocos: o try e o catch.
O try é o bloco onde você coloca o código que pode gerar um erro.
O catch é o bloco que é executado quando um erro é gerado no try.
O catch pode ter um parâmetro que é o erro gerado, que pode ser utilizado para saber qual foi o erro e como lidar com ele.

finally:
O finally é um bloco que é executado independentemente se houve um erro ou não.
Ele é utilizado para fechar recursos, como conexões com banco de dados ou arquivos.

*/

/*

try {
  // Código que pode gerar uma exceção
  // Aqui você coloca o código que pode gerar uma exceção. Se algum erro ocorrer dentro desse bloco, ele será capturado pelo bloco catch.
} catch (error) {
  // Código para tratar a exceção ou erros
  // Dentro desse bloco, você trata a exceção que foi capturada. Você pode exibir uma mensagem de erro, registrar o erro em algum sistema de logs, ou realizar qualquer ação necessária para lidar com o erro.
} finally {
  // Código que será executado sempre no final (opcional)
  // Este bloco é opcional. Ele é usado para definir código que será executado independentemente de ter ocorrido uma exceção ou não. É útil para ações que precisam ser feitas independentemente de qualquer erro, como liberar recursos ou limpar o estado de variáveis.
}

*/

// throw new Error:
// O throw new Error é uma forma de gerar uma exceção manualmente em um programa.
// Ele lança um erro que pode ser capturado pelo bloco catch.
// Exemplo:
try {
  if (true) {
    throw new Error("Erro ocorrido");
  }
} catch (error) {
  console.log(error.message); // Exibe a mensagem de erro -> Erro ocorrido
}

// cd javascript/aulas/modulo-avançado
// node --watch try-catch.js
