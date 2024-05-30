const pessoa1 = {
    nome: 'luiz',  // atributos do objeto 
    sobrenome: 'Ribeiro',
    idade: 19,

  fala ()  { //função sem iniciar com function 
     console.log(`A minha idade é ${this.idade} `);
 },
 incrementaIdade (){
    this.idade++;
 }    
};


pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
