// METODOS UTEIS PARA OBJETO

// Object.values
// Object.entries
// Object.assign(des, any)
// Object.getOwnPropertyDescriptor(o, 'prop)
// ... (SPREAD)


const produto = { nome: 'Caneca', preco: 1.80};
const outraCoisa = produto;

produto.nome = "Ana";
console.log(outraCoisa);
