const express = require('express')
const morgan = require('morgan')
const path = require('path')
require('ejs')

const app = express()
app.use(express.json())
app.use(morgan('dev'))
//contcatena el base dirname con la carpeta views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const HomeRoutes = require('./routes/home')
const UserRoutes = require('./routes/users')
app.use(HomeRoutes)
app.use(UserRoutes)

app.use((req, res, next) => {
  console.log(`Route: ${req.url} Method: ${req.method}`)
  next()
})

app.use(express.static('public'))
app.listen(3000)
console.log('Listening on port 3000')
