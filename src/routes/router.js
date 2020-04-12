const express = require("express");
const mainRoute = require("./main/main");
const getUser = require("./users/getUser");
const createUser = require("./users/createUser");
const updateUser = require("./users/updateUser");
const createOrders = require("./orders/createOrders");
const getOrders = require("./orders/getOrders");
const createProduct = require("./products/createProduct");
const getProduct = require("./products/getProduct");
const updateProduct = require("./products/updateProduct");

const apiRoutes = express.Router();

apiRoutes
  .get("/", mainRoute)

  .get("/users/:id", getUser)

  .post("/users", createUser)

  .put("/users/:id", updateUser);

apiRoutes
  .post("/orders", createOrders)

  .get("/orders/:id", getOrders);

apiRoutes
  .post("/products", createProduct)

  .get("/products/:id", getProduct)

  .put("/products/:id", updateProduct);

module.exports = apiRoutes;
