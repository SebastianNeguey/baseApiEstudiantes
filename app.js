const express= require('express');
const config = require('./config.js');

const estudiante= require('./modulos/estudiante/rutas.js');


const error= require('./red/errors.js');

var cors = require('cors');
const app= express();
app.use(cors());

app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.urlencoded({ extended:true}));
app.set('port', config.app.port);

app.use('/estudiantes', estudiante);


module.exports= app;