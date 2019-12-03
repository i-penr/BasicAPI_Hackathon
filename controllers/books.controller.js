/* eslint-disable consistent-return */
const Book = require('../models/book');

function getBooks(req, res) {
  Book.find({}, (err, book) => {
    if (err) { return res.status(500).send({ err }); }

    return res.status(200).send(book);
  });
}

function getBookByID(req, res) {
  const { bookId } = req.params;

  Book.findById(bookId, (error, book) => {
    if (!book) { return res.status(404).send('Book not found'); }
    if (error) { return res.status(500).send({ error }); }

    return res.status(200).send(book);
  });
}

function getBookByTitle(req, res) {
  const { title } = req.params;

  Book.find({ title: { $regex: title } }, (err, book) => {
    if (!book) { return res.status(404).send({ message: 'Book not found' }); }
    if (err) { return res.status(500).send({ err }); }

    return res.status(200).send(book);
  });
}

function getBookByISBN(req, res) {
  const { isbn } = req.params;

  Book.find({ isbn: { $regex: isbn} }, (err, book) => {
    if (!book) { return res.status(404).send({ message: 'Book not found' }); }
    if (err) { return res.status(500).send({ err }); }

    return res.status(200).send(book);
  });
}

function getBookByDescription(req, res) {
  const { description } = req.params;

  Book.find({ description: { $regex: description } }, (err, book) => {
    if (!book) { return res.status(404).send({ message: 'Book not found' }); }
    if (err) { return res.status(500).send({ err }); }

    return res.status(200).send(book);
  });
}

function getBookByDate(req, res) {
  const { date } = req.params;

  Book.find({ date: { $regex: description } }, (err, book) => {
    if (!book) { return res.status(404).send({ message: 'Book not found' }); }
    if (err) { return res.status(500).send({ err }); }

    return res.status(200).send(book);
  });
}

function getBookByAuthor(req, res) {
  const { author } = req.params;

  Book.find({ author: { $regex: author } }, (err, book) => {
    if (!book) { return res.status(404).send({ message: 'Book not found' }); }
    if (err) { return res.status(500).send({ err }); }

    return res.status(200).send(book);
  });
}

function getBookByPrice(req, res) {
  const { price } = req.params;

  Book.find({ price: { $regex: price } }, (err, book) => {
    if (!book) { return res.status(404).send({ message: 'Book not found' }); }
    if (err) { return res.status(500).send({ err }); }

    return res.status(200).send(book);
  });
}

function getBookByPublishr(req, res) {
  const { editorial } = req.params;

  Book.find({ editorial: { $regex: editorial } }, (err, book) => {
    if (!book) { return res.status(404).send({ message: 'Book not found' }); }
    if (err) { return res.status(500).send({ err }); }

    return res.status(200).send(book);
  });
}

function createBook(req, res) {
  const book = new Book(req.body);

  Book.create(book, (err) => {
    if (err) { return res.status(500).send({ message: `Error saving book ${err}` }); }

    return res.status(200).send({ message: 'Book added successfully' });
  });
}

function replaceBook(req, res) {
  const { title } = req.body;
  const { isbn } = req.body;
  const { description } = req.body;
  const { author } = req.body;
  const { date } = req.body;
  const { price } = req.body;
  const { editorial } = req.body;

  const { bookId } = req.params;

  if (!title || !isbn || !description || !author || !date || !price || !editorial) {
    return res.status(400).send({ message: 'Missing parameters' });
  }

  const bookReplacement = req.body;

  Book.find({ bookId }, (err) => {
    if (err) return res.status(404).send({ message: `Book not found ${err}` });

    Book.replaceOne(bookReplacement, (error) => {
      if (error) return res.status(500).send({ error });

      return res.status(200).send({ message: 'Book replaced successfully' });
    });
  });
}

function editBook(req, res) {
  const { bookId } = req.params;

  Book.findByIdAndUpdate(bookId, req.body, { new: true }, (err, book) => {
    if (!book) { return res.status(404).send({ message: 'Book not found' }); }
    if (err) { return res.status(500).send({ err }); }

    return res.status(200).send(`Book updated successfully ${book}`);
  });
}

function deleteBook(req, res) {
  const { bookId } = req.params;

  Book.findOneAndDelete({ bookId }, (err, book) => {
    if (!book) { return res.status(404).send('Book not found'); }
    if (err) { return res.status(500).send({ err }); }

    return res.status(200).send(`Book deleted successfully ${book}`);
  });
}

module.exports = {
  getBooks,
  getBookByID,
  getBookByAuthor,
  getBookByDate,
  getBookByDescription,
  getBookByISBN,
  getBookByPrice,
  getBookByPublishr,
  getBookByTitle,
  createBook,
  replaceBook,
  editBook,
  deleteBook,
};
