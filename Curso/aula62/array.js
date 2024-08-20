// valor por referencia 
// é usado as duas formas

//Convertendo um array em uma string 
// const nomes = [ 'Ana', 'Paula' ];
// const nome = nomes.join(' ');
// console.log(nome);

//Convertendo uma string em um array
// Separa um indice do array - nesse ex ficara [ 'Ana', 'Paula' ]
// usa o (' '); porque as informações estão separadas por um espaço
// const nome = 'Ana Paula';
// const nomes = nome.split(' ');
// console.log(nomes) 

// const nomes = ['Eduardo', 'Maria', 'Joao'];

// fatear array - consegue usar numeros positivos e negativos
// const novo = nomes.slice(1, 3);
// console.log(novo);

// adiciona elementos no final do array
// nomes.push('João');
// console.log(nomes)

// shift no começo - não muito utilizado
// const removido = nomes.shift();
// console.log(nomes, removido)
 
// pop no final
// const removido = nomes.pop();
// console.log(nomes, removido)

// console.log(nomes.length) tamanho do array

// const novo = [...nomes]; // faz uma copia de nomes para novo para que a alteração reflita somente na copia 
// const nomes = new Array('Eduardo', 'Maria', 'Joao');

// novo.pop();
// console.log(nomes);
// console.log(novo);
