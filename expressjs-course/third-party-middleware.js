const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json()) //this is also a middleware
app.use(morgan('dev')) // third party middleware, installed by npm

app.get('/home', (req, res) => {
    console.log(req.body)
    res.send('Home page')
})

app.listen(3000)
console.log('Listening on port 3000')