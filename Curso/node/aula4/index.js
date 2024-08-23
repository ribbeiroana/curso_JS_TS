const fs = require('fs').promises; // tem dois tipos de função - assyn - syn 
const path = require('path');

// fs.readdir(path.resolve(__dirname)) // fs vai escaniar as pastas  // caminho da pasta './'
// .then(files => console.log(files))
// .catch(e => console.log(e));

// fs.readdir('./');
// resposta
/*
[
  'aula01', 'aula03',   'aula04',         'aula05',
  'aula06', 'aula07',   'aula08',         'aula09',
  'aula10', 'aula11',   'aula12',         'aula13',
  'aula14', 'aula15',   'aula16',         'aula17',
  'aula18', 'aula19',   'aula20',         'aula21',
  'aula22', 'aula23',   'aula24',         'aula25',
  'aula27', 'aula28',   'aula29',         'aula30',
  'aula31', 'aula32',   'aula33',         'aula36',
  'aula37', 'aula39',   'aula40',         'aula41',
  'aula43', 'aula44',   'aula45',         'aula46',
  'aula49', 'aula50',   'aula51',         'aula52',
  'aula53', 'aula54',   'aula55',         'aula56',
  'aula58', 'aula60',   'aula61',         'aula62',
  'aula63', 'aula64',   'aula65',         'aula66',
  'aula67', 'aula68',   'aula69',         'aula70',
  'aula71', 'aula72',   'aula73',         'aula74',
  'aula75', 'aula76',   'aula77',         'aula78',
  'aula79', 'aula79.5', 'aula80',         'aula81',
  'aula82', 'aula83',   'aula84',         'aula85',
  'aula86', 'aula87',   'aula88',         'aula89',
  'aula91', 'aula92',   'aula93-webpack', 'aula94',
  'aula95', 'aula96',   'aula97',         'calc',
  'calc2',  'node',     'relogio'
]
*/

// (path.resolve(__dirname))
// resposta 
// [ 'index.js' ]

// lista todas as pastas 
// async function readdir(rootDir) {
//     rootDir = rootDir || path.resolve(__dirname);
//     const files = await fs.readdir(rootDir);
//     walk(files);
// }
// function walk(files) {
//     for(let file of files){
//         console.log(file);
//     }
// }
// readdir('colocar-caminho-absoluto');

//lista pastas e arquivos 
// async function readdir(rootDir) {
//     rootDir = rootDir || path.resolve(__dirname);
//     const files = await fs.readdir(rootDir);
//     walk(files, rootDir);
// }
// async function walk(files, rootDir) {
//     for (let file of files) {
//         const fileFullPath = path.resolve(rootDir, file);
//         const stats = await fs.stat(fileFullPath);
//         if (stats.isDirectory()) {
//             readdir(fileFullPath);
//             continue;
//         }
//         console.log(file);
//     }
// }
// readdir('colocar-caminho-absoluto');