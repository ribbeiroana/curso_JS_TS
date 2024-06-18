const pessoa = {
    nome: 'Ana',
    sobrenome: 'Ribeiro',
    idade: 19,
    endereço: {
        cidade: 'Belo Horizonte'
    }
};
// atribuição via desestruturação
// const { endereço: { cidade} } = pessoa;
 const { nome, ...resto } = pessoa;

console.log(nome, resto);