const express = require('express');
const administracion = require('../controllers/administracion');
const routes = express();

routes.get('/', administracion.msg)

module.exports = routes;