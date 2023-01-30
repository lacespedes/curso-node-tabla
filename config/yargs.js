const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .check( (argv, options) => {
                    if ( isNaN(argv.b) || isNaN(argv.base)) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    //demandOption: true,
                    describe: 'Numero de registros a multiplicar'
                })
                .check( (argv, options) => {
                    if ( isNaN(argv.h) || isNaN(argv.hasta)) {
                        throw 'hasta tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;