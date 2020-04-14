const mongoose = require("mongoose");
const connectToDB = (dbUrl) =>
  mongoose
    .connect(dbUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.error("Database connection error");
    });

module.exports = connectToDB;
