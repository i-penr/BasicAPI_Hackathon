const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({

  title: {
    type: String,
    required: [true, 'Title is required'],
    index: { unique: true },
  },

  isbn: {
    type: String, // No sé si el isbn sigue algún patrón o algo así que he puesto string
    required: [true, 'ISBN is required'],
    index: { unique: true },
  },

  description: {
    type: String,
    required: [true, 'Description is required'],
  },

  author: {
    type: String,
    required: [true, 'Author is required'],
  },

  date: {
    type: Date,
    required: [true, 'Date is required'],
  },

  price: {
    type: Number,
    required: [true, 'Price is required'],
  },

  editorial: {
    type: String,
    required: [true, 'Publisher is required'],
  },

});

const Book = mongoose.model('book', BookSchema);
module.exports = Book;
