//  FILTER + MAP + REDUCE


const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];

// Retorne a soma de todos os pares
const numPares = num.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);
// ac = acumulador
// [ 50, 80, 2, 8, 22 ] pares 


console.log(numPares);
// -> Filtrar pares 
// -> Dobrar os valores 
// -> Reduzir (somar tudo)
