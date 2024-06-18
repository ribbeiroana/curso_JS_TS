// Para controlar times 

// function mostrarHora () {
//     let data = new Date();

//     return data.toLocaleTimeString('pt-BR', {
//         hour12: false 
//     });
// }

// function funcaoDoInterval() {
//     console.log(mostrarHora ());
// }

// setInterval(funcaoDoInterval, 1000);

function mostrarHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false 
    });
}

setInterval(function(){
    console.log(mostrarHora());
}, 1000);