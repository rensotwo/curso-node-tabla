const fs = require('fs');

const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
    
        let salida, consola = '';
    
        for(let i = 1; i <= hasta; i++){
        
            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base * i} \n`;

        }

        if( listar ){
            console.log('================'.green);
            console.log('Tabla del: ' + colors.blue(base));
            console.log('================'.green);

            console.log(consola);
        }
        
        // Crea un archivo de texto
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        
        return `Archivo tabla-${base}.txt creado`;
        
    } catch (err) {
        throw err;
    }


}

// Exporta este objeto para que el archivo pricipal lo pueda leer
module.exports = {
    crearArchivo
}