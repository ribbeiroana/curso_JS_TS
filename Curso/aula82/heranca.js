// HERANÇA COM CLASSES

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' Já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' Já desligado');
            return;
        }
        this.ligado = false;
    }
}

// const d1 = new DispositivoEletronico('Smartphone');
// d1.ligar();
// d1.ligar();
// console.log(d1);

// extends - de onde vai herdar
// Quando se usa o extends tem que chamar o super para ligar a classe pai 
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome) // classe pai - chama os parametros da classe pai 
        this.cor = cor;
    }
}
// const s1 = new Smartphone('Iphone', 'Preto');
// console.log(s1);
class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    ligar() {
        console.log('Você alterou');
    }
}

const t1 = new Tablet('Tablet', true);
console.log(t1.ligado);

