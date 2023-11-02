const express = require('express')
const app = express()
const morgan = require('morgan')

let products = [
    {
        id: 1,
        name: 'Macbook',
        price: 1000
    }
]
//set is used to store variables on the app
app.set('appName', 'API REST CRUD')
app.set('port', 3000)
//activates the case sensitive on the routes
app.set('case sensitive routing', true)

//middlewares
app.use(morgan('dev'))
app.use(express.json())

// ROUTES
//getAll
app.get('/products', (req, res) => {
    res.json(products)
})
//addProduct
app.post('/products', (req, res) => {
    const newProduct = {...req.body, id: products.length + 1}
    products.push(newProduct)
    res.send(newProduct)
})
//updateProduct
app.put('/products/:id', (req, res) => {
    const newData = req.body
    const productFound = products.find((p) => p.id === parseInt(req.params.id))
    if (!productFound) {
        return res.status(404).json({
            message: "Product not found"
        })
    } 
    products = products.map(p => p.id === parseInt(req.params.id) ? {...p, ...newData} : p)
    res.send({
        message: 'Product updated successfully'
    })
})
//deleteProduct
app.delete('/products/:id', (req, res) => {
    const productFound = products.find((p) => p.id === parseInt(req.params.id))
    if (!productFound) {
        return res.status(404).json({
            message: "Product not found"
        })
    } 
    products = products.filter(p => p.id !== parseInt(req.params.id))
    res.send({
        message: 'Product deleted successfully'
    })
})
//getOne
app.get('/products/:id', (req, res) => {
    const productFound = products.find((p) => p.id === parseInt(req.params.id))
    if (!productFound) {
        return res.status(404).json({
            message: "Product not found"
        })
    }
    res.json(productFound)
})

app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} on port: ${app.get('port')}`)