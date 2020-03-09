const fs = require("fs");

const products = (request, response) => {
  if (request.method === "GET") {
    fs.readFile("./src/db/products/all-products.json", "utf8", (err, data) => {
      if (err) throw err;
      response.writeHead(200, { "Content-Type": "text/json" });
      response.write(data);
      response.end();
    });
  }
};

module.exports = products;
