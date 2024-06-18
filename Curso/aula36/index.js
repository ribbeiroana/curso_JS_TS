// for in - estrutura de repetição - lê os índices ou chaves do objeto
//
//
//
//
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
for (let i in frutas) {
         console.log(i);
}
    
const frutas = ['Pera', 'Maça', 'Uva'];

for (let indice in frutas){
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

console.log(pessoa.nome);

for (let chave in pessoa) {
    console.log(chave);
}