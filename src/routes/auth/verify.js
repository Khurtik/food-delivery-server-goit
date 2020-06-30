const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const config = require("../../../config");

app.set("superSecret", config.secret);

const verify = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, app.get("superSecret"), function (err, decoded) {
      if (err) {
        return res.status(404).json({
          success: false,
          message: "Failed to authenticate token.",
        });
      } else {
        req.decoded = decoded;
        console.log("authenticate token success");
        next();
      }
    });
  } else {
    res.status(403).send({
      success: false,
      message: "No token provided.",
    });
  }
};

module.exports = verify;
