const colors = require('colors');
const fs = require('fs');
const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

        let salida = '';
        for (let i=1;i<=hasta;i++) { 
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('======================================'.green);
            console.log(`       TABLA DEL ${base}`.green);
            console.log('======================================'.green);
            
            console.log(salida.blue);
        }

        try {
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            return `tabla-${base}.txt`;
        } catch (error) {
            throw error;
        }
}

module.exports = {
    crearArchivo
}