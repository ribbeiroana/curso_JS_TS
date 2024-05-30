// Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valor 
//Referência (mutável) - array, object, function - passados por referência 

let a = [1, 2, 3];
let b = [...a]; //para copiar um array - copia o valor de a   
console.log(a, b); 
