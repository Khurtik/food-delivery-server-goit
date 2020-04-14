const Product = require("../../modules/db/schemas/products");

const getProduct = (request, response) => {
  const id = request.params.id;

  const sendResponse = (product) => {
    response.status(200);
    response.json(product);
  };

  const findProduct = Product.findById(id);

  findProduct.then(sendResponse).catch((err) => {
    console.error(err);
  });
};

module.exports = getProduct;
