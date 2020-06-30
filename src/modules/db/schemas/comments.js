const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentsSchema = new Schema({
  product: String,
  author: String,
  text: String,
  mark: Number,
});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
