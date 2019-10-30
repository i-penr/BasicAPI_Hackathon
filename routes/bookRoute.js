const express = require('express');
const bookController = require('../controllers/books.controller');

const Router = express.Router();


// GET
Router.get('/', bookController.getBooks);
Router.get('/:bookId', bookController.getBookByID);
Router.get('/:title', bookController.getBookByTitle);
Router.get('/:isbn', bookController.getBookByISBN);
Router.get('/:description', bookController.getBookByDescription);
Router.get('/:author', bookController.getBookByAuthor);
Router.get('/:price', bookController.getBookByPrice);
Router.get('/:editorial', bookController.getBookByPublishr);
Router.get('/:date', bookController.getBookByDate);

// POST
Router.post('/', bookController.createBook);

// PUT
Router.put('/:bookId', bookController.replaceBook);

// PATCH
Router.patch('/:bookId', bookController.editBook);

// DELETE
Router.delete('/:bookId', bookController.deleteBook);

module.exports = Router;
