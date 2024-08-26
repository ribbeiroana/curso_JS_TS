require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }) // o mongoose que vai modelar os dados e garantir que eles são os dados corretos 
  .then(() => {
    app.emit('pronto'); // so começa a ouvir as requisições quando o mongoose estiver 'pronto'
  })
  .catch(e => console.log(e));
const session = require('express-session'); // sessions identifica navegadores dos clientes para salvar um cokiee 
const MongoStore = require('connect-mongo'); // para salvar as sessions na base de dados pq por padrão elas são salvas na memoria e não pode usar em memoria em produção 
const flash = require('connect-flash'); // mensagens flash - mensagens autodestrutivas - assim que é lida ela é destruída da base de dados
const routes = require('./routes'); // rotas da aplicação 
const path = require('path'); // caminhos 
const helmet = require('helmet'); // recomendação dos devs da express para aumentar a segurança do sistema 
const csrf = require('csurf'); // são tokens pros formulários - faz com que nenhum app externo faça postagens na aplicação - todos os formulários tem que ter 
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware'); // são os middlewares que são executados nas rotas - ex: se vc quer fazer algo no 'meio' do caminho
app.use(helmet());

app.use(express.urlencoded({ extended: true })); // cors
app.use(express.json()); // cors 
app.use(express.static(path.resolve(__dirname, 'public'))); // arquivos estaticos e que podem ser acessados diretamentes - css,js,img...

const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});// configuração de sessão 
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); // arquivos que redenriza na tela - geralmente são html, ejs ...
app.set('view engine', 'ejs'); // é a engine que está utilizando para rederinzar as telas 

app.use(csrf()); // configuração do campo escondido
// Nossos próprios middlewares - rotas 
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);
// aplicação escutando
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
