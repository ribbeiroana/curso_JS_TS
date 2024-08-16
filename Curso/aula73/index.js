// METODOS UTEIS PARA OBJETO

// Object.values
// Object.entries
// Object.assign(des, any)
// Object.getOwnPropertyDescriptor(o, 'prop)
// ... (SPREAD)


// const produto = { nome: 'Caneca', preco: 1.80};
// const outraCoisa = produto;

// produto.nome = "Ana";
// console.log(outraCoisa);

const produto = { nome: 'Caneca', preco: 1.80};
for (let entry of Object.entries(produto)) {
    console.log(entry);
}
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) // passa os parametros (objeto e a propriedade que deseja ver)


// Object.entries - para ver os valores e as chaves
// resposta 
// {
//     value: 'Caneca',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
  