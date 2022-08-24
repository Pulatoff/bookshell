const mongoose = require("mongoose");

const schema = mongoose.Schema({
  isbn: {
    type: String,
    required: [true, "You must enter isbn number"],
    minlength: 10,
    maxlength: 10,
  },
  title: { type: String, required: [true, "You must enter title of book"] },
  author: { type: String, required: [true, "You must enter author of book"] },
  first_publishing_year: {
    type: Date,
    required: [true, "You must published date"],
  },
  number_of_pages: {
    type: Number,
    required: [true, "You must enter number of pages"],
  },
});

const model = mongoose.model("books", schema);
