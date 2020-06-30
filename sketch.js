//jogo da bruxa
function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new TelaInicial();
  jogo = new Jogo();
  jogo.setup();
  frameRate(40);
  
  cenas = {
    telaInicial,
    jogo,
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function draw() {
  cenas[cenaAtual].draw();
}

function keyPressed() {
  jogo.keyPressed(key);
}