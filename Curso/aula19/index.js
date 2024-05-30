// Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valor 
//Referência (mutável) - array, object, function - passados por referência 

let a = [1, 2, 3];
let b = [...a]; //para copiar um array - copia o valor de a   
console.log(a, b); 

// os arrays também são indexados por elementos 
//                0        1        2
const alunos1 = ['João', 'Maria', 'Lucas'];

console.log(alunos1);


///////////////////////////////////////////////////////////////////////////////
// os arrays também são indexados por elementos 
//                0        1        2
const alunos2 = ['João', 'Maria', 'Lucas'];

console.log(alunos2[1]);


///////////////////////////////////////////////////////////////////////////////

// os arrays também são indexados por elementos 
//                0        1        2
const alunos = ['João', 'Maria', 'Lucas'];

alunos[3] = 'Ana';



///////////////////////////////////////////////////////////////////////////////

console.log(alunos); 
const alunos = ['João', 'Maria', 'Lucas'];

alunos[3] = 'Ana';
// para saber o tamannho do arrays 
console.log(alunos.length);

	
///////////////////////////////////////////////////////////////////////////////

const alunos = ['João', 'Maria', 'Lucas'];

//função para adicionar elementos no final do array
alunos.push('Otávio')
console.log(alunos);

///////////////////////////////////////////////////////////////////////////////

const alunos = ['João', 'Maria', 'Lucas'];

//função para adicionar elementos no começo do array
alunos.unshift('Otávio')
console.log(alunos);

///////////////////////////////////////////////////////////////////////////////

const alunos = ['João', 'Maria', 'Lucas'];

//função para remover elemntos do final do array 
alunos.pop()
console.log(alunos);


///////////////////////////////////////////////////////////////////////////////

const alunos = ['João', 'Maria', 'Lucas'];

//função para remover elemntos do final do array e você pode armazenar o elemento excluído em uma constante 
const removidos1 = alunos.pop();
console.log(removidos1);
console.log(alunos);

///////////////////////////////////////////////////////////////////////////////

const alunos = ['João', 'Maria', 'Lucas'];

//função para remover elemntos do começo do array e você pode armazenar o elemento excluído em uma constante 
const removidos = alunos.shift();
console.log(removidos);
console.log(alunos);


///////////////////////////////////////////////////////////////////////////////

const alunos = ['João', 'Maria', 'Lucas'];
alunos.push('Ana');
//função para fatear um arrays 
console.log(alunos.slice(0,3)); // o último elemento não é incluído

///////////////////////////////////////////////////////////////////////////////

const alunos = ['João', 'Maria', 'Lucas'];
alunos.push('Ana');
//Para saber se você está trabalhando com array 
console.log(alunos instanceof Array);