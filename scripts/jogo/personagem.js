class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY;
    this.yBase = height - this.altura - this.variacaoY;
    this.y = this.yBase;
    this.velocidadeDoPulo = 0;
    this.gravidade = 4;
    this.alturaDoPulo = -35;
    this.pulos = 0;
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
      somPulo.play();
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yBase) {
      this.y = this.yBase;
      this.pulos = 0;
    }

  }

  colidindo(inimigo) {
    const precisao = .8;
    const colisao = collideRectRect(this.x + 6, this.y, this.largura * precisao, this.altura * precisao,
      inimigo.x + 8, inimigo.y + 10, inimigo.largura, inimigo.altura - 20);

    //pra ver as hitboxes 
    noStroke();
    fill(255, 0, 0, 50);
    rect(this.x + 6, this.y, this.largura * precisao, 8 + this.altura * precisao, );
    fill(0, 255, 0, 50);
    rect(inimigo.x + 8, inimigo.y + 10, inimigo.largura, inimigo.altura - 20);

    return colisao;
  }
}