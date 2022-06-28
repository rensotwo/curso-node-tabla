const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

console.log(argv);

// Sin yargs
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// Con yargs
// console.log('base: yargs', argv.b);

// const base = 4;

crearArchivo( argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch( err => console.log(err));

