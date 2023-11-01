const express = require('express')

const app = express()
// el :username es una forma de agregar un parametro a la ruta
app.get('/hello/:username', (req, res) => {
    console.log(typeof req.params.username)
    res.send(`Hello ${req.params.username}`)
})

//sumar por parametros
app.get('/add/:x/:y', (req, res) => {
    const {x, y} = req.params
    res.send(`Result: ${parseInt(x) + parseInt(y)}`)
})

app.get('/users/:username/photo', (req, res) => {
    if (req.params.username === "alfredo") {
        return res.sendFile('./Node.js.png', {
            root: __dirname
        })
    }
    res.send('El usuario no tiene acceso')
})


app.get('/nombre/:nombre/age/:age', (req, res) => {
    res.send(`El usuario ${req.params.nombre} tiene ${req.params.age}`)
})

app.listen(3000)
console.log('Server listening on port 3000')