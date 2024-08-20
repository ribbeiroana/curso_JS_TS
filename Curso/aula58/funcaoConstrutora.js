// Contrutora - sempre usar a palavra (new)
function Pessoa(nome, sobrenome) {
    // Atributos ou metodos Privadas
    const ID = 876874687;
    const metodoInterno = function() {

    };
    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um metodo');
    }
}

const p1 = new Pessoa('Ana', 'Paula');
p1.metodo();