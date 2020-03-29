const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "../../",
  "db/products/",
  "all-products.json"
);

const getProductById = (request, response) => {
  const allProducts = fs.readFileSync(filePath, "utf8", (err, data) => {
    if (err) throw err;
    return data;
  });
  const id = request.params.id;
  const filterProducts = JSON.parse(allProducts).find(product => {
    return product.id === +id;
  });

  const message = {};
  if (!!filterProducts) {
    message.status = "success";
    message.product = filterProducts;
  } else {
    message.status = "no products";
    message.product = [];
  }

  response.writeHead(200, { "Content-Type": "text/json" });
  response.write(JSON.stringify(message));
  response.end();
};

module.exports = getProductById;
