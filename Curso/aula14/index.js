let num1 = 1.2546314;
let num2 = 2.5;

console.log(num1.toFixed(2));
// VARIÁVEIS COM LET E VAR (O VAR É MAIS ANTIGO)
let nome; // SEM INICIALIZAR 
nome = 'Qualquer valor'; // INICIALIZANDO A VARIÁVEL 
console.log(nome);  


// NÃO PODEMOS CRIAR VARIÁVEIS COM PALAVRAS RESERVADAS EX. let console ou let if 
// VARIÁVEIS PRECISAM TER NOMES SIGNIFICATIVOS 
// NÃO COMECAR O NOME DE UMA VARIÁVEL COM NÚMERO 
// OS NOMES DAS VARIÁVEIS NÃO PODEM CONTER ESPAÇOS OU TRAÇOS
// UTILIZAMOS CAMELCASE EX. nomeCompleto
// AS VARIÁVEIS SÃO CASE-SENSITIVE( LETRAS MAIUSCULAS E MINUSCULAS FAZER DIFERENÇA
// NÃO PODEMOS REDECLARAR VARIÁVEIS COM LET 
// NÃO UTILIZE VAR , UTILIZE LET


////////////////////////////////////////////////////////////////////////////////////////


// ECMAScript padronização da linguagem JavaScript

var nome1 = "João";
var nome2 = "Ana";

console.log(nome1, nome2);

//Usando o var você consegue redeclarar a variável 


///////////////////////////////////////////////////////////////////////////////////////
EXERCÍCIOS 


let varA = "A"; //B
let varB = "B"; // C
let varC = "C"; // A 

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;


// outra solução 
[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC);
