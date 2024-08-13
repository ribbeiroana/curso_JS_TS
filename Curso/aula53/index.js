function retornaFuncao() {
   const nome = 'Luiz';
   return function(){
    return nome;
   };
}

const funcao = retornaFuncao('Paula');
const funcao2 = retornaFuncao('Ana');

console.log(funcao);
console.log(funcao2);

// console.dir(funcao); // mesma coisa 
