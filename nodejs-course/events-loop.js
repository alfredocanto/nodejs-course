// console.log('first')
// setTimeout(() => {
//   console.log('second')
// }, 0)
// console.log('third')

const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('welcome to the server')
    return res.end()
  }
  //blocking code, it block the node threading
  if (req.url === '/about') {
    for (let i = 0; i < 10000; i++) {
      console.log(Math.random())
    }
    return res.end('about page')
  }
  res.end('Not found')
})

server.listen(3000)
console.log('server on port 3000')
