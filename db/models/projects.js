const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  header: { type: String, required: true, maxlength: 128 },
  img: { type: String, required: true },
  title: { type: String, required: true, maxlength: 30 },
  description: { type: String, required: true },
  github: { type: String, required: true },
  link: { type: String },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Projects", projectsSchema);
