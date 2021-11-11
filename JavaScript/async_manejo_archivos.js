//crear archivo, leer archivo, modificar archivo, eliminar archivo
//async

const fs = require('fs');

fs.readFile(':/archivo.txt', 'utf-8', (error, contenido) => {
    if (error) {
        return console.log(error);
    }
    console.log(contenido);
});

fs.writeFile(':/new.txt', 'Hola Mundo', (error) => {
    if (error) {
        return console.log(error);
    }
    console.log('Archivo creado');
}); 

fs.appendFile(':/new.txt', '\nHola Mundo', (error) => {
    if (error) {
        return console.log(error);
    }
    console.log('Archivo actualizado');
});


//eliminar archivo
fs.unlink(':/new.txt', (error) => {
    if (error) {
        return console.log(error);
    }
    console.log('Archivo eliminado');
});


console.log('Programa terminado');
