const fs = require('fs');

// función leer archivo
function leerArchivo(archivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(archivo, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

leerArchivo("./pruebasync_promise.txt")
    .then(data => {
        console.log(data.toString());
    }
    )
    .catch(err => {
        console.log(err);
    }
    );

console.log("se leyó el archivo usando async y promises")



// leer archivo await
async function leerArchivoAwait(archivo) {
    try {
        let data = await fs.readFile(archivo);
        console.log(data.toString());
    } catch (err) {
        console.log(err);
    }
}

leerArchivoAwait("./pruebasync_promise.txt");



// función para crear un archivo y registrar un log
function crearArchivo(archivo, contenido) {
    return new Promise((resolve, reject) => {
        fs.writeFile(archivo, contenido, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("El archivo se creó correctamente");
            }
        });
    });
}

//función para devolver si un numero es divisible por 3
function esDivisible(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 3 == 0) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
}



