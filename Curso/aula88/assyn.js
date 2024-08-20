// PROMISES PARA AJUDAR A RESOLVER OS PROBLEMAS DE CB 
// só pode usar await se tiver usado async 

async function executa () {
const fase1 = await esperaAi('Fase 1', rand ());
console.log(fase1);
const fase2 = await esperaAi('Fase 2', rand ());
console.log(fase2);
const fase3 = await esperaAi('Fase 3', rand ());
console.log(fase3);
}
// pending - pendente
// fullfilled - resolvida
// rejected - rejeitada