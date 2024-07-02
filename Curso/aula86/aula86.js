function rand (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
// resolve é usando para resolver os problemas 
// reject é usando para rejeitar os erros 
function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject ('bad value');
        setTimeout(() => {
            resolve (msg); // so pode mandar um parâmetro aqui 
        }, tempo);
    });
}
esperaAi('Frase 1', rand (1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi ('Frase 2', rand (1,3));
})
.then( resposta => {
    console.log(resposta);
    return esperaAi ('Frase 3', rand (1, 3));

})
.then(resposta => {
    console.log(resposta);
}).then (() => {
    console.log('o últmo');
})
.catch(e => {
    console.log('ERROR:', e);
});


// .then( resposta => {
//     return resposta + ' vai para outro THEN';
// }).then( resposta => {
//     console.log(resposta);
// })
// .catch();

// metodo then para resolve e metodo cath para reject ambos recebem funções  


// gambiarra
// esperaAi('Frase 1', rand(1, 3), function () {
//   esperaAi('Frase 2', rand(1, 3), function () {
//     esperaAi('Frase 3', rand(1, 3));
//   });
// });