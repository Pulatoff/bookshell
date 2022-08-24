const express = require("express");
const app = express();
const morgan = require("morgan");

// Logging requests
app.use(morgan("dev"));

module.exports = app;
