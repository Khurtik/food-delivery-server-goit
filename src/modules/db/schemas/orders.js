const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const orderSchema = new Schema({
  creator: String,
  productsList: [{ product: String, type: String, itemsCount: Number }],
  deliveryType: String,
  deliveryAdress: String,
  sumToPay: Number,
  status: String,
});

orderSchema.plugin(timestamp);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
