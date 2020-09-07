const mongoose = require("mongoose");

const OrderDetailSchema = mongoose.Schema({
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
  item_id: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderDetails = mongoose.model("OrderDetails", OrderDetailSchema);

module.exports = { OrderDetails, OrderDetailSchema };
