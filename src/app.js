const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Content-Length, Accept, my-header");
    res.header("")
    next();
});

//Rotas
const index = require('./routes/index');
const usuarioRoute = require('./routes/usuarioRoute');
const moduloRoute = require('./routes/moduloRoute');

app.use('/', index);
app.use('/usuario', usuarioRoute);
app.use('/modulo', moduloRoute);

module.exports = app;