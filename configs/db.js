const mongoose = require("mongoose");

const DB = process.env.DB.replace(
  "<username>",
  process.env.DB_USERNAME
).replace("<password>", process.env.DB_PASSWORD);

const connectingToDB = () => {
  mongoose.connect(DB, () => console.log(`Connected to Database`));
};

module.exports = connectingToDB;
