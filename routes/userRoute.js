const express = require('express');
const userController = require('../controllers/users.controller');

const router = express.Router();

// GET
router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserByID);

// POST
router.post('/', userController.createUser);
router.post('/:mail', userController.login);

// PUT
router.put('/:userId', userController.replaceUser);

// PATCH
router.patch('/:userId', userController.editUser);

// DELETE
router.delete('/:userId', userController.deleteUser);

module.exports = router;
