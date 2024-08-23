const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
/*
A opção "extended" diz para o express qual biblioteca ele deve utilizar para fazer o parsing do conteúdo das requisições que ele recebe.
Quando extended : true vai utilizar a biblioteca qs e quando for false ele vai utilizar a biblioteca querystring.
A diferença entre elas é que a biblioteca qs permite o aninhamento de objetos (nested objects), que é praticamente como o JSON trabalha:
{"animal":{"tipo":"cachorro","raca":"vira-lata","idade":3}}
E a biblioteca querystring não suporta nested objects.
*/
app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="qualquercoisa"><br>
  Outro campo: <input type="text" name="aquioutrocampo">
  <button>Olá mundo</button>
  </form>
  `);
});

app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  // :idUsuarios? com o ponto de interrogação indica que o parametro pode ou não ser recebido 
  // /profiles/3
  // /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
  // req.body vem pra post ou put 
  //query string
  console.log(req.params);
  console.log(req.query);
  res.send(req.query.facebookprofile);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.qualquercoisa}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
