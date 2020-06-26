class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);

    this.yBase = height - this.altura;
    this.y = this.yBase;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
  }

  pula() {
    this.velocidadeDoPulo = -30;
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yBase) {
      this.y = this.yBase;
    }

  }

  colidindo(inimigo) {
    const precisao = .8;
    const colisao = collideRectCircle(this.x, this.y, this.largura * precisao, this.altura * precisao,
      inimigo.x + (inimigo.largura / 2) + 5, inimigo.y + (inimigo.altura / 2), inimigo.largura);

    //pra ver as hitboxes  
    /*
    fill(255, 0, 255, 50);
    rect(this.x + 6, this.y, this.largura * precisao, 8 + this.altura * precisao, );
    //rect(inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
    circle(inimigo.x + (inimigo.largura / 2) + 5, inimigo.y + (inimigo.altura / 2), inimigo.largura);
    */
    return colisao;
  }
}