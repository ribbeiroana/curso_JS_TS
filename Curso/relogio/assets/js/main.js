
function getTimeFromSecunds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT' ///
  });
}

console.log(getTimeFromSecunds(10));

const relogio = document.querySelector('.relogio');
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');
// os botões já estão sendo selecionados no addEvent...
let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = getTimeFromSecunds(segundos);

  }, 1000);
}

// iniciar.addEventListener('click', function(e){
//   relogio.classList.remove('pausado');
//   clearInterval(timer);
//   iniciaRelogio()
// });

// pausar.addEventListener('click', function(e){
//   clearInterval(timer);
//   relogio.classList.add('pausado');

// });

// zerar.addEventListener('click', function(e){
//   clearInterval(timer);
//   relogio.classList.remove('pausado');
//   relogio.innerHTML = '00:00:00'
//   segundos = 0;
// });

// versão simplificada
document.addEventListener('click', function (e) {
  const el = e.target; // target para verificar os elementos selecionados 

  if (el.classList.contains('zerar')) {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    relogio.innerHTML = '00:00:00'
    segundos = 0;
  } if (el.classList.contains('pausar')) {
    clearInterval(timer);
    relogio.classList.add('pausado');
  } if (el.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio()
  }
})

