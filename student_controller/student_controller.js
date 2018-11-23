  //ultima version de js
'use strict'

let b1 = false;
let b2 = false;
let b3 = false;

const db_student = require('../model/model_student')

exports.render_student = async (req, res) => {



  let data = await find_students({});

  res.render(
    'index.ejs',
    {
      arr: data,
      title: 'Programa    ',
      b1: b1,
      b2: b2,
      b3: b3
    }
  )
}

exports.boton = (req, res) => {
  b1 = false;
  b2 = false;
  b3 = false;
  console.log(req.headers.opc)
  switch (req.headers.opc) {
    case 'p1':
    b1 = true
    b2 = false
    b3 = false
      break;
    case 'p2':
    b1 = false
    b2 = true
    b3 = false
      break;
    case 'p3':
    b1 = false
    b2 = false
    b3 = true
      break;

    default:
      break;
  }
  res.redirect('/')
}

exports.add_student = async (req, res) => {

  const mydata = {
    name: req.body.name,
    name_father: req.body.name_father,
    name_mother: req.body.name_mother,
    guardia_name: req.body.guardia_name,
    age: req.body.age,
    monthly_payment: req.body.monthly_payment,
    parent_number: req.body.parent_number,
    home_address: req.body.home_address,
    img: req.body.img
  }

  let resp = await create_student(mydata);

  return res.send(resp)

}

exports.form_add_student = async (req, res) => {

  const { name, name_father, name_mother } = req.body

  const mydata = {
    name: name,
    name_father: name_father,
    name_mother: name_mother,
    guardia_name: req.body.guardia_name,
    age: req.body.age,
    monthly_payment: req.body.monthly_payment,
    parent_number: req.body.parent_number,
    home_address: req.body.home_address,
    img: req.body.img
  }

  let resp = await create_student(mydata);

  console.log(resp)

  res.redirect('/')
}

async function create_student(data) {  //
  return await db_student.create(data)
}

async function find_students(params) {  //
  return await db_student.find(params)
}

exports.get_Students = async (req, res) => {
  let resp = await find_students({});
  return res.send(resp)
}

exports.ejs_getStudents = (req, res) => {
  form_add_student
}