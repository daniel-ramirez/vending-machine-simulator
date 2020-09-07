const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  processing_time: {
    type: Number,
    required: true,
  },
  creation_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Items", ItemSchema);
