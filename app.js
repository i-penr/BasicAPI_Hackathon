const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Deprecation stuff--
mongoose.set('useFindAndModify', false); 
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost/userdb', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', routes);

app.use(function (err, req, res, next) {
    console.log(err);
    res.status(422).send("ERROR:"+  err.message);
});

app.listen(3000, function () {
    console.log('Listening..');
});
