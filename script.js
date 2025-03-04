const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");

const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");

const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
const selectedName = selectedProduct.name;
const selectedPrice = selectedProduct.price;

const black = {
  nome: "Black",
  pasta: "/black.png",
};

const white = {
  nome: "White",
  pasta: "/white.png",
};

//criando o array para armazenar as cores e imagens
const opcoesCores = [black, white];

let imagemSelecionada = 1;
let corSelecionada = 0;

//bug => tem que selecionar duas vezes a terceira opcao de imagem!!
function trocarImagem() {
  const idOpcaoSelecionada = document.querySelector(
    "[name='opcao-imagem']:checked"
  ).id;
  imagemSelecionada = idOpcaoSelecionada.charAt(0);
  imagemVisualizacao.src =
    "./" + selectedName + "/" +
    opcoesCores[corSelecionada].pasta;

  // retorna o id do elemento selecionado pelo usuário (HTML => checked)
}


function trocarCor() {
  //atualizar variável de controle corSelecionada
  idOpcaoSelecionada = document.querySelector(
    '[name="opcao-cor"]:checked'
  ).id;

  corSelecionada = idOpcaoSelecionada.charAt(0);

  //trocar nome da cor
  nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome;
 
  //trocar imagem de visualização
  imagemVisualizacao.src =
    "./" + selectedName + opcoesCores[corSelecionada].pasta;
}

document.addEventListener('DOMContentLoaded', function () {
  if (selectedProduct) {
      idOpcaoSelecionada = 0;
      imagemVisualizacao.src = "./" + selectedName + opcoesCores[corSelecionada].pasta;
      document.getElementById('0-cor').checked = true;
      document.getElementById('1-cor').checked = false;
      document.getElementById('titulo-produto').textContent = selectedName;
      document.getElementById('preco').textContent = '$' + selectedPrice;
      const price = selectedPrice/12;
      document.getElementById('preco-parcelado').textContent = `Em até 12x de $${Math.round(price)}`;
      document.getElementById('a-vista').textContent = '$' + (selectedPrice - ((selectedPrice * 10) /100)) + ' à vista (10% de desconto)';

 } else {
      document.getElementById('product-details').textContent = 'Nenhum produto selecionado.';
  }
});