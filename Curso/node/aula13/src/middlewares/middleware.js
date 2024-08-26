exports.middlewareGlobal = (req, res, next) => {
  if (req.body.cliente) {

    console.log();

    console.log(`Vi que você postou ${req.body.cliente}`);

    console.log();

  }
  next(); // tem que ter o next no middleware para a requisição terminar 
};

exports.outroMiddleware = (req, res, next) => {
  next();
};
