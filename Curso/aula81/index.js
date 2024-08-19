// CLASSES
// Symbol - usado para criar uma chave privada 
/*
No JavaScript, é possível definir atributos privados usando o prefixo # desde o ECMAScript 2022. Essa sintaxe permite criar atributos realmente privados dentro da classe.

Exemplo:

class MyClass {
  #privateField;
 
  constructor(value) {
    this.#privateField = value;
  }
 
  getPrivateField() {
    return this.#privateField;
  }
}
Isso garante que #privateField só pode ser acessado dentro da classe MyClass.
*/
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    get velocidade() {
        return this[_velocidade];
    }
    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('fusca');

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 2000;
console.log(c1.velocidade);