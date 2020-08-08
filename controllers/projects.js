const mongoose = require("mongoose");
const Projects = mongoose.model("Projects");

exports.getProjects = async (req, res) => {
  const projects = await Projects.find({});
  return res.json(projects);
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Projects.findById(req.params.id);
    return res.json(project);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};

exports.createProjects = async (req, res) => {
  const projectsData = req.body;
  console.log(projectsData);
  // Todo: Exctract from req!
  const userId = req.user.sub;
  console.log(userId);
  const project = new Projects(projectsData);
  project.userId = userId;

  try {
    const newProject = await project.save();
    return res.json(newProject);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};

exports.updateProject = async (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const updatedProject = await Projects.findOneAndUpdate({ _id: id }, body, {
      new: true,
      runValidators: true,
    });
    return res.json(updatedProject);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};

exports.deleteProject = async (req, res) => {
  const project = await Projects.findOneAndRemove({ _id: req.params.id });
  return res.json({ _id: project.id });
};
