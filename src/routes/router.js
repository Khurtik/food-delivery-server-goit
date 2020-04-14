const express = require("express");
const router = express.Router();
const getAllProducts = require("./products/getAllProducts");
const getProductById = require("./products/getProductById");
const signUp = require("./users/signUp");
const getUserById = require("./users/getUserById");
const createOrders = require("./orders/createOrders");
const getProductsByIds = require("./products/getProductsByIds");

const query = (request, response, next) => {
  if (!!request.query.ids) {
    getProductsByIds(request, response);
  } else {
    next();
  }
};

router.get("/products", query, getAllProducts);
router.get("/products/:id", getProductById);
router.post("/users", signUp);
router.get("/users/:id", getUserById);
router.post("/orders/", createOrders);

module.exports = router;
