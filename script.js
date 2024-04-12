// DUPLICAR CARDS 

const cardsGlobal = document.querySelector(".modelos");
const cardModelo = document.querySelector(".car-modelo");
const imagens = ["/src/img/carro-1.svg", "/src/img/carro-2.svg"];

for (let i = 0; i < 2; i++) {
  const novoCard = cardModelo.cloneNode(true);
  const novaImagem = novoCard.querySelector(".img-car");
  novaImagem.src = imagens[i];
  cardsGlobal.appendChild(novoCard);
}

