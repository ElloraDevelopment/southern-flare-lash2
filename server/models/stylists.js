const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stylistSchema = new Schema({
  pic: {
    type: String,
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  services: [{
    type: String
  }],
  instagram: {
    type: String
  }
})

module.exports = mongoose.model("stylists", stylistSchema);
