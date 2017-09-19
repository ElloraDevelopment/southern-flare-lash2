const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  pic: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model(`cart`, cartSchema);
