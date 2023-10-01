//1 passo - pega o botao que o usuario clicou
const botoes = document.querySelectorAll(".botao");
//passo 4 - pegar o personagem para mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // passo 3 - remover o select do botão selecionado
    desselecionarBotao();
    //passo 6 - verifica se existe outros com selecionado e remove
    desselecionarPersonagem();

    //passo 2 - adicionar classe selecionado no botao clicado
    botao.classList.add("selecionado");

    // passo 5 - adicionar classe selecionado no personagem que foi selecionado
    personagens[indice].classList.add("selecionado")
  });
});



function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

