const mongoose = require("mongoose");
const OrderDetailSchema = require("./orderDetailModel").OrderDetailSchema;

const OrderSchema = mongoose.Schema({
  order_number: {
    type: Number,
    required: true,
  },
  total_amount: {
    type: Number,
    required: true,
  },
  total_processing_time: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  delivery_date: {
    type: Date,
  },
  creation_date: {
    type: Date,
    default: Date.now,
  },
  order_details: [
    {
      type: OrderDetailSchema,
      ref: "OrderDetails",
    },
  ],
});

module.exports = mongoose.model("Orders", OrderSchema);
