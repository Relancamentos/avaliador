document.addEventListener("DOMContentLoaded", function() {
  // Aguarde o DOM estar pronto

  // Defina o tempo em segundos após o qual a classe "esconder" será removida
  var segundos = 500;

  setTimeout(function() {
    // Coloque aqui o código para remover a classe "esconder"
    var botao = document.getElementById("video-button-acesso");
    botao.classList.remove("esconder2");
  }, segundos * 1000); // Converta segundos em milissegundos
});
