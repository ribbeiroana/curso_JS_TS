// Validando CPF com classes 

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

class ValidarCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    } // charAt(0) para pegar o primeiro caracter

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfParcial);
        const digito2 = this.geraDigito(cpfParcial + digito1);
        this.novoCPF = cpfParcial + digito1 + digito2;
    }

    geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for (let stringNumerica of cpfParcial) {
            total += reverso * Number(stringNumerica);
            // console.log(stringNumerica, reverso);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }

}

let validaCpf = new ValidarCpf('070.987.720.03'); // Instanciando a classe 
// validaCpf = new ValidarCpf('222.222.222-22'); // Instanciando a classe 

if(validaCpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}
// console.log(validaCpf.valida());