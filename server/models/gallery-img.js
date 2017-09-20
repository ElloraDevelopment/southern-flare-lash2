const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  img: {
       data: Buffer, 
       contentType: String 
    }
});

module.exports = mongoose.model(`gallery`, gallerySchema);