//EXERCÍCIO VALIDANDO CPF 

/*
705.484.450-52
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2 
70 0 40 28 48 20 16 15  0 = 237

11 - (237 % 11) = 5 (Primeiro Digito / se o numero for > 9 ele vira 0)

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2 
77 0 45 32 56 24 20 20 0  10

11 - (284 % 11 ) = 2 (Segundo Digito / se o numero for > 9 ele vira 0)
*/
// let cpf = '705.484.450-52';
// let cpfLimpo = cpf.replace(/\D+/g, '');
// cpfArray = Array.from(cpfLimpo);
// console.log(cpfArray.map(el => el));
function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D+/g, ''); // Substitui o que não for numero
        }
    });
}

ValidaCpf.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false; // this pq o valor esta dentro do objeto
    if (this.cpfLimpo.length !== 11) return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2) // slice para iniciar do 0 e ir até -2 pegar os 9 primeiros digitos do cpf
    if (this.isSequencia() === true) return false;
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, valor) => {
        ac += (regressivo * Number(valor));
        regressivo--;
        return ac;
    },
        0); // garante que o acumulador começe de 0

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCpf.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)    // repeat() vai repetir o primeiro caracter e o [0] é para pegar o primeiro caracter da sequencia // (this.cpfLimpo.length) é quantas vezes eu quero que repita o primeiro digito 
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCpf('705.484.450-52');
// cpf.valida(); // metodo
if (cpf.valida()) {
 console.log('CPF válido');
} else {
    console.log('CPF inválido');
}