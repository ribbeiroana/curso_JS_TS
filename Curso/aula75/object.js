function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
    // nbão criar metodos dentro da função construtora
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
// p2 é quem vc quer setar e Produto é e quem vc quer setar 
p2.aumento(10);

const p3 = Object.create(Produto.prototype, {
    // Produto.prototype é o contrutor da função
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

p3.aumento(10);
console.log(p3);

/*
função Construtora - associada ao object.prototype
Para configurar/acessar/reaproveitar outro objeto pode usar a função: __proto: objtA (nome do objeto que deseja)
*/