const fs = require("fs");
const path = require("path");
const shortid = require("shortid");
const userPath = path.join(__dirname, "../../", "db/users/", "all-users.json");
const signUp = (request, response) => {
  const body = request.body;
  const user = { id: shortid.generate(), ...body };
  const { username, telephone, password, email } = body;

  if (username && telephone && password && email) {
    const data = JSON.parse(
      fs.readFileSync(userPath, err => {
        if (err) throw err;
      })
    );
    data.push(user);
    fs.writeFile(userPath, JSON.stringify(data), err => {
      if (err) throw err;
    });

    response.writeHead(200, { "Content-type": "text/json" });

    response.write(
      JSON.stringify({
        status: "success",
        user
      })
    );
    response.end();
  }
};

module.exports = signUp;
