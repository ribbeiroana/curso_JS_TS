// let num1 = prompt('Digite um núm: ');
// let num2 = prompt('Digite um núm: ');

console.log(num1, num2);

num1 = Number(num1);
num2 = Number(num2);

console.log (num1 + num2);

const resultado = num1 + num2 ;

alert('O resultado foi: ' + resultado);

//TIPOS DE DADOS PRIMITIVOS 

const nome1 = "Ana"; // string 
const idade = 19; // number 
let nomeAluno; //undefined -> não aponta para lugar nenhum na memória 
let sobrenomeAluno = null; // não aponta para lugar nenhum na memória 
// QUANDO USA O NULL VOCÊ DEIXA EXPLICITO QUE ESSA VARIÁVEL NÃO APONTE PARA LUGAR NENHUM NA MEMÓRIA E QUANDO É UNDEFINED É A LINGUAGEM QUE COLOCA ESSA CONFIGURAÇÃO

// A string é indexada ou seja cada caracter tem um índice (01234567..) 
// let umaString = 'Um texto';

console.log(umaString[4]);

// OU SEJA É POSSÍVEL CHAMAR UM ÍNDICE/PERGAR O ELEMENTO UM LOCAL DO TEXTO

// PARA MUDAR UMA PALAVRA PELA OUTRA 
console.log(umaString.replace ('Um', 'Outra'));


//EXERCÍCIOS 
const nome = prompt('DIGITE O SEU NOME COMPLETO: ');
document.body.innerHTML += `O seu nome é: ${nome} <br/>`;
document.body.innerHTML += `Seu nome tem  ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${nome.indexOf('a')} <br />`;
document.body.innerHTML += `Qual o último índice da letra A no seu nome? ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase} <br />`;
console.log(nome);


/////////////////////////////////////////////////////////////////////////////////////
//NUMBERS

// let num1 = 1;
// let num2 = 2.5;

console.log(num1.toString() + num2); // TRANSFORMAR O NUMBER PARA STRING 
console.log(num1.toFixed(2)); // para definir o número de casas decimais depois da vírgula 


//////////////////////////////////////////////////////////////////////////////////
MATH

let num1 = 9.56651;
let num2 = Math.floor(num1);

console.log(num2);
