class Jogo {
    constructor(){
        this.inimigoAtual = 0;
    }
    setup() {

        //somDoJogo.loop(); /*SOM DESATIVADOH */
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();
      
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 25, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 25, 52, 52, 104, 104, 8, 100);
        const troll = new Inimigo(matrizTroll, imagemTroll, width - 52, 0, 200, 200, 400, 400, 4, 100);
        const gotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imagemGotinhaVoadora, width - 52, 170, 100, 75, 200, 150, 10, 100);
        
        inimigos.push(inimigo);
        inimigos.push(troll);
        inimigos.push(gotinhaVoadora);
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            personagem.pula();
            somPulo.play();
          }
    }

    draw() {
        cenario.exibe();
        cenario.move();
      
        pontuacao.exibe();
        pontuacao.adicionarPontos();
        personagem.exibe();
        personagem.aplicaGravidade();
      
        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < - inimigo.largura;
        
        inimigo.exibe();
        inimigo.move();
      
        if(inimigoVisivel) {
            this.inimigoAtual++;
          if(this.inimigoAtual > 2) {
            this.inimigoAtual = 0;
          }
          inimigo.velocidade = parseInt(random(10,20));
        }
      
        if (personagem.colidindo(inimigo)) {
          console.log('colidiu');
          image(imagemGameOver, width/2 - 200, height/2); //depois centraliza 
          // noLoop();
        }
    }


}