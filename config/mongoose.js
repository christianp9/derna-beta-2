const mongoose = require('mongoose');
const cosas= require('./data')

mongoose
  .connect('mongodb://root:test12345@ds121163.mlab.com:21163/student', { useNewUrlParser: true })
  .then(() => {
    console.log('Conectado')
  })
  .catch(() => {
    console.log('Error al Conectar')
  })

module.exports = mongoose;