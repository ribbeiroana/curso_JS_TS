// Reduce 
// Reduz o array a um único elemento 

// const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];
// const total = num.reduce(function(acumulador, valor, indice, array) {
//  acumulador.push(valor * 2);
//     return acumulador;
//     }, []);
//     console.log(total);


// Some todos os números 
// const total = num.reduce(function(acumulador, valor, indice, array) {
//     acumulador += valor;
//     return acumulador;
//     }, 0); acumulador iniciando com 0
//     console.log(total);


// Retorne um array com os pares (filter)
// const total = num.reduce(function(acumulador, valor, indice, array) {
//     if(valor % 2 === 0) acumulador.push(valor);
//         return acumulador;
//         }, []);
//         console.log(total);



// Retorne um array com o dobro dos valores (map)
// const total = num.reduce(function(acumulador, valor, indice, array) {
//     acumulador.push(valor * 2);
//        return acumulador;
//        }, []);
//        console.log(total);


const pessoas = [ 
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47},
];


// Retorne as pessoas mais velhas 
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);