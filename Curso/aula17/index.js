function saudacao(){
    
}

/////////////////////////////////////////////////////////////////////////////
function saudacao(){
    console.log('Bom dia!');

}
// Para chamar uma função 
saudacao (); // os () é para falar que a função está sendo executada 

/////////////////////////////////////////////////////////////////////////////

function saudacao(nome){ // Dentro desse () vem os parâmentros que é similar as variáveis 
    console.log(`Bom dia ${nome}`); // o parêmetro vai ser exibido aqui

}
// Para chamar uma função 
saudacao ('Ana'); // Aqui você vai informar o que deve ter dentro do parâmentro nome

///////////////////////////////////////////////////////////////////////////////
//Usando o return 
// Essa função é reutilizável
function saudacao(nome){ // Dentro desse () vem os parâmentros que é similar as variáveis 
    return `Bom dia ${nome}`; // o parêmetro vai ser exibido aqui

}
// Para chamar uma função 
 const variavel = saudacao ('Ana'); // Aqui você vai informar o que deve ter dentro do parâmentro nome
 console.log(variavel);
 
 ///////////////////////////////////////////////////////////////////////////////
 
 function soma(x, y) {
    const resultado = x + y;
    return resultado;
// a function se encerra en return ou seja se adicionar algo depois de return não sera executável 
}

console.log(soma(2, 2));


function soma(x, y) {
    const resultado = x + y;
    return resultado;

}

console.log(soma(2, 2));