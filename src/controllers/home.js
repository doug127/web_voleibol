const connection = require('../server/server');

exports.renderHome = (req, res) => {
    res.render('home', {
        msg: 'Bienvenido a la página de inicio'
    });
};