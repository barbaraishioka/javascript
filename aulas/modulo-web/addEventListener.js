// addEventListener

const element = document.querySelector("element");

function nomeDaFunction() {
  // Código a ser executado;
}
element.addEventListener("click", nomeDaFunction);

element.addEventListener("click", () => {
  // Código a ser executado;
});

/*

Tem vários outros eventos como:

Eventos de Mouse:
click: Um clique.
dblclick: Duplo clique.
mousedown: Botão do mouse pressionado.
mouseup: Botão do mouse liberado.
mouseenter: Cursor entra no elemento.
mouseleave: Cursor sai do elemento.
mousemove: Cursor se move dentro do elemento.
mouseover: Cursor passa por cima do elemento (inclui filhos).
mouseout: Cursor sai do elemento (inclui filhos).

Eventos de Teclado:
keydown: Tecla pressionada.
keyup: Tecla liberada.
keypress: Tecla pressionada e mantida.

Eventos de Formulário:
focus: Elemento ganha foco.
blur: Elemento perde foco.
change: Valor de um elemento <input>, <select> ou <textarea> muda.
input: Valor de um elemento <input> ou <textarea> muda (em tempo real).
submit: Formulário enviado.
reset: Formulário resetado.

Eventos de Documento/Janela:
load: Página ou recurso terminou de carregar.
resize: Tamanho da janela muda.
scroll: Página ou elemento é rolado.
unload: Página ou recurso está prestes a ser descarregado.
beforeunload: Página está prestes a ser descarregada.

Eventos de Drag and Drop (Arrastar e Soltar):
dragstart: Início do arraste.
drag: Elemento sendo arrastado.
dragend: Fim do arraste.
dragenter: Elemento sendo arrastado entra em um destino de soltar.
dragover: Elemento sendo arrastado está sobre um destino de soltar.
dragleave: Elemento sendo arrastado sai de um destino de soltar.
drop: Elemento sendo arrastado é solto em um destino de soltar.

Eventos de Touch (Dispositivos Touchscreen):
touchstart: Início do toque.
touchmove: Movimento durante o toque.
touchend: Fim do toque.
touchcancel: Toque interrompido.

*/
