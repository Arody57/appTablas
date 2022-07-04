const fs = require('fs');
const { create } = require("domain");
const colors = require('colors')

const createFile = async (base = 5, listar = false, hasta = 10) => {
    try {
        let exit = '',
            print = '';
        console.clear();

        for (let index = 1; index <= hasta; index++) {
            exit += `${base} x ${index} = ${base * index}\n`;
            print += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`;
        }
        if(listar){
            console.log('*****************************'.blue);
            console.log(`Tabla del: ${colors.green(base)}`);
            console.log('*****************************'.blue);
            console.log(print);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, exit,);
    
        return `tabla-${base}.txt`;
    
    } catch (error) {
        throw error
    }
}

module.exports = {
    createFiles: createFile
}