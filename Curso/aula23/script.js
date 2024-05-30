/*
&&  -> false && true  -> false 'o valor mesmo'
||  -> true || false  -> vai retornar 'o valor verdadeiro'
FALSY
*são considerados falsos em JS
0
' ', " ", `` aspas simples e dupla, crase
null
undefined (sem valor)
NaN

*/


console.log('Ana' && 'Maria') //Quando tudo é verdadeiro ele retorna o último valor 
console.log('Ana' && null && 'Maria') // Retorna null porque é o lugar que encontrou um false e ele para o circuito no null 
console.log( 0 || false || 'Ana') // ele vai retorna Ana porque ele precura a expressão true (verdadeira)
//Quando tudo é falso ele retorna o último valor falso



