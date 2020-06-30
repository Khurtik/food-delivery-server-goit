const User = require("../../modules/db/schemas/user");
const bcrypt = require("bcrypt");

const signupUser = (req, res) => {
  const user = req.body;
  const hashedPassword = bcrypt.hashSync(user.password, 10);
  const userData = { ...user, password: hashedPassword };

  const newUser = new User(userData);

  const sendError = () => {
    response.status(400);
    response.json({
      error: "User was not saved",
    });
  };

  const sendResponse = (newUser) => {
    if (!newUser) {
      return sendError();
    }
  };

  newUser
    .save()
    .then((user) => {
      sendResponse(user, res, "201");
    })
    .catch(sendError);
};

module.exports = signupUser;
