const Db = require('../config/mongoose')

const student_model = Db.Schema({
  name: {
    title: String
  },
  description: {
    type: String
  },
  status: {
    type: Boolean
  },

})

module.exports = Db.model('tareas', student_model)
