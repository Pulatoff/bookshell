const mongoose = require("mongoose");

const schema = mongoose.Schema({
  isbn: {
    type: String,
    required: [true, "You must enter isbn number"],
    minlength: 13,
    maxlength: 13,
    unique: true,
  },
  title: { type: String, required: [true, "You must enter title of book"] },
  author: { type: String, required: [true, "You must enter author of book"] },
  first_publishing_year: {
    type: String,
    required: [true, "You must published date"],
  },
  number_of_pages: {
    type: Number,
    required: [true, "You must enter number of pages"],
  },
  status: { type: Number, default: 0 },
});

const model = mongoose.model("books", schema);

module.exports = model;
