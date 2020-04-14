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
  const query = request.query.ids.slice(1, -1).split(",");
  const findProduct = id => {
    return JSON.parse(allProducts).find(product => product.id === +id);
  };
  const all = [];
  query.filter(id => (!!findProduct(id) ? all.push(findProduct(id)) : false));
  const verification = query.length === all.length;
  const message = {};
  if (verification) {
    message.status = "success";
    message.products = all;
  } else {
    message.status = "no products";
    message.products = [];
  }

  response.writeHead(200, { "Content-Type": "text/json" });
  response.write(JSON.stringify(message));
  response.end();
};

module.exports = getProductById;
