const productos = require('./contenedor.js')
const express = require('express')
const app = express()
app.listen(process.env.PORT || 8080)

app.get('/productos', (req, res) => {
    let listaProductos = productos.getAllObjects()
    res.json(listaProductos)
})
app.get('/productoRandom', (req, res) => {
    let listaProductos = productos.getAllObjects()
    //obtener un producto aleatorio de listaProductos
    let productoAleatorio = listaProductos[Math.floor(Math.random() * listaProductos.length)]   
    res.json(productoAleatorio)
})


