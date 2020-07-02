function preload() {
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png')
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf')
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemVida = loadImage('imagens/assets/coracao.png')
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemGotinha = loadImage('imagens/inimigos/gotinha.png');
  imagemTroll = loadImage('imagens/inimigos/troll.png');
  imagemGotinhaVoadora = loadImage('imagens/inimigos/gotinha-voadora.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
}