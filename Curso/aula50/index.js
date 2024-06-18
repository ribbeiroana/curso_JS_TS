// parâmetros 
// variavel arguments que sustenta todos os argumentos enviados  

// function funcao () {
//     let total= 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function funcao ( { nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// }
// funcao ({ nome: 'Ana', sobrenome: 'Ribeiro', idade: 19});

// function funcao ( { nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// }

// let obj = ({ nome: 'Ana', sobrenome: 'Ribeiro', idade: 19});

// funcao (obj);

// function conta (operador, acumulador, numeros) {
//     console.log(operador, acumulador, numeros);
// }
// conta('+', 0, 20, 30, 40, 50);

// function conta (operador, acumulador, ...numeros) {
//     for (let numero in numeros) {
//         console.log(numero);
//     }
// }
// conta('+', 0, 20, 30, 40, 50);

function conta (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        acumulador += numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);