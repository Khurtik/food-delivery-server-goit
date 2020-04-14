const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const router = require("./routes/router");

const startServer = port => {
  app
    .use(logger("dev"))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use("/", router);

  app.listen(port);
};

module.exports = startServer;
