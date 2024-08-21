import Pessoa, { nome, sobrenome, idade } from './modulo1';
// Para renomear o nome de uma variavel na importação e na exportação é a mesma sintaxe 
// nome as nome2 - import Pessoa, { nome as nomes2, sobrenome, idade } from './modulo1';

const p1 = new Pessoa(nome, sobrenome, idade);
console.log(p1);
