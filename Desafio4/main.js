const express = require('express')
const app = express()
app.listen(process.env.PORT || 3000)

app.get('/saludo', (request, response) => {
    response.send('<h2>Hola Mundo</h2>')
})

