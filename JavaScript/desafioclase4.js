const fs = require('fs');

// Lectura de archivo
 const data = fs.readFileSync('./ApellidoNombre.txt', 'utf-8');
 console.log(data);

// Crear carpeta
fs.mkdir('./Archivos', (err) => {
    if (err) throw err;
    console.log('Carpeta creada');
});
// Escritura de archivo
fs.writeFileSync('./Archivos/prueba.txt', 'hola! \n prueba');

// agregar texto a un archivo
fs.appendFileSync('./Archivos/prueba.txt', '\n texto que agregamos');


console.log('--------------------------------');
console.log('-----------borrado----------');
console.log('--------------------------------');

// Creo archivo para borrarlo
fs.writeFileSync('./Archivos/archivo_para_borrar.txt', 'Listo para borrar');
// eliminar archivo
fs.unlink('./Archivos/archivo_para_borrar.txt', (err) => {
    if (err) throw err;
    console.log('Archivo borrado');
});

