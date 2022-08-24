const Book = require("../models/BookModel");
const axios = require("axios");

exports.addBook = async (req, res, next) => {
  const { isbn } = req.params;
  const response = await axios.get(`https://openlibrary.org/isbn/${isbn}.json`);

  const { authors, number_of_pages, title, publish_date } = response.data;
  const key = authors[0].key;
  const responsetAuthor = await axios.get(`https://openlibrary.org${key}`);
  const author = responsetAuthor.data;
  const book = await Book.create({
    title,
    number_of_pages,
    author: author.name,
    isbn,
    first_publishing_year: publish_date,
  });

  res.status(201).json({
    status: "success",
    data: book,
  });
};

exports.readBook = async (req, res, next) => {
  const { isbn, status } = req.body;
  const book = await Book.findOne({ isbn });
  if (!book) throw new Error("Book not found");
  book.status = +status;
  book.save();
  res.status(203).json({ status: "success" });
};

exports.getBooks = async (req, res, next) => {
  const books = await Book.find();
  res
    .status(200)
    .json({ status: "success", result: books.length, data: books });
};
