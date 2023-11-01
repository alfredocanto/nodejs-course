const express = require('express')

const app = express()
//querys en la ruta, se declaran con ? i.e. ?x=20
//asi como tenemos req.params, tenemos req.query
//para multiples querys se concatenan con & y se accede por el nombre

app.get('/search', (req, res) => {
    if (req.query.q === 'javascript books') {
        res.send('Lista de libros de javascript')
        //los espacios se encodean como %20
        //si se envian dos querys iguales con distintos valores, se transforma en un array
    } else {
        res.send('Pagina normal')
    }
})
//el app.all hace que funcione con todos los verbs
app.all('/info', (req, res) => {
    res.send('server info')
})

app.listen(3000)
console.log('Server listening on port 3000')