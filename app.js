
const { createFiles } = require('./Helps/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')

console.clear();

createFiles(argv.b, argv.l, argv.h)
    .then( nombreArchivo =>  console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err))