const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const talentSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  talent: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  bio: { type: String, required: true },
  zipcode: { type: Number, required: true }
});

const Talent = mongoose.model("Talent", talentSchema);

module.exports = Talent;
