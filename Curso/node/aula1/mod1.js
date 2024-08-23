// const nome = 'Luiz';
// const sobrenome = 'Miranda';

// const falaNome = () => nome + ' ' + sobrenome; 
// console.log(module); objeto do node js  
// forma mais longa
// module.exports.nome = nome; // exporta o nome 
// console.log(module.exports);

//atalho
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// console.log(exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Ana';
const sobrenome = 'Ribeiro';

// module.exports = {
//     nome, sobrenome, Pessoa
// };
exports.nome = nome;
module.exports.sobrenome = sobrenome;
exports.outraCoisa = 'Outra Coisa';
