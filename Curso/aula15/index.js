const num1 = Number(prompt('Digite um número: ')); // envolvido no number o prompt só retorna string 
const numero = document.getElementById('numero');
const texto = document.getElementById('texto');

numero.innerHTML = numero;
texto.innerHTML += `<p> Raiz quadrada é: ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p> Número inteiro: ${Number.isInteger(numero)}. </p>`;
texto.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)}. </p>`;
texto.innerHTML += `<p> Arredondado para cima: ${Math.ceil(numero)}. </p>`;





