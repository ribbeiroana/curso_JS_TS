function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
function f1(callback) {
    setTimeout(function() {
        console.log('f1'); 
        if (callback) callback();
    }, rand());
}
function f2(callback) {
    setTimeout(function() {
        if (callback) callback();
        console.log('f2'); 
    }, rand());
}
function f3(callback) {
    setTimeout(function() { // usado para simular a demora de um retorno da base de dados 
        console.log('f3'); 
        if (callback) callback(); // função de callback
    }, rand());
}
f1(function(){
    f2(function(){
        f3(function(){
            console.log('ola');
        });
    });
});
// chama uma função/algo quando a outra terminar de ocorrer 
// callback se resolve com promisses 