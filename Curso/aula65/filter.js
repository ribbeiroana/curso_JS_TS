// filter - sempre retorna um array com a mesma quantidade ou menos que o array original
// filter - retorna um novo array mas não mexe no original

// Retorne os números maiores que 10 
// const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];

// nessa funccao estou utilizando somente o valor então não preciso mandar os parametros indice e array
// function callbackFilter(valor, indice, array) { // essa função tem que retorna um valor boolean (true ou false)
//     return valor > 10;
// }
// const numFiltrados = num.filter(callbackFilter); // o metodo filter recebe uma função de callback
// console.log(numFiltrados)


// essa função de forma reduzida
// const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];
    
// const numFiltrados = num.filter(function(valor) {
//     return valor > 10;
// }); 
// console.log(numFiltrados)

// ou usar arrow function
// const numFiltrados = num.filter(valor => valor > 10); 


// 2 EXEMPLO

// const pessoas = [ // cada indice é um objeto 
//     {nome: 'Luiz', idade: 62},
//     {nome: 'Maria', idade: 23},
//     {nome: 'Eduardo', idade: 55},
//     {nome: 'Leticia', idade: 19},
//     {nome: 'Rosana', idade: 32},
//     {nome: 'Wallace', idade: 47},
// ];
//retorne as pessoas que tem o nome com 5 letras ou mais 
// const pessoasletras = pessoas.filter(obj => obj.nome.length >= 5);
// console.log(pessoasletras)


//retorne as pessoas com mais de 50 anos 
// const pessoasIdade = pessoas.filter(obj => obj.idade > 50);
// console.log(pessoasIdade);


//retorne as pessoas cujo o nome termina com a 
// const nomeTerminaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a')); //toLowerCase() converte em letras minusculas // endsWith(a) termina com a 
// console.log(nomeTerminaA);