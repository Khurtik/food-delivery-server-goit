const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const userSchema = new Schema({
  username: { type: String, required: true },
  telephone: String,
  password: { type: String, required: true },
  email: String,
  favoriteProducts: Array,
  viewedProducts: Array,
  orders: Array,
});

userSchema.plugin(timestamp);

const User = mongoose.model("User", userSchema);

module.exports = User;
