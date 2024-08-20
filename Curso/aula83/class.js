// METODOS DE INSTANCIA E ESTATICOS 

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // metodo de instancia 
    aumentarVolume() {
        this.volume += 2;
    }
    // metodo de instancia 
    diminuirVolume() {
        this.volume -= 2;
    }
    // metodo estatico
    // metodos estaticos não tem acesso aos dados da instancia
    static trocaPilha() {
        console.log('Ok');

    }
}

const controle1 = new ControleRemoto('LG');
// chama a instancia + o metodo
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
// quando é um metodo estático:
//classe + metodo 
ControleRemoto.trocaPilha()
console.log(controle1);
