class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    exibe() {
        textFont(fonteTelaInicial);
        textAlign(RIGHT, BOTTOM);
        textStyle(BOLD);
        stroke(10, 30, 10, 85);
        strokeWeight(6);
        fill(250, 240, 250);
        textSize(60);
        text(parseInt(this.pontos), width - 80, 90);
    }

    adicionarPontos() {
        this.pontos = this.pontos + 0.2;
    }
}