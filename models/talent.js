const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const talentSchema = new Schema({
  talent: { type: String, required: true },
  name: { type: String, required: true },
  contact: { type: String, required: true},
  bio: { type: String, required: true },
  zipcode: { Integer, required: true}
});

const Talent = mongoose.model("Book", talentSchema);

module.exports = Book; 