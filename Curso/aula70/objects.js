// OBJETOS
// Objetos podem conter metodos - metodos são funções que estão dentro do objeto que executam ações 


// const pessoa = { // opção literal - mais utilizado
//     nome: 'Luiz',
//     sobrenome: 'Otávio',

// };

// outra opção
// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz',
// pessoa1.sobrenome = 'Otávio'

// console.log(pessoa['nome']); // pode usar das duas formas porém com [] é uma opção mais verbosa  
// console.log(pessoa.sobrenome);


// Factory functions / Constructor functions / Classes 

// Factory functions 
// function criaPessoa(nome, sobrenome) {// parametros da função
//     return {
//         nome,
//         sobrenome,
//         get nomecompleto() {
//         return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }
// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomecompleto);

// Constructor functions
function Pessoa(nome, sobrenome) { // não se usa criar algo / novo algo / ja coloca o nome do que se deseja 
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this); para travar o this 
}
// a palavra new cria primeiro um objeto vazio e pega a palavra this e atrela a ele 
// this varia de acordo com quem esta criando ele 
// se eu criasse uma nova constante p2 e atribuisse nome e sobrenome o this seria a o2 quando o p2 fosse chamado 
const p1 = new Pessoa('Luiz', 'Miranda');
Object.freeze(p1); // para travar o objeto e não ter mudanças com novas atribuições
// Pessoa é o construtor desse objeto - função que construiu esse objeto
console.log(p1);
