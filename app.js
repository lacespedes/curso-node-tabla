const colors = require('colors'); 
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();


// console.log(process.argv);
// const [,,arg3='base=5'] = process.argv;
// const[, base] = arg3.split('=');
// console.log(base);

//const base = 2;
crearArchivo(argv.base||argv.b, argv.l||argv.listar, argv.h||argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.magenta))
    .catch(err => console.log(err).red);