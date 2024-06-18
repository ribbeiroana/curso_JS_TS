// let a = 'A';
// let b = 'B';
// let c = 'C';




// const numeros = [1, 2, 3];
// [a, b, c] = numeros;

// console.log (a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [primeiroNumero, segundoNumero, ...resto] = numeros; //..resto para pegar o resto do array 
console.log(primeiroNumero, segundoNumero);
console.log(resto);
