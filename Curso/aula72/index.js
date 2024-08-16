// GETTERS E SETTERS 
// GET - PARA PEGAR O VALOR E EXIBIR
// SET - PARA SETAR O VALOR / validar / configurar 

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave  
        configurable: true, // opção de deixar ou não apagar a chave 
        get: function () {
            return estoque;
        },
        set: function (valor) {
            console.log(valor);
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 'O valor que eu quero';
console.log(p1.estoque)