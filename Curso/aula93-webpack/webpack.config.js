const path = require('path'); // CommonJS

module.exports = {
  mode: 'production', // 'development'; / no modo production ele fica em uma linha de codigo
  entry: './src/index.js', // arquivo de entrada
  output: { // onde esta o bundle 
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js' // contem todos os arquivos da aplicação 
  }, // path resolve o caminho absoluto 
  // __dirname - diretório atual
  module: { // usa expressão regular
    rules: [{ // regras
      exclude: /node_modules/,
      test: /\.js$/, // onde está os arquivos que vão formar o bundle
      use: {
        loader: 'babel-loader', // qual loader vai usar 
        options: { //as presets que vai usar 
          presets: ['@babel/env']
        }
      }
    }]
  },
  devtool: 'source-map' // faz um mapeamento - pq o budle junta todos os arquivos então para debugar caso aconteça um erro fica mais complexo pois não dá para identificar em qual arquivo está o erro 
  // ele mostra o arquivo e a linha ex: index.js:4
};
//src - codigo fonte
//boilerplate - template
