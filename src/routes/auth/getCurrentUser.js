const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const config = require("../../../config");
const User = require("../../modules/db/schemas/user");

app.set("superSecret", config.secret);

const getCurrentUser = async (req, res) => {
  const sendResponse = (user) => {
    if (!user) {
      return sendError();
    }

    res.json({
      status: "success",
      user: user,
    });
  };

  const sendError = () => {
    res.status(400);
    res.json({
      error: `User was not found`,
    });
  };

  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  jwt.verify(token, app.get("superSecret"), function (err, decoded) {
    const id = decoded.userId;
    User.findById(id).then(sendResponse).catch(sendError);
  });
};

module.exports = getCurrentUser;
