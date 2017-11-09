const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stripeSchema = new Schema({
  total: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("charge", stripeSchema);
