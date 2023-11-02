//El middleware es una funcion que capta la peticion antes de llegar a la ruta destino
//se utiliza por ejemplo para crear un logger (logs) o para validaciones

const express = require("express")
const morgan = require('morgan')

const app = express()
app.use(express.json())
app.use(morgan('dev'))


//cualquier ruta que visite mi app va a pasar por esta funcion
//este middleware es intermediario de todas las rutas porque esta declarado primero
//los middleware tienen si o si la funcion next, a diferencia de un endpoint
app.use((req, res, next) => {
  console.log(`Route: ${req.url} Method: ${req.method}`)
  next() //continua a la ruta
})

app.get("/profile", (req, res) => {
  res.send("profile page")
})

app.all("/about", (req, res) => {
    res.send("about page")
  })
//isAuthenticated?
//esta funcion actua como middleware para las rutas declaradas abajo
app.use((req, res, next) => {
if (req.query.login === 'alfredo@email.com') {
    next()
} else {
    res.send('No authorized')
}
})

app.get('/dashboard', (req, res) => {
    res.send('dashboard page')
})

//access to the public folder
app.use(express.static('public'))
//tambien se puede usar
// app.use('/public', express.static('/public'))
//asi pueden existir rutas con el mismo nombre que algun archivo de esa carpeta, y para
//acceder a la carpeta public habria que usar /public/index.html
//generalmente el public se ubica al final, si no encuentra ninguna ruta, busca el archivo en public
app.listen(3000)
console.log("Listening on port 3000")
