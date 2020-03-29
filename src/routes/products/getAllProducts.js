const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "../../",
  "db/products/",
  "all-products.json"
);

const getAllProducts = (request, response) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    response.writeHead(200, { "Content-Type": "text/json" });
    response.write(data);
    response.end();
  });
};

module.exports = getAllProducts;
