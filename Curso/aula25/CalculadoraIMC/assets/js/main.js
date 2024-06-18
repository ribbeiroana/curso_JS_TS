function calcularImc() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const imc = [];
    function receberEventoForm(evento) {
        evento.preventDefault();
        const peso = document.querySelector('.peso').value;
        const altura = document.querySelector('.altura').value;

        imc.push({
            peso: parseFloat(peso),
            altura: parseFloat(altura)
        });

        const calculo = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

        if (calculo < 18.5) {
            resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} e está abaixo do peso`;
        }else if(calculo >= 18.5 && calculo <= 24.9){
            resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} e está com o peso normal`;
        }else if(calculo >= 25 && calculo <= 29.9){
            resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} e está sobrepeso`;
        }else if(calculo >= 30 && calculo <= 34.9){
            resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} Obesidade grau 1`;
        }else if(calculo >= 35 && calculo <= 39.9){
            resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} Obesidade grau 2`;
        }else if (calculo > 40){
            resultado.innerHTML = `Seu IMC é ${calculo.toFixed(2)} Obesidade grau 3`;
        }
        else{
            resultado.innerHTML = `Peso inválido`;
        }
        

    }

    form.addEventListener('submit', receberEventoForm);
}

calcularImc();
