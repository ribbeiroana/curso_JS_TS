function meuEscopo () {
    const form = document.querySelector('.form'); // Pode selecionar os elemntos do html como seleciona no CSS (por classe/ tag/ id ...)
    const resultado = document.querySelector('.resultado');
   // sempre que utilizar o sinal de igual tem que terminar com ponto e vírgula 

   const pessoas = []; // para armazenar em array
   function recebeEventoForm (evento) { // aqui estou selecionando o formulario (form) e pegando as classes dele 
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({ // cria o objeto e puxa do array pessoas 
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value


    });
    console.log(pessoas);

    resultado.innerHTML += `<p> Nome: ${nome.value} <br> Sobrenome: ${sobrenome.value} <br> Peso: ${peso.value} <br> Altura: ${altura.value} </p>` // para inserir no html o resultado

 
 
    
    // console.log para verficar se estou selecionando corretamente / ira aparecer no console o que foi selecionado / .value é para selecionar o valor 
   }
    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();