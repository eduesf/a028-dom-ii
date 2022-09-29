function adicionaItem(event) {
  const container = document.getElementById("container");

  const novoElemento = document.createElement("article");
  const novoConteudo = document.createTextNode("Novo Item!");

  novoElemento.appendChild(novoConteudo);

  container.insertAdjacentElement("beforeend", novoElemento);

  novoElemento.setAttribute("class", "item");
  novoElemento.setAttribute("onclick", "removeItem(event)");
}

function removeItem(event) {
  event.target.remove();
}
