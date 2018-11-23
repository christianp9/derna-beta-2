

module.exports = (app) => {
  const student_controller = require('../student_controller/student_controller')
  const student_celebrate = require('../middleware/student_celebrate')
  const tareas_controller=require('../student_controller/tareas_controller')
  const tareas_celebrate= require('../middleware/tareas_celebrate')
//students
  app.get('/', student_controller.render_student);

  app.get('/students', student_controller.get_Students);

  app.get('/boton', student_controller.boton);

  app.post('/student', student_celebrate, student_controller.add_student);

  app.post('/registro', student_celebrate, student_controller.form_add_student);

  app.get('/init', (req, res) => {
    res.render('init.ejs')
  })
//tareas
app.get('/tareas', tareas_controller.render_tareas);

app.get('/pendientes', tareas_controller.get_tareas);

app.post('/lista', tareas_celebrate, tareas_controller.add_tareas);

  app.get('*', (req, res) => {
    res.status(500).send({ err: 'servido no encontrado' });
  })

};
