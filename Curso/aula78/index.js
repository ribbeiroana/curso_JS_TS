// POLIMORFISMO
// SUPERCLASSE
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
} // Função construtora 

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo ) {
        console.log(`Saldo insuficiente: R$${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`);
};

// const conta1 = new Conta(11, 22, 10);
// conta1.depositar(11);
// conta1.depositar(10);
// conta1.sacar(31);
// conta1.sacar(32);

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite) ) {
        console.log(`Saldo insuficiente: R$${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

const contaC = new CC(11, 22, 0, 100);
contaC.depositar(10);
contaC.sacar(20);

console.log();

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const contaP = new CP(12, 25, 0);
contaP.depositar(10);
contaP.sacar(20);