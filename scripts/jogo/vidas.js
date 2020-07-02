class Vida {
    constructor(max, inicial) {
        this.max = max;
        this.inicial = inicial;
        this.vidaAtual = this.inicial;

        this.largura = 40;
        this.altura = 40;
        this.xInicial = 20;
        this.y = 30;
    }

    exibe() {
        for (let i = 0; i < this.vidaAtual; i++ ) {
            const margem = i * 30;
            const posicao = this.xInicial * (i + 1);

            image( imagemVida, posicao + margem, this.y,
                 this.largura, this.altura);
        }
    }
    
    ganhaVida() {
        if(this.vidaAtual <= this.max) {
            this.vidaAtual++;
        }
    }

    perdeVida() {
        this.vidaAtual--;
    }
}

