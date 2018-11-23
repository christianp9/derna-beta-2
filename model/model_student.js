const Db = require('../config/mongoose')

const student_model = Db.Schema({
  name: {
    type: String
  },
  name_father: {
    type: String
  },
  name_mother: {
    type: String
  },
  guardia_name: {
    type: String
  },
  age: {
    type: Number
  },
  monthly_payment: {
    type: Number
  },
  parent_number: {
    type: String
  },
  home_address: {
    type: String
  },
  img: {
    type: String
  }
})

module.exports = Db.model('student', student_model)
