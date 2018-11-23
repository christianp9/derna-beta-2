const { json, urlencoded } = require('express');
const body= require('body-parser')
const morgan = require('morgan');
const app = require('express')();
const port = 3000;
//settings
app.set('appName', 'mi primer server');
app.set('views', __dirname + '/views');
app.set('views engine', 'ejs');


const pkg = require('./package.json')

// express.json() parsea los datos provenientes del request.body
app.use(json());
app.use(urlencoded({ extended: false }))

//middlewares
app.use(morgan('dev'));
app.use(body.urlencoded({extended:false}))
//rutas
require('./routes/routes_students')(app);

app.listen(port, () => {
    console.log(`[${pkg.name}] Servidor Iniciado [Puerto: ${port}]`);
    //console.log('nombre de la app ', app.get('appName'));
});
module.exports = app
