const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  pic: {
    type: String,
    required: true
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
  },
  active: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model(`products`, productSchema);
