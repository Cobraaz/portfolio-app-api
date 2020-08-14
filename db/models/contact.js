const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  fullName: { type: String, maxlength: 46 },
  email: { type: String, required: true, maxlength: 96 },
  phoneno: { type: String, required: true, maxlength: 15 },
  message: { type: String, required: true },
});

module.exports = mongoose.model("Contact", contactSchema);
