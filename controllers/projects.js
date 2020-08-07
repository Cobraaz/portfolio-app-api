const mongoose = require("mongoose");
const Projects = mongoose.model("Projects");

exports.getProjects = async (req, res) => {
  const projects = await Projects.find({});
  return res.json(projects);
};
