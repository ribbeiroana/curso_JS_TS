// object.defineProperty()

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave // faz com que a propriedade aparece mesmo não sendo definida no objeto 
        value: estoque, // valor do estoque - da chave 
        writable: false,  // propriedade com a opção de deixa ou não alterar a propriedade do estoque (false - o valor não pode ser alterado / true - o valor pode ser alterado)
        configurable: false, // opção de deixar ou não apagar a chave 
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
// console.log(Object.keys(p1)); // Para ver as chaves do objeto