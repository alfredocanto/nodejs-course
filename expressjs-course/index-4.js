const express = require('express')

const app = express()
//Caso: cliente nos envia un json o texto
app.use(express.text()) //para poder recibir texto
app.use(express.json()) //para poder recibir json   
app.use(express.urlencoded({extended: false})) //para recibir datos del form-encode crudos

app.post('/user', (req, res) => {
    console.log(req.body) //mostrar contenido de la peticion cliente
    res.send('Nuevo usuario creado') //Solo se puede ver con thunder client por ser post
})

app.listen(3000)
console.log('Listening on port 3000')