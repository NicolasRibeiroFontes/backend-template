const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Rotas
const index = require('./routes/index');
const usuarioRoute = require('./routes/usuarioRoute');
const moduloRoute = require('./routes/moduloRoute');

app.use('/', index);
app.use('/usuario', usuarioRoute);
app.use('/modulo', moduloRoute);

module.exports = app;