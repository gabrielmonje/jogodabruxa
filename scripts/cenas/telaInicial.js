class TelaInicial {
    constructor() {

    }
    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        fill(0, 0, 0, 210);
        textAlign(CENTER, BOTTOM);
        textFont(fonteTelaInicial);
        textSize(50);
        text("As aventuras da", width / 2, height / 2);
        textSize(100);
        text("Bruxinha", width / 2, height / 2 + 120);
    }

    _botao() {
        botaoGerenciador.y = height / 7 * 5;
        botaoGerenciador.draw();
    }
}