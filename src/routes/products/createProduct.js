const Product = require("../../modules/db/schemas/products");

const createProduct = (request, response) => {
  const product = request.body;

  const newProduct = new Product(product);

  const sendResponse = (product) => {
    console.log(product);

    response.json({
      status: "success",
      product,
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: "product was not saved",
    });
  };

  newProduct.save().then(sendResponse).catch(sendError);
};

module.exports = createProduct;
