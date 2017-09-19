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
  active: {
    type: Boolean,
    required: true
  },
  instagram: {
    type: String
  }
})

module.exports = mongoose.model("stylists", stylistSchema);
