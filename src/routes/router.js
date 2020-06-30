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
const authPost = require("./auth/authPost");
const logoutGet = require("./auth/logoutGet");
const getCurrentUser = require("./auth/getCurrentUser");
const registerPost = require("./users/registerUser");
const verify = require("./auth/verify");
const addIngredients = require("./ingredients/ingredients");
const addComments = require("./comments/commentsToDB");
const getComments = require("./comments/getComment");

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

apiRoutes
  .post("/auth/login", authPost)

  .post("auth/register", registerPost)

  .use(verify);

apiRoutes.get("/auth/logout", logoutGet);

apiRoutes.get("/auth/current", getCurrentUser);

apiRoutes.post("/ingredients", addIngredients);

apiRoutes
  .post("/comments", addComments)

  .get("/comments", getComments);

module.exports = apiRoutes;
