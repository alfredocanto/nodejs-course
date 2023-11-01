// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res)=> {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`server on port ${3000}`)

//EXPRESS ROUTING
const express = require('express')

const app = express() //en express se suele usar 'app' en vez de 'server'
app.get('/', (req, res) => {
    // res.sendFile('./static/index.html', {
    //     root: __dirname //ruta completa hasta el archivo
    // })
    res.send('helllo world')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/weather', (req, res) => {
    res.send('weather')
})

app.use((req, res) => {
    res.status(404).send('Ruta no existente') // Si no se agrega el status code, devuelve un 200
})

app.listen(3000)
console.log(`Server on port ${3000}`)

