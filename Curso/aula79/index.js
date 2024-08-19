// Factory Functions + Prototypes

function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando oi`);
        }
    };
    // não colocar os metodos aqui
    // cria a pessoa com objeto vazio
    // return Object.create(pessoaPrototype); 

    return Object.create(pessoaPrototype, { // opção para configurar as chaves 
       nome: { value: nome },
       sobrenome: { value: sobrenome }, 
    });
}
// _proto_ pai
// não tem a palavra new porque é uma Factory Functions
const p1 = criaPessoa('Ana', 'Ribeiro');
const p2 = criaPessoa('Maria', 'Ribeiro');
console.log(p1, p2);