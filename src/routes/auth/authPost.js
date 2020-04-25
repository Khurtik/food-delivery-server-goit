// const jwt = require("jsonwebtoken");
// const User = require("../../modules/db/schemas/user");
// const bcrypt = require("bcrypt");

// const authPost = async (request, response) => {
//   const { username, email, password } = request.body;
//   try {
//     let user = await User.findOne({
//       email,
//     });
//     if (user) {
//       return response.status(400).json({
//         msg: "User Already Exists",
//       });
//     }

//     user = new User({
//       username,
//       email,
//       password,
//     });

//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(password, salt);

//     await user.save();

//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     jwt.sign(
//       payload,
//       "randomString",
//       {
//         expiresIn: 30,
//       },
//       (err, token) => {
//         if (err) throw err;
//         response.status(200).json({
//           token,
//         });
//       }
//     );
//   } catch (err) {
//     console.log(err.message);
//     response.status(500).send("Error in Saving");
//   }
// };

// module.exports = authPost;

const jwt = require("jsonwebtoken");
const User = require("../../modules/db/schemas/user");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const config = require("../../../config");

app.set("superSecret", config.secret);

const errorResp = {
  success: false,
  message: "Authentication failed.",
};

const passwMatches = (passw1, hash) => bcrypt.compareSync(passw1, hash);

const generateToken = (paramsForTokenGeneration) => {
  const secretKey = app.get("superSecret");

  return jwt.sign(paramsForTokenGeneration, secretKey, {
    expiresIn: "30d",
  });
};

const authPost = (req, res) => {
  const { username, password } = req.body;

  User.findOneAndUpdate({ username }, onFind);

  function onFind(err, user) {
    if (err) throw err;

    const correctPassword = passwMatches(password, user.password);
    const userId = user._id;
    console.log(userId);

    if (!user || !correctPassword) {
      res.json(errorResp);
      return;
    }

    const payload = {
      password,
      userId,
    };

    const token = generateToken(payload);

    res.json({
      success: true,
      message: "Enjoy your token!",
      token: token,
    });
  }
};

module.exports = authPost;
