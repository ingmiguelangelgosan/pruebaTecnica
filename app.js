const express = require ('express')
const morgan = require('morgan') // Muestra información de las respuestas HTTP cuando se realiza una petición
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(require('./routes/action.routes'));

module.exports = app;