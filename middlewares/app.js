const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());

// Logging requests
app.use(morgan("dev"));

// Routes

app.use("/", require("../routes/bookRoute"));

module.exports = app;
