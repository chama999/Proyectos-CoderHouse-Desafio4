//importar clase desafio2
const desafio = require('./Desafio2.js');

//Creo nuevo objecto "producto"
producto = new desafio.Contenedor()


//creo archivo nuevamente
producto.createFile()

//guardo primer producto
producto.saveObjects({
    nombre: 'notebook',
    descripcion: 'notebook dell',
    precio: 75000
})


//guardo segundo producto
producto.saveObjects({
    nombre: 'mouse genius',
    descripcion: 'mouse genius inalambrico',
    precio: 3000
})

//guardo tercer producto
producto.saveObjects({
    nombre: 'teclado genius',
    descripcion: 'teclado genius inalambrico',
    precio: 3500
})

//guardo cuarto producto
producto.saveObjects({
    nombre: 'monitor hp',
    descripcion: 'monitor hp 4k',
    precio: 120000
})

//imprimo todos los productos a este momento
console.log("----------------------------------------------------")
console.log("--------Imprimo producto primeros 4 productos-------")
console.log("----------------------------------------------------")
console.log(producto.getAllObjects())
//agrego quinto producto
producto.saveObjects({
    nombre: 'notebook lenovo',
    descripcion: 'notebook lenovo2',
    precio: 85000
})

//agrego sexto producto
producto.saveObjects({
    nombre: 'pendrive kingstone',
    descripcion: 'pendrive kingston 2gb',
    precio: 2000
})

//agrego septimo producto
producto.saveObjects({
    nombre: 'pendrive kingstone',
    descripcion: 'pendrive kingston 16gb',
    precio: 6000
})

//imprimo todos los productos (5)
console.log("----------------------------------------------------")
console.log("---------------Imprimo primeros 7 prod--------------")
console.log("----------------------------------------------------")

console.log(producto.getAllObjects())

//obtengo objecto de ID 1 e imprimo
console.log("----------------------------------------------------")
console.log("-----------------Imprimo producto id 1--------------")
console.log("----------------------------------------------------")
console.log(producto.getObjectById(1))

//obtengo objecto de ID 4 e imprimo
console.log("----------------------------------------------------")
console.log("-----------------Imprimo producto id 4--------------")
console.log("-------------------usando async await---------------")
let producto4 = desafio.getObjectByIdAsyncAwait(4)
console.log(producto4)



//elimino del objeto el producto id 3
console.log("----------------------------------------------------")
console.log("--------------Eliminamos producto id 3--------------")
console.log("----------------------------------------------------")
producto.deleteObjectById(3)

/*imprimo objetos, deben ser 4
porque elimine el producto id :3*/

console.log("----------------------------------------------------")
console.log("-----------------Imprimo productos -----------------")
console.log("----------------------------------------------------")
console.log(producto.getAllObjects())