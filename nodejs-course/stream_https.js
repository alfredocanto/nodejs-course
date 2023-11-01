const http = require('http')
const { createReadStream } = require('fs')

const server = http.createServer((req, res) => {
  const fileStream = createReadStream('./data/bigfile.txt', {
    encoding: 'utf-8',
  })

  fileStream.on('data', (chunk) => {
    fileStream.pipe(res) //pipe es para pasar de a chunks a otra funcion
  })

  fileStream.on('error', (error) => {
    console.log(error)
  })
})

server.listen(3000)
console.log('Listening on port 3000')
