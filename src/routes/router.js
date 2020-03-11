const mainRoute = require("./main/main");
const products = require("./products/products");
const signUp = require("./signUp/signUp");

const router = {
  "/signUp": signUp,
  "/products": products,
  default: mainRoute
};

module.exports = router;
