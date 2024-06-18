// Declaração de função 
// Fisrt-class object (Objetos de primeira classe)


// function expression
const souUmDado = function () {
    console.log('Sou um dado.');
};
// nome da constante se torna o nome da função 

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo: ');
    funcao();
}
executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// dentro de objeto 

const obj = {
    falar () {
        console.log('Estou falando ...');
    }
};
obj.falar();