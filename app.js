const bodyParser = require('body-parser');
const express = require('express');
const userRoute = require('./routes/userRoute');
const bookRoute = require('./routes/bookRoute');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', userRoute);
app.use('/book', bookRoute);

module.exports = app;
