class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = [
      {
        inimigo: 0,
        velocidade: 15

      },
      {
        inimigo: 0,
        velocidade: 20
      },
      {
        inimigo: 0, 
        velocidade: 15
      },
      {
        inimigo: 1,
        velocidade: 15
      },
      {
        inimigo: 1,
        velocidade: 20
      },
      {
        inimigo: 0,
        velocidade: 20
      },
      {
        inimigo: 2,
        velocidade: 25
      },
      {
        inimigo: 0,
        velocidade: 15,
      },
      {
        inimigo: 1,
        velocidade: 25
      }
    ]
    
  }
  setup() {

    somDoJogo.loop(); /*SOM DESATIVADOH */
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(3, 3);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 25, 110, 135, 220, 270);
    const gotinha = new Inimigo(matrizGotinha, imagemGotinha, width - 52, 25, 52, 52, 104, 104, 8);
    const troll = new Inimigo(matrizTroll, imagemTroll, width - 52, 0, 200, 200, 400, 400, 14);
    const gotinhaVoadora = new Inimigo(matrizGotinhaVoadora, imagemGotinhaVoadora, width - 52, 170, 100, 75, 200, 150, 10);

    inimigos.push(gotinha);
    inimigos.push(troll);
    inimigos.push(gotinhaVoadora);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();

    vida.exibe();
    pontuacao.exibe();
    pontuacao.adicionarPontos();
    personagem.exibe();
    personagem.aplicaGravidade();
    
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();
    

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length -1) {
        

        fill(100, 240, 100, 210);
        textAlign(CENTER, BOTTOM);
        textFont(fonteTelaInicial);
        textSize(120);
        text("Parabens Rafa!", width / 2, height / 2);

        noLoop();

        //this.indice = 0;
      }
    }

    if (personagem.colidindo(inimigo)) {
      console.log('colidiu');
      
      vida.perdeVida();
      personagem.ficaInvuneravel();

      if(vida.vidaAtual === 0){
        image(imagemGameOver, width / 2 - 200, height / 2); //depois centraliza 
        noLoop();
      }
      
    }
  }


}