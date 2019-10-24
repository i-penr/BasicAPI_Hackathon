const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET
router.get('/user', function (req, res, next) {
    User.find({}).then(function(users){
        res.send(users);
    });
});

// POST
router.post('/user', function (req, res, next) {
    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);
});

// PUT
router.put('/user/:id', function (req, res, next) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        User.findOne({ _id: req.params.id }).then(function (user) {
            res.send(user);
        });
    });
});

// DELETE
router.delete('/user/:id', function (req, res, next) {
    User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
        res.send(user);
    });

});

module.exports = router;