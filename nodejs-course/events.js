const EventEmitter = require('events')

const customEmitter = new EventEmitter()
//customEmitter.emit //emitir un evento, como por ejemplo dar un click
customEmitter.on('response', (data, secondData) => {
  console.log('recibido')
  console.log(data, secondData)
}) //escucha un evento

customEmitter.emit('response', 'hello world')
customEmitter.emit('response', 'Esto es la emision de un evento', {
  name: 'alfredo',
  apellido: 'canto',
})
