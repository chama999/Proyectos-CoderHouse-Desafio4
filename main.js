const productos = require('./contenedor.js')
const express = require('express')
const app = express()
app.listen(process.env.PORT || 3000)

app.get('/', (req, res) => {
    res.send('<h2>Hola, ingrese a <a href="/productos"> /productos </a> para acceder a todos los productos o <a href="/productoRandom"> /productoRandom </a> para obtener un producto aleatorio</h2>')
})
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


