// MAP

// dobre os numeros 
const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];
const numerosDobro = num.map(function(valor) {
    return (2*`${valor}`);
});

console.log(numerosDobro);

// Para cada elemento
// const pessoas = [ 
//     {nome: 'Luiz', idade: 62},
//     {nome: 'Maria', idade: 23},
//     {nome: 'Eduardo', idade: 55},
//     {nome: 'Leticia', idade: 19},
//     {nome: 'Rosana', idade: 32},
//     {nome: 'Wallace', idade: 47},
// ];

// Retorne apenas uma string com o nome da pessoa 
const nomes = pessoas.map(obj => obj.nome.join('') )

// Remova apenas a chave 'nome' do objeto


// Adicione uma chave  id em cada objeto
