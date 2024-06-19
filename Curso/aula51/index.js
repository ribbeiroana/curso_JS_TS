// retorno da função 
// RETORNA UM VALOR 
// TERMINA A FUNÇÃO 

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// });


// function criaPessoa (nome, sobrenome) {
//     return { nome, sobrenome };
// }

// const p1 = criaPessoa ('Ana');
// const p2 = {
//     nome: 'João',
//     sobrenome: 'Oliveira'
// };

// console.log(typeof p1);
// console.log(typeof p2);

function falaFrase (comeco) {
    function falaResto (resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo);
