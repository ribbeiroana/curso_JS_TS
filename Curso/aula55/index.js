// IIFE - UMA EXPRESSÃO DE FUNCÇÃO INVOCADA IMEDIATAMENTE - PROTEGE DO ESCOPO GLOBAL

// function qualquerCoisa() {
//     console.log(54544254);
// }
// qualquerCoisa();

(function() {
    const nome = 'Luiz';
})();

const nome = 'Qualquer coisa';

// NÃO TEM O CONFLITO DAS CONSTANTES PORQUE ELA ESTÁ DEFINIDA FORA DO ESCOPO GLOBAL E PROTEGIDA PELA FUNCTION
