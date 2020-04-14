const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../", "db/users/", "all-users.json");

const getUserById = (request, response) => {
  const allUsers = fs.readFileSync(filePath, "utf8", (err, data) => {
    if (err) throw err;
    return data;
  });
  const id = request.params.id;

  const filterUsers = JSON.parse(allUsers).find(user => {
    return user.id === id;
  });
  const message = {};
  if (!!filterUsers) {
    message.status = "success";
    message.user = filterUsers;
  } else {
    message.status = "not found";
  }

  response.writeHead(200, { "Content-Type": "text/json" });
  response.write(JSON.stringify(message));
  response.end();
};

module.exports = getUserById;
