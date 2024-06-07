const connection = require('./src/server/server'); 
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

app.use(express.static(path.join(__dirname, 'public'))); 
hbs.registerPartials(path.join(__dirname, './src/views', 'partials')); 
app.set('view engine', 'hbs');

app.use('/administracion',  require('./src/routes/administracion'));
app.use('/home', require('./src/routes/home'));


app.listen(3000,  () => {
    console.log('Servidor ecuchando en el puerto 3000');
});