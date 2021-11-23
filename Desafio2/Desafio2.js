const dir= __dirname + '\\Archivos\\'
const archivo='productos.json'
const fs=require('fs')

class Contenedor {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    
    //clear json file
    clearFile() {
        fs.writeFileSync(dir+archivo, '[]')
    }

    //create file if not exist
    createFile() {
        if (!fs.existsSync(dir)) {
            console.log('Carpeta Archivos no existe, procedemos a crearla');
            fs.mkdirSync(dir);
        }
        if (!fs.existsSync(dir+archivo)) {
            console.log('Archivo productos.json no existe, procedemos a crearlo');
            fs.writeFileSync(dir+archivo, '[]');
        }
        if (fs.existsSync(dir+archivo)){
            console.log('Archivo existente, procedemos a limpiar');
            fs.writeFileSync(dir+archivo, '[]')
        }
    }


    //return last id number object from json file
    getLastId() {
        let lastId = 0;
        let data = fs.readFileSync(dir+archivo, 'utf8');
        data = JSON.parse(data);
        data.forEach(element => {
            if (element.id > lastId) {
                lastId = element.id;
            }
        });
        return lastId;
    }

    // save objects in json file.
    saveObjects(objects) {
        let data = fs.readFileSync(dir+archivo, 'utf8');
        let finalObject = {
            ...objects,
            id: this.getLastId() + 1
        }
        data = JSON.parse(data);
        data.push(finalObject);
        data = JSON.stringify(data);
        fs.writeFileSync(dir+archivo, data);
    }


    //get objects by id from json file
    getObjectById(id) {
        let data = fs.readFileSync(dir+archivo, 'utf8');
        data = JSON.parse(data);
        let obj = data.find(element => element.id == id);
        return obj;
    }


    //get all objects from json file
    getAllObjects() {
        let data = fs.readFileSync(dir+archivo, 'utf8');
        data = JSON.parse(data);
        return data;
    }

    // delete by id number from json file
    deleteObjectById(id) {
        let data = fs.readFileSync(dir+archivo, 'utf8');
        data = JSON.parse(data);
        data = data.filter(element => element.id != id);
        data = JSON.stringify(data);
        fs.writeFileSync(dir+archivo, data);
    }


    //delete all objects from json file
    deleteAllObjects() {
        let data = fs.readFileSync(dir+archivo, 'utf8');
        data = JSON.parse(data);
        data = [];
        data = JSON.stringify(data);
        fs.writeFileSync(dir+archivo, data);
    }
}

    //get objects by id from json file
    async function getObjectByIdAsyncAwait(id) {
        try {
            let data = await fs.readFile(dir+archivo, 'utf8', (error, data) => {
            data = JSON.parse(data);
            let obj = data.find(element => element.id == id);
            console.log("--------------------------")
            console.log(obj);
            console.log("--------------------------")
            return obj;
            });
        } catch (error) {
            console.log(error);
        }
    }

exports.Contenedor = Contenedor;
exports.getObjectByIdAsyncAwait = getObjectByIdAsyncAwait;
