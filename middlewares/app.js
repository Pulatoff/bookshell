const express = require("express");
const app = express();
const morgan = require("morgan");
const errorController = require("../controllers/errorController");
const AppError = require("../utils/AppError");

app.use(express.json());

// Logging requests
app.use(morgan("dev"));

// Routes

app.use("/", require("../routes/bookRoute"));

app.all("*", (req, res, next) => {
  return next(new AppError("This page has not defined", 404));
});

app.use(errorController);
module.exports = app;
