const mysql = require('mysql');
const connection = mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'escuela_de_voleibol'
})

connection.connect((err) => {
    if(err) return console.log("No se establecio conexion con la base de datos");
    console.log("Se estableció conexion a la DB");
});

module.exports = connection;