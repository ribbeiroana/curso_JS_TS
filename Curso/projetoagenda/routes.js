const express = require('express');
const route = express.Router();
const loginController = require('./src/controllers/loginController');
const homeController = require('./src/controllers/homeController');


// tudo o que for a pagina inicial vai se chamar index 
// rotas da home 
route.get('/', homeController.index);
// rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);

module.exports = route;
