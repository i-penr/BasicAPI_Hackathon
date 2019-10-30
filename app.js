const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/userRoute');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', routes);

module.exports = app;
