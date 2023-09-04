const carro = {
    ligado: false,
    velocidade: 0,
    devolveStatusTexto: function () {
        return this.ligado ? 'ligado' : 'desligado';
    },
    imprimirVelocidade: function () {
        console.log(`Carro ${this.devolveStatusTexto()}. Velocidade ${this.velocidade}.`)
    },
    ligar: function () {
        if (this.ligado) {
            console.log('Este carro já está ligado.')
        } else {
            this.ligado = true;
            this.imprimirVelocidade();
        }
    },
    desligar: function () {
        if (!this.ligado) {
            console.log('Este carro já está desligado.')
        } else {
            this.ligado = false;
            this.velocidade = 0;
            this.imprimirVelocidade();
        }
    },
    acelerar: function () {
        if (!this.ligado) {
            console.log('Não é possível acelerar um carro desligado')
        } else {
            this.velocidade += 10;
            this.imprimirVelocidade();
        }
    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log('Não é possível desacelerar um carro desligado.')
        } else {
            this.velocidade -= 10;
            this.imprimirVelocidade();
        }
    },

}

carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()
