const express = require('express')

const app = express()
const port = 4000

app.get(`/`, (req, res)=> {
    res.send(`2 + 2 = 4`)
})

app.listen(port,()=> {
    console.log(`Example app Listening at http://localhost:${port}`)
})


// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 5000

// const server = http.createServer((request, response) => {
// response.statusCode = 200
// response.setHeader('Content-Type', 'text/plain')
// response.end('Nombre: Emerson Jair Chacon Choque')
// })

// server.listen(port, hostname, () => {
// console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`)
// })