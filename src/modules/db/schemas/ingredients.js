const mongoose = require("mongoose");
const { Schema } = mongoose;

const ingredientsSchema = new Schema({
  name: { type: String, unique: true },
  description: String,
});

const Ingredients = mongoose.model("Ingredients", ingredientsSchema);

module.exports = Ingredients;
