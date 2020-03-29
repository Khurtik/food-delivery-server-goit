const fs = require("fs");
const path = require("path");
const shortid = require("shortid");

const productsPath = path.join(
  __dirname,
  "../../",
  "db/products/",
  "all-products.json"
);
const usersPath = path.join(__dirname, "../../", "db/users/", "all-users.json");
const usersPathForOrder = path.join(__dirname, "../../", "db/users/");

const createOrders = (request, response) => {
  const allProducts = JSON.parse(
    fs.readFileSync(productsPath, "utf8", (err, data) => {
      if (err) throw err;
      return data;
    })
  );
  const allUsers = JSON.parse(
    fs.readFileSync(usersPath, "utf8", (err, data) => {
      if (err) throw err;
      return data;
    })
  );

  const body = request.body;
  const order = { id: shortid.generate(), ...body };

  const findNameUser = allUsers.find(user => user.id === body.user).username;

  const userPath = `${usersPathForOrder}${findNameUser}`;
  let test = false;
  const allIdProducts = allProducts.map(product => product.id);
  order.products.forEach(id => {
    if (test !== null) {
      allIdProducts.includes(+id) ? (test = true) : (test = null);
    }
    return;
  });

  if (test) {
    fs.mkdir(userPath, { recursive: true }, () => {
      fs.mkdir(`${userPath}/orders`, { recursive: true }, err => {
        if (err) throw err;
        fs.writeFile(
          `${userPath}/orders/${order.id}.json`,
          JSON.stringify(order),
          err => {
            if (err) throw err;
          }
        );
        response.writeHead(200, { "Content-type": "text/json" });
        response.write(
          JSON.stringify({
            status: "success",
            order
          })
        );
        response.end();
      });
    });
  } else {
    response.writeHead(200, { "Content-type": "text/json" });
    response.write(
      JSON.stringify({
        status: "failed",
        order: null
      })
    );
    response.end();
  }
};

module.exports = createOrders;
